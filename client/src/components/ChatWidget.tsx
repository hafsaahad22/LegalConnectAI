import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, X, Send, Mic, Bot, User } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import VoiceRecorder from "./VoiceRecorder";
import type { LegalResponse, ChatRequest } from "@shared/schema";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  response?: LegalResponse;
  timestamp: Date;
}

interface ChatWidgetProps {
  isOpen: boolean;
  onToggle: (open: boolean) => void;
  initialQuestion?: string;
  onQuestionSet?: () => void;
}

const suggestedQuestions = [
  "Can police arrest without a warrant?",
  "What does the Constitution say about women's rights?",
  "How can I file a cybercrime complaint?",
  "What are dowry laws in Pakistan?"
];

export default function ChatWidget({ isOpen, onToggle, initialQuestion, onQuestionSet }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isVoiceRecording, setIsVoiceRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const chatMutation = useMutation({
    mutationFn: async (request: ChatRequest) => {
      const response = await apiRequest("POST", "/api/chat", request);
      return response.json() as Promise<LegalResponse>;
    },
    onSuccess: (response, variables) => {
      const botMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: "Legal Analysis Complete",
        response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to get legal response. Please try again.",
        variant: "destructive"
      });
    }
  });

  useEffect(() => {
    if (initialQuestion && onQuestionSet) {
      setInputValue(initialQuestion);
      onQuestionSet();
    }
  }, [initialQuestion, onQuestionSet]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    const question = inputValue.trim();
    if (!question) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: question,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    chatMutation.mutate({
      question,
      language: "en" // TODO: Add language detection
    });
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
    setTimeout(() => sendMessage(), 100);
  };

  const handleVoiceResult = (transcript: string) => {
    setInputValue(transcript);
  };

  const formatLegalResponse = (response: LegalResponse) => (
    <div className="space-y-4 text-sm">
      <div>
        <h4 className="font-semibold pakistan-green mb-2">🔍 DEFINITION</h4>
        <p className="text-gray-700">{response.definition}</p>
      </div>
      
      <div>
        <h4 className="font-semibold pakistan-green mb-2">🔍 YOUR QUESTION EXPLAINED</h4>
        <p className="text-gray-700">{response.explanation}</p>
      </div>

      {response.constitutionalArticles.length > 0 && (
        <div>
          <h4 className="font-semibold pakistan-green mb-2">📜 RELEVANT CONSTITUTIONAL ARTICLES</h4>
          <div className="space-y-2">
            {response.constitutionalArticles.map((article, index) => (
              <div key={index} className="text-gray-700">
                <div className="font-medium">• Article {article.article}: "{article.title}"</div>
                <div className="ml-4 text-sm">Summary: {article.summary}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {response.supremeCourtCases.length > 0 && (
        <div>
          <h4 className="font-semibold pakistan-green mb-2">⚖️ RELEVANT SUPREME COURT CASES</h4>
          <div className="space-y-2">
            {response.supremeCourtCases.map((case_, index) => (
              <div key={index} className="text-gray-700">
                <div className="font-medium">• "{case_.title}"</div>
                <div className="ml-4 text-sm">Summary: {case_.summary}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {response.recommendedLawyers.length > 0 && (
        <div>
          <h4 className="font-semibold pakistan-green mb-2">👨‍⚖️ RECOMMENDED LAWYERS</h4>
          <div className="space-y-1">
            {response.recommendedLawyers.map((lawyer, index) => (
              <div key={index} className="text-gray-700 text-sm">
                • Name: {lawyer.name} - Area: {lawyer.area} - Region: {lawyer.region}
              </div>
            ))}
          </div>
        </div>
      )}

      {response.followUpQuestions.length > 0 && (
        <div>
          <h4 className="font-semibold pakistan-green mb-2">💡 SUGGESTED FOLLOW-UP QUESTIONS</h4>
          <div className="space-y-1">
            {response.followUpQuestions.map((question, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => handleSuggestedQuestion(question)}
                className="block text-left text-sm pakistan-green hover:underline p-1 h-auto"
              >
                • {question}
              </Button>
            ))}
          </div>
        </div>
      )}

      {response.usedFallback && (
        <div className="text-xs text-gray-500 bg-yellow-50 p-2 rounded border-l-4 border-yellow-400">
          🚩 This response was generated using offline legal data because live data was temporarily unavailable.
        </div>
      )}
    </div>
  );

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => onToggle(true)}
          className="chat-bubble bg-pakistan-green text-white p-4 rounded-full hover:bg-green-700 transition-colors animate-bounce-in"
        >
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-medium">Legal AI Assistant</div>
              <div className="text-xs opacity-80">Ask anything about Pakistani law</div>
            </div>
          </div>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-96 h-[600px] shadow-2xl border border-gray-200 animate-slide-up">
        {/* Chat Header */}
        <div className="bg-pakistan-green text-white p-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium">LegalConnect AI</div>
                <div className="text-xs opacity-80 flex items-center">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-1"></div>
                  Online
                </div>
              </div>
            </div>
            <Button
              onClick={() => onToggle(false)}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 h-96 overflow-y-auto bg-gray-50">
          {messages.length === 0 && (
            <div className="mb-4">
              <Card className="bg-white shadow-sm border">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-pakistan-green rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="text-white h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-900 mb-2">
                        Hi! I'm your Legal Assistant. Ask me anything about Pakistani law.
                      </div>
                      <div className="text-xs text-gray-500 mb-3">You can type or use voice input</div>
                      <div className="space-y-2">
                        {suggestedQuestions.map((question, index) => (
                          <Button
                            key={index}
                            onClick={() => handleSuggestedQuestion(question)}
                            variant="ghost"
                            size="sm"
                            className="block w-full text-left text-sm bg-green-50 hover:bg-green-100 pakistan-green p-2 rounded-lg h-auto"
                          >
                            {question}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {messages.map((message) => (
            <div key={message.id} className={`mb-4 ${message.type === 'user' ? 'flex justify-end' : ''}`}>
              {message.type === 'user' ? (
                <div className="bg-pakistan-green text-white p-3 rounded-xl max-w-xs">
                  <div className="text-sm">{message.content}</div>
                </div>
              ) : (
                <Card className="bg-white shadow-sm border">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-pakistan-green rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="text-white h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        {message.response ? formatLegalResponse(message.response) : message.content}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          ))}

          {chatMutation.isPending && (
            <div className="mb-4">
              <Card className="bg-white shadow-sm border">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-pakistan-green rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="text-white h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-600">Analyzing your legal question...</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t bg-white rounded-b-2xl">
          <div className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your legal question..."
                className="pr-10 focus:ring-pakistan-green focus:border-pakistan-green"
                disabled={chatMutation.isPending}
              />
              <VoiceRecorder
                onResult={handleVoiceResult}
                onRecordingChange={setIsVoiceRecording}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              />
            </div>
            <Button
              onClick={sendMessage}
              disabled={!inputValue.trim() || chatMutation.isPending}
              className="bg-pakistan-green text-white hover:bg-green-700"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-xs text-gray-500 mt-2 text-center">
            🔒 Your conversations are private and secure
          </div>
        </div>
      </Card>
    </div>
  );
}
