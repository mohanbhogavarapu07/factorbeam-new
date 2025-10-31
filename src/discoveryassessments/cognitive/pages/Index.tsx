import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle, Brain, BookOpen, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen gradient-subtle py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Badge + Hero */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-sm border">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Evidence-Based Assessment</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
            Learning Preferences Discovery Tool
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover your learning preferences and unlock evidence-based strategies for more effective studying
          </p>
        </div>

        {/* Key Facts */}
        <Card className="p-6 border-2 border-accent/20 bg-accent/5">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Important: This Measures Preferences, Not "Learning Styles"</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The "learning styles" theory—the idea that you learn better when taught in your preferred style—has been thoroughly debunked. This assessment measures your <strong className="text-foreground">comfort and preference</strong> for different formats and guides you toward <strong className="text-foreground">multi-modal strategies</strong>.
              </p>
            </div>
          </div>
        </Card>

        {/* Feature grid */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-6 shadow-elegant transition-smooth hover:shadow-lg">
            <Clock className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">8-10 Minutes</h3>
            <p className="text-sm text-muted-foreground">40 questions across four modalities</p>
          </Card>
          <Card className="p-6 shadow-elegant transition-smooth hover:shadow-lg">
            <BookOpen className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">VARK Framework</h3>
            <p className="text-sm text-muted-foreground">Visual, Aural, Read/Write, Kinesthetic</p>
          </Card>
          <Card className="p-6 shadow-elegant transition-smooth hover:shadow-lg">
            <Brain className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Personalized Insights</h3>
            <p className="text-sm text-muted-foreground">Growth strategies and multi-modal plans</p>
          </Card>
        </div>

        {/* What You'll Discover */}
        <Card className="p-8 shadow-elegant">
          <h2 className="text-2xl font-bold mb-6">What You'll Discover</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Your Preference Profile:</strong> Which learning formats feel most comfortable and intuitive to you
              </p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Your Growth Areas:</strong> Which modalities offer opportunities for skill development
              </p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Multi-Modal Strategies:</strong> Evidence-based techniques that work across all preferences
              </p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Actionable Recommendations:</strong> Specific study methods tailored to your profile
              </p>
            </div>
          </div>
        </Card>

        {/* Before You Begin */}
        <Card className="p-8 shadow-elegant">
          <h2 className="text-2xl font-bold mb-6">Before You Begin</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Answer honestly.</strong> There are no right or wrong answers. Choose responses based on how you actually study, not how you think you should.
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
        <div className="text-center pt-2">
          <Link to="/welcome">
            <Button size="lg" className="gradient-primary text-white px-12 py-6 text-lg shadow-lg hover:shadow-xl">
              Begin Assessment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
