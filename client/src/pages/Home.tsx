import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ChatWidget from "@/components/ChatWidget";
import { Scale, Shield, Heart, Home as HomeIcon, Gavel, User, Laptop, Flag, Users, Clock, Search, MicOff, MessageCircle, Book } from "lucide-react";
import { useState } from "react";

const legalTips = [
  {
    icon: Shield,
    title: "Arrest Rights",
    description: "You cannot be arrested without cause or a warrant in most cases.",
    color: "bg-green-50 border-green-100",
    iconColor: "bg-pakistan-green"
  },
  {
    icon: Heart,
    title: "Dowry Laws", 
    description: "Dowry demands are not legally enforceable — and harassment over it is punishable.",
    color: "bg-purple-50 border-purple-100",
    iconColor: "bg-purple-600"
  },
  {
    icon: Laptop,
    title: "Cyber Crime",
    description: "WhatsApp threats can be charged under cybercrime law (PECA 2016).",
    color: "bg-blue-50 border-blue-100",
    iconColor: "bg-blue-600"
  },
  {
    icon: Scale,
    title: "Inheritance Rights",
    description: "Women have the right to inherit equally — by law.",
    color: "bg-orange-50 border-orange-100",
    iconColor: "bg-orange-600"
  }
];

const commonQuestions = [
  {
    icon: Heart,
    question: "How to file for divorce?",
    description: "Learn about divorce procedures and requirements"
  },
  {
    icon: HomeIcon,
    question: "Can my landlord evict me without notice?",
    description: "Understand your tenant rights and protections"
  },
  {
    icon: Gavel,
    question: "What is bail? Can I apply for it?",
    description: "Learn about bail procedures and eligibility"
  },
  {
    icon: Shield,
    question: "Can police arrest without a warrant?",
    description: "Know your rights during police encounters"
  },
  {
    icon: User,
    question: "What does the Constitution say about women's rights?",
    description: "Explore constitutional protections for women"
  },
  {
    icon: Laptop,
    question: "How can I file a cybercrime complaint?",
    description: "Report online harassment and cyber crimes"
  }
];

const features = [
  {
    icon: MessageCircle,
    title: "🤖 AI-Powered Responses",
    description: "Advanced AI trained on Pakistani Constitution, Supreme Court cases, and legal precedents for accurate guidance.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: Scale,
    title: "🏛️ Pakistani Legal Database",
    description: "Complete access to Constitution articles, Supreme Court judgments, and Pakistani legal frameworks.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: Users,
    title: "👨‍⚖️ Lawyer Connections",
    description: "Connect with verified Pakistani lawyers specialized in your legal area with detailed profiles and contact information.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  }
];

const enhancedFeatures = [
  {
    icon: MicOff,
    title: "🎙️ Voice Recognition",
    description: "Speak your legal questions in Urdu or English. Our AI understands both languages perfectly.",
    color: "bg-pakistan-green"
  },
  {
    icon: Clock,
    title: "⚡ Instant Responses", 
    description: "Get legal answers in under 1.5 seconds with our advanced fallback system, even offline.",
    color: "bg-blue-600"
  },
  {
    icon: Flag,
    title: "🌐 Bilingual Support",
    description: "Seamless switching between Urdu and English with proper legal terminology in both languages.",
    color: "bg-purple-600"
  },
  {
    icon: Search,
    title: "🔍 Smart Legal Search",
    description: "Advanced semantic search through Constitution articles, case law, and legal precedents.",
    color: "bg-green-600"
  }
];

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialQuestion, setInitialQuestion] = useState("");

  const handleQuestionClick = (question: string) => {
    setInitialQuestion(question);
    setIsChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-pakistan-green rounded-lg flex items-center justify-center">
                <Scale className="text-white h-5 w-5" />
              </div>
              <div>
                <h1 className="text-xl font-bold pakistan-green">LegalConnect</h1>
                <p className="text-xs text-gray-500">Pakistani Legal AI Assistant</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-sm pakistan-green hover:bg-pakistan-green hover:text-white">
                <Flag className="h-4 w-4 mr-1" />
                اردو
              </Button>
              <Button className="bg-pakistan-green text-white hover:bg-green-700 text-sm">
                <Users className="h-4 w-4 mr-1" />
                Find Lawyer
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pakistan-green to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-2 mb-4">
                <Flag className="text-accent-gold h-5 w-5" />
                <span className="text-accent-gold font-medium">🇵🇰 Ask Pakistan's Legal AI</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Understand Pakistani Law in{" "}
                <span className="text-accent-gold">Plain Terms</span>
              </h1>
              <p className="text-xl mb-8 text-green-100">
                👋 Welcome to LegalConnect — your trusted legal assistant for Pakistani laws.
                <br />🎙️ Ask in Urdu or English. Type or speak. We'll explain your rights clearly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setIsChatOpen(true)}
                  className="bg-accent-gold text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400 shadow-lg"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Start Legal Chat
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-pakistan-green"
                >
                  <Book className="h-5 w-5 mr-2" />
                  Browse Laws
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600" 
                alt="Legal consultation meeting" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute inset-0 bg-pakistan-green bg-opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📘 Did you know?</h2>
            <p className="text-xl text-gray-600">Important legal facts every Pakistani should know</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {legalTips.map((tip, index) => (
              <Card key={index} className={`${tip.color} hover:shadow-lg transition-shadow`}>
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${tip.iconColor} rounded-lg flex items-center justify-center mb-4`}>
                    <tip.icon className="text-white h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Questions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🧠 Common Legal Questions</h2>
            <p className="text-xl text-gray-600">Click any question to get instant legal guidance</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonQuestions.map((item, index) => (
              <Button
                key={index}
                onClick={() => handleQuestionClick(item.question)}
                variant="ghost"
                className="text-left p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border hover:border-pakistan-green group h-auto"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-pakistan-green bg-opacity-10 rounded-lg flex items-center justify-center group-hover:bg-pakistan-green group-hover:text-white transition-colors">
                    <item.icon className="pakistan-green group-hover:text-white h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.question}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose LegalConnect?</h2>
            <p className="text-xl text-gray-600">Advanced AI-powered legal assistance for Pakistani citizens</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="rounded-xl shadow-lg w-full h-64 object-cover mb-6" 
                />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Enhanced Legal Assistant Features</h2>
              <div className="space-y-6">
                {enhancedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern AI chatbot interface with legal consultation features" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-pakistan-green to-transparent opacity-20 rounded-2xl"></div>
            </div>
          </div>
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