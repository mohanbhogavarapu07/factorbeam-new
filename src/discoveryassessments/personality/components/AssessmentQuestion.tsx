import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { CheckCircle, Circle } from "lucide-react";

interface AssessmentQuestionProps {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  onAnswer: (value: number) => void;
  selectedValue?: number;
}

const likertOptions = [
  { 
    value: 1, 
    label: "Strongly Disagree", 
    shortLabel: "Strongly Disagree",
    description: "This does not describe me at all"
  },
  { 
    value: 2, 
    label: "Disagree", 
    shortLabel: "Disagree",
    description: "This rarely describes me"
  },
  { 
    value: 3, 
    label: "Neutral", 
    shortLabel: "Neutral",
    description: "This sometimes describes me"
  },
  { 
    value: 4, 
    label: "Agree", 
    shortLabel: "Agree",
    description: "This often describes me"
  },
  { 
    value: 5, 
    label: "Strongly Agree", 
    shortLabel: "Strongly Agree",
    description: "This always describes me"
  },
];

export function AssessmentQuestion({
  questionNumber,
  totalQuestions,
  question,
  onAnswer,
  selectedValue,
}: AssessmentQuestionProps) {
  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="w-full max-w-5xl mx-auto h-full flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Compact Progress Section */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between items-center text-xs text-foreground">
          <span className="font-medium">Question {questionNumber} of {totalQuestions}</span>
          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-semibold">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="relative">
          <Progress value={progress} className="h-2 bg-muted" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-lg animate-pulse" />
          </div>
        </div>
      </div>

      {/* Compact Question Card */}
      <Card className="flex-1 p-4 md:p-6 shadow-soft border-2 bg-gradient-card flex flex-col">
        <div className="text-center space-y-3 flex-shrink-0">
          {/* Question Number Badge */}
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-base shadow-lg">
            {questionNumber}
          </div>
          
          {/* Question Text */}
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold leading-tight text-foreground px-2">
            {question}
          </h2>
          
          {/* Instructions */}
          <p className="text-xs md:text-sm text-foreground max-w-xl mx-auto">
            Rate how well this describes you based on your actual behavior.
          </p>
        </div>

        {/* Compact Likert Scale */}
        <div className="flex-1 flex items-center justify-center mt-4">
          <div className="grid grid-cols-5 gap-2 md:gap-3 w-full max-w-4xl">
            {likertOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => onAnswer(option.value)}
                className={cn(
                  "group relative p-2 md:p-3 rounded-lg border-2 transition-all duration-300",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                  "flex flex-col items-center justify-center min-h-[80px] md:min-h-[100px]",
                  selectedValue === option.value
                    ? "border-primary bg-primary text-white shadow-lg"
                    : "border-border bg-card hover:border-primary/50 hover:bg-primary/5"
                )}
                aria-label={`${option.label} - ${option.value} out of 5`}
              >
                <div className="flex flex-col items-center space-y-1 md:space-y-2">
                  {/* Selection Indicator */}
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 transition-all duration-300"
                       style={{
                         borderColor: selectedValue === option.value ? 'white' : 'transparent',
                         backgroundColor: selectedValue === option.value ? 'white' : 'transparent'
                       }}>
                    {selectedValue === option.value ? (
                      <CheckCircle className="w-3 h-3 text-primary" />
                    ) : (
                      <Circle className="w-3 h-3 text-foreground opacity-60" />
                    )}
                  </div>
                  
                  {/* Value Number */}
                  <div className={cn(
                    "text-2xl md:text-3xl font-bold transition-colors",
                    selectedValue === option.value ? "text-white" : "text-primary"
                  )}>
                    {option.value}
                  </div>
                  
                  {/* Label */}
                  <div className={cn(
                    "text-xs font-semibold text-center transition-colors leading-tight",
                    selectedValue === option.value ? "text-white" : "text-foreground"
                  )}>
                    {option.shortLabel}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
