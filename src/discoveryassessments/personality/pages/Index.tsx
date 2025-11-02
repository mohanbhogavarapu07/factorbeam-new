import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, Clock, Lock, Users, Sparkles, TrendingUp, AlertCircle, BookOpen } from "lucide-react";

export default function Index() {
  const navigate = useNavigate();
  const [hasProgress, setHasProgress] = useState(false);

  useEffect(() => {
    const progress = localStorage.getItem("assessment_progress");
    setHasProgress(!!progress);
  }, []);

  const handleStart = () => {
    navigate("/discovery/personality/assessment");
  };

  const handleResume = () => {
    navigate("/discovery/personality/assessment");
  };

  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Science-Backed Framework",
      description: "Based on the Big Five personality model with decades of research",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "12 Minutes",
      description: "Quick yet comprehensive assessment of your work personality",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "100% Private",
      description: "Your responses are confidential and never shared",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Personalized Insights",
      description: "Discover your unique professional archetype and strengths",
    },
  ];

  return (
    <div className="min-h-screen gradient-subtle py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-sm border">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Evidence-Based Assessment</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
            Professional Identity Compass
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover your professional identity and unlock evidence-based insights to thrive at work
          </p>
        </div>

        {/* Important Info */}
        <Card className="p-6 border-2 border-accent/20 bg-accent/5">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Important: Measures Preferences, Not Abilities</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This assessment reflects your current preferences and tendencies at work. Use it as a starting point to understand strengths, collaboration style, and growth areas.
              </p>
            </div>
          </div>
        </Card>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-6 shadow-elegant transition-smooth hover:shadow-lg">
            <Clock className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">12 Minutes</h3>
            <p className="text-sm text-muted-foreground">
              60 statements covering 5 core dimensions
            </p>
          </Card>
          <Card className="p-6 shadow-elegant transition-smooth hover:shadow-lg">
            <BookOpen className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Big Five Model</h3>
            <p className="text-sm text-muted-foreground">
              Grounded in decades of personality research
            </p>
          </Card>
          <Card className="p-6 shadow-elegant transition-smooth hover:shadow-lg">
            <Lock className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Private & Secure</h3>
            <p className="text-sm text-muted-foreground">
              Data stays on your device; no sharing
            </p>
          </Card>
        </div>

        {/* What You'll Discover */}
        <Card className="p-8 shadow-elegant">
          <h2 className="text-2xl font-bold mb-6">What You'll Discover</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Your Preference Profile:</strong> How you prefer to collaborate, focus, and make decisions
              </p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Strengths & Growth Areas:</strong> Natural talents and skills to develop next
              </p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Career Fit:</strong> Roles and environments aligned to your profile
              </p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Actionable Tips:</strong> Practical ways to work smarter with your style
              </p>
            </div>
          </div>
        </Card>

        {/* Before You Begin */}
        <Card className="p-8 shadow-elegant">
          <h2 className="text-2xl font-bold mb-6">Before You Begin</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Answer honestly.</strong> There are no right or wrong answers. Choose responses based on how you actually work, not how you think you should.
            </p>
            <p>
              <strong className="text-foreground">Consider your typical behavior.</strong> Think about what you naturally gravitate toward when learning new material, not what you might do occasionally.
            </p>
            <p>
              <strong className="text-foreground">Don't overthink.</strong> Your first instinct is usually most accurate. If you find yourself deliberating, go with your initial reaction.
            </p>
            <p className="text-sm pt-4 border-t">
              <strong className="text-foreground">Privacy:</strong> Your responses are anonymous and used only to generate your personalized results. No data is stored or shared.
            </p>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center pt-4">
          <Button 
            onClick={handleStart}
            size="lg" 
            className="gradient-primary text-white px-12 py-6 text-lg shadow-lg hover:shadow-xl transition-smooth"
          >
            Begin Assessment
          </Button>
        </div>
      </div>
    </div>
  );
}
