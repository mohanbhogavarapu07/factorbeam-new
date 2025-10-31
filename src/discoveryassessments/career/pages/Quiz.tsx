import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { quizQuestions } from "../data/questions";
import { QuizScores, RIASECType } from "../types/quiz";
import { ChevronLeft } from "lucide-react";

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<RIASECType[]>([]);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | null>(null);

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const question = quizQuestions[currentQuestion];

  const handleAnswer = (option: 'A' | 'B') => {
    setSelectedOption(option);
    
    setTimeout(() => {
      const chosenType = option === 'A' ? question.optionA.type : question.optionB.type;
      const newAnswers = [...answers, chosenType];
      setAnswers(newAnswers);
      setSelectedOption(null);

      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Calculate scores and navigate to results
        const scores: QuizScores = {
          R: newAnswers.filter(a => a === 'R').length,
          I: newAnswers.filter(a => a === 'I').length,
          A: newAnswers.filter(a => a === 'A').length,
          S: newAnswers.filter(a => a === 'S').length,
          E: newAnswers.filter(a => a === 'E').length,
          C: newAnswers.filter(a => a === 'C').length,
        };
        navigate('/discovery/career/results', { state: { scores } });
      }
    }, 300);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    } else {
      navigate('/discovery/career');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </Button>
              <span className="text-sm text-muted-foreground font-medium">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question */}
          <div className="animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {question.prompt}
            </h2>

            {/* Options */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Option A */}
              <Card
                className={`cursor-pointer transition-all duration-300 overflow-hidden group hover:shadow-xl ${
                  selectedOption === 'A' ? 'ring-4 ring-accent scale-105' : 'hover:scale-102'
                }`}
                onClick={() => handleAnswer('A')}
              >
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img
                    src={question.optionA.imageUrl}
                    alt={question.optionA.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {selectedOption === 'A' && (
                    <div className="absolute inset-0 bg-accent/20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center">
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-center font-medium text-lg">
                    {question.optionA.description}
                  </p>
                </div>
              </Card>

              {/* Option B */}
              <Card
                className={`cursor-pointer transition-all duration-300 overflow-hidden group hover:shadow-xl ${
                  selectedOption === 'B' ? 'ring-4 ring-accent scale-105' : 'hover:scale-102'
                }`}
                onClick={() => handleAnswer('B')}
              >
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img
                    src={question.optionB.imageUrl}
                    alt={question.optionB.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {selectedOption === 'B' && (
                    <div className="absolute inset-0 bg-accent/20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center">
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-center font-medium text-lg">
                    {question.optionB.description}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
