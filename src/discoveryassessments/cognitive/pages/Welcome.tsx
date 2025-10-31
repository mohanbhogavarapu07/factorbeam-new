import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, AlertCircle, Clock, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-subtle py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-sm border">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Evidence-Based Assessment</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
            Discover Your Cognitive Engine
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A 30-minute interactive challenge to map your thinking strengths
          </p>
        </div>

        {/* Important Info */}
        <Card className="p-6 border-2 border-accent/20 bg-accent/5">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Important: Measures Preferences, Not Abilities</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This assessment reflects your current thinking preferences. Use it as a starting point to understand strengths and cognitive style.
              </p>
            </div>
          </div>
        </Card>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-6 shadow-elegant transition-smooth hover:shadow-lg">
            <Clock className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">25-30 Minutes</h3>
            <p className="text-sm text-muted-foreground">
              5 interactive mini-games to map your cognitive strengths
            </p>
          </Card>
          <Card className="p-6 shadow-elegant transition-smooth hover:shadow-lg">
            <BookOpen className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Science-Backed</h3>
            <p className="text-sm text-muted-foreground">
              Informed by cognitive psychology research and validated assessments
            </p>
          </Card>
          <Card className="p-6 shadow-elegant transition-smooth hover:shadow-lg">
            <Brain className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Personalized Insights</h3>
            <p className="text-sm text-muted-foreground">
              Get your unique cognitive profile with tailored career guidance
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
                <strong className="text-foreground">Your Cognitive Profile:</strong> Which thinking patterns and strengths feel most natural
              </p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Career Directions:</strong> Roles and fields aligned to your cognitive style
              </p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Next Steps:</strong> Simple ways to explore options immediately
              </p>
            </div>
          </div>
        </Card>

        {/* Before You Begin */}
        <Card className="p-8 shadow-elegant">
          <h2 className="text-2xl font-bold mb-6">Before You Begin</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Answer honestly.</strong> There are no right or wrong answers. Choose responses based on how you actually think, not how you wish to be.
            </p>
            <p>
              <strong className="text-foreground">Consider your typical behavior.</strong> Think about what you naturally gravitate toward when solving problems, not what you might do occasionally.
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
            size="lg"
            className="gradient-primary text-white px-12 py-6 text-lg shadow-lg hover:shadow-xl transition-smooth"
            onClick={() => navigate("/discovery/cognitive/instructions")}
          >
            Begin Assessment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
