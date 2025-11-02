import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "../components/ui/button-variants";
import { QuizScores, RIASECType } from "../types/quiz";
import { riasecTypes, typeDescriptions } from "../data/riasecTypes";
import { archetypes } from "../data/archetypes";
import RadarChart from "../components/RadarChart";
import { Compass, Share2, RefreshCw, Sparkles, RotateCcw } from "lucide-react";
import { toast } from "sonner";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scores, setScores] = useState<QuizScores | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!location.state?.scores) {
      navigate('/discovery/career');
      return;
    }
    
    // Simulate loading animation
    setTimeout(() => {
      setScores(location.state.scores);
      setIsLoading(false);
    }, 3000);
  }, [location, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5">
        <div className="text-center animate-fadeIn">
          <Compass className="w-24 h-24 mx-auto mb-6 text-accent animate-[rotate_3s_linear_infinite]" />
          <div className="space-y-3">
            <p className="text-xl font-medium">Analyzing your choices...</p>
            <p className="text-xl font-medium">Mapping your interests...</p>
            <p className="text-xl font-medium">Revealing your archetype...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!scores) return null;

  // Calculate top types
  const sortedTypes = (Object.keys(scores) as RIASECType[])
    .sort((a, b) => scores[b] - scores[a]);
  
  // Determine archetype with tie-breaking logic
  let archetypeKey: string;
  const topScore = scores[sortedTypes[0]];
  const secondScore = scores[sortedTypes[1]];
  const thirdScore = scores[sortedTypes[2]];
  
  // Check for multi-potentialite (3+ way tie for #1)
  if (topScore === secondScore && secondScore === thirdScore) {
    archetypeKey = "MULTI";
  }
  // Check for explorer (all scores equal)
  else if (scores.R === scores.I && scores.I === scores.A && 
           scores.A === scores.S && scores.S === scores.E && scores.E === scores.C) {
    archetypeKey = "EXPLORER";
  }
  // Normal case: top 2 types
  else {
    const topType = sortedTypes[0];
    const secondType = sortedTypes[1];
    archetypeKey = topType + secondType;
  }
  
  const archetype = archetypes[archetypeKey] || archetypes["RI"];
  const displayCode = archetypeKey === "MULTI" || archetypeKey === "EXPLORER" 
    ? archetype.code 
    : `${sortedTypes[0]}-${sortedTypes[1]}`;

  const topThree = sortedTypes.slice(0, 3);
  const bottomThree = sortedTypes.slice(3, 6);

  const handleShare = () => {
    const text = `🧭 I just discovered I'm ${archetype.name}!\n\nMy Career DNA: ${displayCode}\n\nFind your Career Compass at ${window.location.origin}`;
    
    if (navigator.share) {
      navigator.share({ text }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Hero Section */}
          <div className="text-center animate-fadeIn">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="font-medium">Your Career Compass</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              You are {archetype.name}
            </h1>
            
            <p className="text-2xl text-muted-foreground mb-6">
              {archetype.tagline}
            </p>
            
            <div className="inline-block bg-accent/10 px-6 py-3 rounded-full">
              <span className="text-sm text-muted-foreground">Your Core Code:</span>
              <span className="text-2xl font-bold text-accent ml-2">
                {displayCode}
              </span>
            </div>
          </div>

          {/* Radar Chart */}
          <Card className="p-8 animate-slideUp">
            <h2 className="text-2xl font-bold text-center mb-8">Your Interest Profile</h2>
            <RadarChart scores={scores} />
          </Card>

          {/* Energy Profile */}
          <div className="animate-slideUp space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🔋</span> Your Energizers
              </h2>
              <p className="text-muted-foreground mb-6">
                These activities fuel you. Design your career around them.
              </p>
              
              <div className="space-y-6">
                {topThree.map((type, index) => {
                  const typeData = riasecTypes[type];
                  return (
                    <div key={type} className="border-l-4 pl-4" style={{ borderColor: typeData.color }}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">
                          {index + 1}. {typeData.name} - {typeData.persona}
                        </h3>
                        <span className="text-lg font-bold text-accent">
                          {scores[type]}/10
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        {typeDescriptions.primary[type]}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span> Your Shadow Styles
              </h2>
              <p className="text-muted-foreground mb-6">
                You CAN do these, but they drain your energy over time. Limit exposure.
              </p>
              
              <div className="space-y-6">
                {bottomThree.map((type, index) => {
                  const typeData = riasecTypes[type];
                  return (
                    <div key={type} className="border-l-4 border-muted pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-muted-foreground">
                          {index + 4}. {typeData.name} - {typeData.persona}
                        </h3>
                        <span className="text-sm font-medium text-muted-foreground">
                          {scores[type]}/10
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {typeDescriptions.shadow[type]}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Career Guidance */}
          <Card className="p-8 animate-slideUp">
            <h2 className="text-2xl font-bold mb-6">{archetype.name} Career Guide</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  💎 You Thrive In:
                </h3>
                <p className="text-muted-foreground">{archetype.thriveIn}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  ⚠️ You Should Avoid:
                </h3>
                <p className="text-muted-foreground">{archetype.avoid}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  🎯 Best-Fit Careers:
                </h3>
                <ul className="space-y-3">
                  {archetype.careers.map((career, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-accent font-bold">•</span>
                      <div>
                        <strong>{career.title}</strong>
                        <span className="text-muted-foreground"> — {career.reason}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-accent/5 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  💡 Your Superpower:
                </h3>
                <p className="text-lg font-medium">{archetype.superpower}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  📚 Next Steps:
                </h3>
                <ul className="space-y-2">
                  {archetype.nextSteps.map((step, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-accent">✓</span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* Actions */}
          <div className="text-center pt-8">
            <Button
              onClick={() => navigate('/discovery/career')}
              variant="default"
              size="lg"
              className="bg-green-600 hover:bg-green-600 text-white px-8 py-4"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Retake Assessment
            </Button>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-center pb-4">
            <p className="text-xs md:text-sm text-muted-foreground">
              This assessment is for personal development only. Not validated for employment screening, clinical diagnosis, or high-stakes decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
