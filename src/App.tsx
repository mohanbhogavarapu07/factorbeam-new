import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from "./hooks/useAuth";
import Home from "./pages/Home";
// import Assessments from "./pages/Assessments"; // Commented out - Assessments page temporarily disabled
import Games from "./pages/Games";
import Discovery from "./pages/Discovery";
import GatePrep from "./pages/GatePrep";
// import Skills from "./pages/Skills"; // Commented out - Skill Builder temporarily disabled
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import FAQs from "./pages/FAQs";
import Auth from "./pages/Auth";
import Notifications from "./pages/Notifications";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CareerAssessment from "./discoveryassessments/career/CareerAssessment";
import CognitiveAssessment from "./discoveryassessments/cognitive/CognitiveAssessment";
import PersonalityAssessment from "./discoveryassessments/personality/PersonalityAssessment";
import LearningPreferenceAssessment from "./discoveryassessments/learningpreference/LearningPreferenceAssessment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen bg-background flex flex-col">
              <Header />
              <main className="flex-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/assessments" element={<Assessments />} /> */} {/* Commented out - Assessments page temporarily disabled */}
                    <Route path="/discovery" element={<Discovery />} />
                    <Route path="/gate-prep" element={<GatePrep />} />
                    {/* <Route path="/skills" element={<Skills />} /> */} {/* Commented out - Skill Builder temporarily disabled */}
                    <Route path="/games" element={<Games />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/faqs" element={<FAQs />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="/discovery/career/*" element={<CareerAssessment />} />
                    <Route path="/discovery/cognitive/*" element={<CognitiveAssessment />} />
                    <Route path="/discovery/personality/*" element={<PersonalityAssessment />} />
                    <Route path="/discovery/learning-preference/*" element={<LearningPreferenceAssessment />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
