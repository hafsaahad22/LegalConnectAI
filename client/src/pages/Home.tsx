import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ChatWidget from "@/components/ChatWidget";
import { Scale, MessageCircle, ArrowRight, Check, MapPin, Star, Phone, Mail } from "lucide-react";
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

const featuredLawyers = [
  {
    id: 1,
    name: "Ahmed Ali Khan",
    specialization: "Criminal Law",
    experience: 15,
    region: "Lahore",
    rating: 4.9,
    cases: 250,
    contact: "+92-300-1234567",
    email: "ahmed.khan@lawfirm.pk",
    bio: "Senior criminal lawyer with extensive experience in constitutional law and human rights cases.",
    specialties: ["Criminal Defense", "Constitutional Law", "Human Rights"]
  },
  {
    id: 2,
    name: "Dr. Yasmeen Hassan",
    specialization: "Family Law",
    experience: 18,
    region: "Islamabad",
    rating: 4.8,
    cases: 300,
    contact: "+92-345-9876543",
    email: "yasmeen.hassan@familylaw.pk",
    bio: "Leading family law expert specializing in women's rights and inheritance disputes.",
    specialties: ["Family Law", "Women's Rights", "Inheritance"]
  },
  {
    id: 3,
    name: "Advocate Nighat Dad",
    specialization: "Cyber Law",
    experience: 10,
    region: "Lahore",
    rating: 4.7,
    cases: 180,
    contact: "+92-300-3333444",
    email: "nighat.dad@cyberlaw.pk",
    bio: "Digital rights advocate and cybercrime expert with international recognition.",
    specialties: ["Cyber Law", "Digital Rights", "PECA Cases"]
  },
  {
    id: 4,
    name: "Justice (R) Nasira Javed Iqbal",
    specialization: "Constitutional Law",
    experience: 25,
    region: "Islamabad",
    rating: 5.0,
    cases: 400,
    contact: "+92-345-7777888",
    email: "nasira.iqbal@constitutional.pk",
    bio: "Retired High Court Justice with unparalleled expertise in constitutional matters.",
    specialties: ["Constitutional Law", "Supreme Court Cases", "Legal Consultation"]
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-minimal-dark rounded-xl flex items-center justify-center">
                <Scale className="text-white h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-semibold minimal-dark tracking-tight">LegalConnect</h1>
                <p className="text-sm minimal-grey font-medium">Pakistani Legal AI Assistant</p>
              </div>
            </div>
            <Button 
              onClick={() => setIsChatOpen(true)}
              className="bg-minimal-dark text-white hover:bg-gray-800 font-medium px-6 py-2.5"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Ask Legal Question
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold minimal-dark mb-8 leading-tight tracking-tight">
            Understand Pakistani Law in 
            <span className="minimal-accent"> Plain Terms</span>
          </h1>
          <p className="text-xl minimal-grey mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
            Get instant legal guidance powered by AI trained on the Pakistani Constitution, 
            Supreme Court cases, and expert legal knowledge. Available in Urdu and English.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setIsChatOpen(true)}
              className="bg-minimal-dark text-white px-8 py-4 text-lg font-semibold hover:bg-gray-800 rounded-xl"
            >
              Start Legal Chat
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold minimal-dark mb-6 tracking-tight">Why Choose LegalConnect?</h2>
            <p className="text-xl minimal-grey font-medium">Advanced AI legal assistance built specifically for Pakistani citizens</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-gray-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-minimal-dark rounded-xl flex items-center justify-center mb-6">
                    <Check className="text-white h-7 w-7" />
                  </div>
                  <h3 className="font-semibold minimal-dark mb-3 text-lg">{feature.title}</h3>
                  <p className="text-sm minimal-grey leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Questions Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold minimal-dark mb-6 tracking-tight">Common Legal Questions</h2>
            <p className="text-xl minimal-grey font-medium">Click any question to get instant legal guidance</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {commonQuestions.map((question, index) => (
              <Button
                key={index}
                onClick={() => handleQuestionClick(question)}
                variant="ghost"
                className="text-left p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all h-auto group"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-minimal-accent rounded-full mt-3 flex-shrink-0 group-hover:bg-minimal-dark transition-colors"></div>
                  <div>
                    <p className="font-medium minimal-dark text-sm leading-relaxed">{question}</p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Lawyers Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold minimal-dark mb-6 tracking-tight">Featured Legal Experts</h2>
            <p className="text-xl minimal-grey font-medium">Connect with verified Pakistani lawyers specialized in different legal areas</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredLawyers.map((lawyer) => (
              <Card key={lawyer.id} className="border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-gray-300 bg-white">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-semibold text-lg">
                        {lawyer.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <h3 className="font-semibold minimal-dark text-lg mb-1">{lawyer.name}</h3>
                    <Badge variant="secondary" className="mb-2">{lawyer.specialization}</Badge>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="minimal-grey">Experience</span>
                      <span className="font-medium">{lawyer.experience} years</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="minimal-grey">Cases Won</span>
                      <span className="font-medium">{lawyer.cases}+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="minimal-grey">Rating</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{lawyer.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4 minimal-grey" />
                      <span className="minimal-grey text-sm">{lawyer.region}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs minimal-grey mb-4 leading-relaxed">{lawyer.bio}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {lawyer.specialties.slice(0, 2).map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">{specialty}</Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1 bg-minimal-dark text-white hover:bg-gray-800 text-xs">
                        <Phone className="h-3 w-3 mr-1" />
                        Contact
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        <Mail className="h-3 w-3 mr-1" />
                        Email
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-minimal-dark py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Get Legal Guidance?
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-medium">
            Start a conversation with our AI legal assistant trained on Pakistani law
          </p>
          <Button 
            onClick={() => setIsChatOpen(true)}
            className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 rounded-xl"
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