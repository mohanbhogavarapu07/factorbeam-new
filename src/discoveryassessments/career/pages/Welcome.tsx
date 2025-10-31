import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Compass, AlertCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-screen gradient-subtle py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-sm border">
            <Compass className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Evidence-Based Assessment</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
            Find Your Career Compass
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A 3-minute visual quiz to discover the work that energizes you
          </p>
        </div>

        {/* Important Info */}
        <Card className="p-6 border-2 border-accent/20 bg-accent/5">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Important: Measure Preferences, Not Abilities</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This quiz reflects what attracts your interest right now. Use it as a starting point to explore careers that energize you.
              </p>
            </div>
          </div>
        </Card>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-6 shadow-elegant transition-smooth hover:shadow-lg">
            <Clock className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">3-5 Minutes</h3>
            <p className="text-sm text-muted-foreground">
              30 visual questions to discover your career interests
            </p>
          </Card>
          <Card className="p-6 shadow-elegant transition-smooth hover:shadow-lg">
            <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">RIASEC Framework</h3>
            <p className="text-sm text-muted-foreground">
              Based on 60+ years of career psychology research
            </p>
          </Card>
          <Card className="p-6 shadow-elegant transition-smooth hover:shadow-lg">
            <Compass className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Personalized Insights</h3>
            <p className="text-sm text-muted-foreground">
              Get your unique Career DNA profile with tailored guidance
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
                <strong className="text-foreground">Your Interest Profile:</strong> Which themes and tasks feel most exciting
              </p>
            </div>
            <div className="flex gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Career Directions:</strong> Roles and fields aligned to your interests
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
              <strong className="text-foreground">Answer honestly.</strong> Choose the image that looks more interesting to you—not what you're good at, or what pays well, but what genuinely sparks your curiosity.
            </p>
            <p>
              <strong className="text-foreground">Trust your gut.</strong> There are no right or wrong answers. Your first instinct is usually most accurate.
            </p>
            <p>
              <strong className="text-foreground">Don't overthink.</strong> If you find yourself deliberating, go with your initial reaction.
            </p>
            <p className="text-sm pt-4 border-t">
              <strong className="text-foreground">Privacy:</strong> Your responses are anonymous and used only to generate your personalized results. No data is stored or shared.
            </p>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link to="/discovery/career/quiz">
            <Button 
              size="lg" 
              className="gradient-primary text-white px-12 py-6 text-lg shadow-lg hover:shadow-xl transition-smooth"
            >
              Begin Assessment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
