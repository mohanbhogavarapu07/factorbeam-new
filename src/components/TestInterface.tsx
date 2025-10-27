import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Clock, ChevronLeft, ChevronRight, Flag } from "lucide-react";

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
  subject: string;
  marks: number;
}

interface TestInterfaceProps {
  testName: string;
  questions: Question[];
  duration: number; // in minutes
  onComplete: (results: TestResults) => void;
  onExit: () => void;
}

export interface TestResults {
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  totalMarks: number;
  scoredMarks: number;
  percentage: number;
  timeTaken: number;
  answers: Record<number, number>;
  questions: Question[];
}

const TestInterface = ({ testName, questions, duration, onComplete, onExit }: TestInterfaceProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(duration * 60); // convert to seconds
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswer = (questionId: number, answerIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
  };

  const toggleFlag = (questionId: number) => {
    setFlagged((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const handleSubmit = () => {
    const timeTaken = duration * 60 - timeLeft;
    let correct = 0;
    let incorrect = 0;
    let scoredMarks = 0;
    const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0);

    questions.forEach((q) => {
      if (answers[q.id] !== undefined) {
        if (answers[q.id] === q.correctAnswer) {
          correct++;
          scoredMarks += q.marks;
        } else {
          incorrect++;
          scoredMarks -= q.marks * 0.33; // Negative marking
        }
      }
    });

    const results: TestResults = {
      totalQuestions: questions.length,
      attempted: Object.keys(answers).length,
      correct,
      incorrect,
      unattempted: questions.length - Object.keys(answers).length,
      totalMarks,
      scoredMarks: Math.max(0, scoredMarks),
      percentage: (scoredMarks / totalMarks) * 100,
      timeTaken,
      answers,
      questions,
    };

    onComplete(results);
  };

  const getQuestionStatus = (qId: number) => {
    if (answers[qId] !== undefined) return "answered";
    if (flagged.has(qId)) return "flagged";
    return "unanswered";
  };

  const question = questions[currentQuestion];
  const attempted = Object.keys(answers).length;
  const progress = (attempted / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-foreground">{testName}</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-mono text-lg font-bold text-primary">
                  {formatTime(timeLeft)}
                </span>
              </div>
              <Button variant="outline" onClick={onExit}>
                Exit Test
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {attempted} attempted • {questions.length - attempted} remaining
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Question Panel */}
          <div className="lg:col-span-2">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant={question.difficulty === "easy" ? "default" : question.difficulty === "medium" ? "secondary" : "destructive"}>
                      {question.difficulty.toUpperCase()}
                    </Badge>
                    <Badge variant="outline">{question.subject}</Badge>
                    <span className="text-sm text-muted-foreground">+{question.marks} marks</span>
                  </div>
                  <h2 className="text-lg font-semibold text-foreground leading-relaxed">
                    {question.text}
                  </h2>
                </div>
                <Button
                  size="sm"
                  variant={flagged.has(question.id) ? "default" : "outline"}
                  onClick={() => toggleFlag(question.id)}
                >
                  <Flag className="w-4 h-4" />
                </Button>
              </div>

              <RadioGroup
                value={answers[question.id]?.toString()}
                onValueChange={(value) => handleAnswer(question.id, parseInt(value))}
              >
                <div className="space-y-3">
                  {question.options.map((option, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:bg-muted/50 ${
                        answers[question.id] === index
                          ? "border-primary bg-primary/5"
                          : "border-border"
                      }`}
                    >
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label
                        htmlFor={`option-${index}`}
                        className="flex-1 cursor-pointer text-base"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
                  disabled={currentQuestion === 0}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                <Button
                  variant="outline"
                  onClick={() => handleAnswer(question.id, -1)}
                  disabled={answers[question.id] === undefined}
                >
                  Clear Response
                </Button>

                {currentQuestion < questions.length - 1 ? (
                  <Button
                    onClick={() => setCurrentQuestion((prev) => prev + 1)}
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button onClick={() => setShowSubmitConfirm(true)}>
                    Submit Test
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Question Palette */}
          <div className="lg:col-span-1">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border sticky top-24">
              <h3 className="font-semibold text-foreground mb-4">Question Palette</h3>
              
              <div className="flex items-center gap-2 mb-4 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded bg-green-500"></div>
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded bg-red-500"></div>
                  <span>Flagged</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded bg-muted"></div>
                  <span>Not Visited</span>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {questions.map((q, index) => {
                  const status = getQuestionStatus(q.id);
                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentQuestion(index)}
                      className={`w-10 h-10 rounded font-semibold text-sm transition-all ${
                        currentQuestion === index
                          ? "ring-2 ring-primary ring-offset-2"
                          : ""
                      } ${
                        status === "answered"
                          ? "bg-green-500 text-white hover:bg-green-600"
                          : status === "flagged"
                          ? "bg-red-500 text-white hover:bg-red-600"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>

              <Button
                className="w-full mt-6"
                size="lg"
                onClick={() => setShowSubmitConfirm(true)}
              >
                Submit Test
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card p-8 rounded-xl shadow-xl max-w-md w-full">
            <h3 className="text-2xl font-bold text-foreground mb-4">Submit Test?</h3>
            <p className="text-muted-foreground mb-6">
              You have attempted {attempted} out of {questions.length} questions.
              {questions.length - attempted > 0 && (
                <span className="block mt-2 text-yellow-600 font-semibold">
                  Warning: {questions.length - attempted} questions are unattempted!
                </span>
              )}
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowSubmitConfirm(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button onClick={handleSubmit} className="flex-1">
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestInterface;
