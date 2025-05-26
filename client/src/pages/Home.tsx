import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { lazy, Suspense } from "react";
const ChatWidget = lazy(() => import("@/components/ChatWidget"));
import { Scale, MessageCircle, ArrowRight, Check, MapPin } from "lucide-react";
import { useState } from "react";

const features = [
  {
    en: { title: "Constitutional Knowledge", desc: "Complete Pakistani Constitution database with real Supreme Court cases" },
    ur: { title: "آئینی معلومات", desc: "مکمل آئین پاکستان اور اصل سپریم کورٹ کیسز" }
  },
  {
    en: { title: "Bilingual Support", desc: "Ask questions in Urdu or English and get accurate legal guidance" },
    ur: { title: "دو لسانی سہولت", desc: "اردو یا انگریزی میں سوالات پوچھیں اور درست قانونی رہنمائی حاصل کریں" }
  },
  {
    en: { title: "Expert Lawyer Network", desc: "Connect with verified Pakistani lawyers specialized in your legal area" },
    ur: { title: "ماہر وکلاء کا نیٹ ورک", desc: "اپنے قانونی شعبے میں ماہر وکلاء سے رابطہ کریں" }
  },
  {
    en: { title: "Voice Recognition", desc: "Speak your legal questions naturally in both languages" },
    ur: { title: "آواز کی پہچان", desc: "اردو اور انگریزی میں قدرتی انداز میں سوالات پوچھیں" }
  }
];

const commonQuestions = {
  en: [
    "Can police arrest without a warrant?",
    "What are dowry laws in Pakistan?",
    "How to file a cybercrime complaint?",
    "What does the Constitution say about women's rights?"
  ],
  ur: [
    "کیا پولیس بغیر وارنٹ کے گرفتار کر سکتی ہے؟",
    "پاکستان میں جہیز کے قوانین کیا ہیں؟",
    "سائبر کرائم کی شکایت کیسے درج کروائیں؟",
    "آئین خواتین کے حقوق کے بارے میں کیا کہتا ہے؟"
  ]
};

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialQuestion, setInitialQuestion] = useState("");
  const [language, setLanguage] = useState<"en" | "ur">("en");

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
                <p className="text-sm minimal-grey font-medium">
                  {language === "en" ? "Pakistani Legal AI Assistant" : "پاکستانی قانونی معاون"}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setLanguage(prev => (prev === "en" ? "ur" : "en"))}
                className="text-sm border border-gray-300 text-gray-800 bg-white px-3 py-1.5 hover:bg-gray-100"
              >
                {language === "en" ? "اردو" : "EN"}
              </Button>
              <Button
                onClick={() => setIsChatOpen(true)}
                className="bg-minimal-dark text-white hover:bg-gray-800 font-medium px-6 py-2.5"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                {language === "en" ? "Ask Legal Question" : "قانونی سوال پوچھیں"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold minimal-dark mb-6 leading-tight tracking-tight">
            {language === "en"
              ? <>Understand Pakistani Law in <span className="text-gray-600">Plain Terms</span></>
              : <>پاکستانی قانون کو <span className="text-gray-600">سادہ الفاظ</span> میں سمجھیں</>}
          </h1>
          <p className="text-base minimal-grey mb-8 leading-relaxed max-w-2xl mx-auto">
            {language === "en"
              ? "Get instant legal guidance powered by AI trained on the Pakistani Constitution, Supreme Court cases, and expert legal knowledge."
              : "اے آئی سے فوری قانونی رہنمائی حاصل کریں جو آئین، سپریم کورٹ کیسز اور قانونی ماہرین پر مبنی ہے۔"}
          </p>
          <div className="flex justify-center">
            <Button
              onClick={() => setIsChatOpen(true)}
              className="bg-minimal-dark text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 rounded-lg"
            >
              {language === "en" ? "Start Legal Chat" : "قانونی چیٹ شروع کریں"}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold minimal-dark mb-3 tracking-tight">
              {language === "en" ? "Why Choose LegalConnect?" : "LegalConnect کیوں منتخب کریں؟"}
            </h2>
            <p className="text-sm minimal-grey">
              {language === "en"
                ? "Advanced AI legal assistance built specifically for Pakistani citizens"
                : "پاکستانی شہریوں کے لیے تیار کردہ جدید AI قانونی معاون"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-sm transition-all duration-300 hover:border-gray-300">
                <CardContent className="p-5">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                    <Check className="text-white h-4 w-4" />
                  </div>
                  <h3 className="font-medium minimal-dark mb-2 text-sm">
                    {language === "en" ? feature.en.title : feature.ur.title}
                  </h3>
                  <p className="text-xs minimal-grey leading-relaxed">
                    {language === "en" ? feature.en.desc : feature.ur.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Questions Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold minimal-dark mb-3 tracking-tight">
              {language === "en" ? "Common Legal Questions" : "عام قانونی سوالات"}
            </h2>
            <p className="text-sm minimal-grey">
              {language === "en" ? "Click any question to get instant legal guidance" : "فوری قانونی رہنمائی کے لیے کسی سوال پر کلک کریں"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {commonQuestions[language].map((question, index) => (
              <Button
                key={index}
                onClick={() => handleQuestionClick(question)}
                variant="ghost"
                className="text-left p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all h-auto group"
              >
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0 group-hover:bg-gray-800 transition-colors"></div>
                  <div>
                    <p className="font-medium minimal-dark text-xs leading-relaxed">{question}</p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <Suspense fallback={<div className="text-center py-10">Loading chat...</div>}>
  {isChatOpen && (
    <ChatWidget
      isOpen={isChatOpen}
      onToggle={setIsChatOpen}
      initialQuestion={initialQuestion}
      onQuestionSet={() => setInitialQuestion("")}
      language={language}
    />
  )}
</Suspense>

    </div>
  );
}
