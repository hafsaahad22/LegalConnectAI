import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ChatWidget from "@/components/ChatWidget";
import { Scale, MessageCircle, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const features = [
  {
    title: "Constitutional Knowledge",
    description: "Complete Pakistani Constitution database with real Supreme Court cases"
  },
  {
    title: "Bilingual Support", 
    description: "Ask questions in Urdu or English and get accurate legal guidance"
  },
  {
    title: "Expert Lawyer Network",
    description: "Connect with verified Pakistani lawyers specialized in your legal area"
  },
  {
    title: "Voice Recognition",
    description: "Speak your legal questions naturally in both languages"
  }
];

const commonQuestions = [
  "Can police arrest without a warrant?",
  "What are women's inheritance rights?", 
  "How to file a cybercrime complaint?",
  "What are my tenant rights?",
  "How to file for divorce?",
  "What constitutes dowry harassment?"
];

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialQuestion, setInitialQuestion] = useState("");

  const handleQuestionClick = (question: string) => {
    setInitialQuestion(question);
    setIsChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-minimal-dark rounded-lg flex items-center justify-center">
                <Scale className="text-white h-5 w-5" />
              </div>
              <div>
                <h1 className="text-xl font-semibold minimal-dark">LegalConnect</h1>
                <p className="text-sm minimal-grey">Pakistani Legal AI Assistant</p>
              </div>
            </div>
            <Button 
              onClick={() => setIsChatOpen(true)}
              className="bg-minimal-dark text-white hover:bg-gray-800"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Ask Legal Question
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-bold minimal-dark mb-6 leading-tight">
              Understand Pakistani Law in 
              <span className="minimal-accent"> Plain Terms</span>
            </h1>
            <p className="text-xl minimal-grey mb-8 leading-relaxed">
              Get instant legal guidance powered by AI trained on the Pakistani Constitution, 
              Supreme Court cases, and expert legal knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => setIsChatOpen(true)}
                className="bg-minimal-dark text-white px-8 py-4 text-lg hover:bg-gray-800"
              >
                Start Legal Chat
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-gray-300 px-8 py-4 text-lg hover:bg-gray-50"
              >
                Browse Legal Topics
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm minimal-grey">AI Legal Assistant Online</span>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm minimal-grey mb-2">Ask me anything about Pakistani law...</p>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm">"Can police arrest without a warrant?"</p>
                  </div>
                </div>
                <div className="bg-minimal-dark rounded-lg p-4 text-white">
                  <p className="text-sm mb-2">🔍 DEFINITION</p>
                  <p className="text-xs text-gray-300">According to Article 10 of the Constitution...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold minimal-dark mb-4">Why Choose LegalConnect?</h2>
            <p className="text-xl minimal-grey">Advanced AI legal assistance built specifically for Pakistani citizens</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-minimal-dark rounded-lg flex items-center justify-center mb-4">
                    <Check className="text-white h-6 w-6" />
                  </div>
                  <h3 className="font-semibold minimal-dark mb-2">{feature.title}</h3>
                  <p className="text-sm minimal-grey">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Questions Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold minimal-dark mb-4">Common Legal Questions</h2>
            <p className="text-xl minimal-grey">Click any question to get instant legal guidance</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonQuestions.map((question, index) => (
              <Button
                key={index}
                onClick={() => handleQuestionClick(question)}
                variant="ghost"
                className="text-left p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all h-auto"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-minimal-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium minimal-dark text-sm">{question}</p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-minimal-dark py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Legal Guidance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start a conversation with our AI legal assistant trained on Pakistani law
          </p>
          <Button 
            onClick={() => setIsChatOpen(true)}
            className="bg-white text-black px-8 py-4 text-lg hover:bg-gray-100"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Start Legal Chat Now
          </Button>
        </div>
      </section>

      {/* Chat Widget */}
      <ChatWidget 
        isOpen={isChatOpen} 
        onToggle={setIsChatOpen}
        initialQuestion={initialQuestion}
        onQuestionSet={() => setInitialQuestion("")}
      />
    </div>
  );
}