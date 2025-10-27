import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Trophy,
  Target,
  Clock,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Circle,
  Download,
  Share2,
  Home,
} from "lucide-react";
import { TestResults } from "./TestInterface";

interface ResultsPageProps {
  testName: string;
  results: TestResults;
  onRetake: () => void;
  onHome: () => void;
}

const ResultsPage = ({ testName, results, onRetake, onHome }: ResultsPageProps) => {
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}h ${mins}m ${secs}s`;
  };

  const getPerformanceLevel = (percentage: number) => {
    if (percentage >= 90) return { level: "Outstanding", color: "text-green-600", bg: "bg-green-100" };
    if (percentage >= 75) return { level: "Excellent", color: "text-blue-600", bg: "bg-blue-100" };
    if (percentage >= 60) return { level: "Good", color: "text-yellow-600", bg: "bg-yellow-100" };
    if (percentage >= 40) return { level: "Average", color: "text-orange-600", bg: "bg-orange-100" };
    return { level: "Needs Improvement", color: "text-red-600", bg: "bg-red-100" };
  };

  const performance = getPerformanceLevel(results.percentage);

  // Calculate subject-wise performance
  const subjectStats = results.questions.reduce((acc, q) => {
    if (!acc[q.subject]) {
      acc[q.subject] = { total: 0, correct: 0, attempted: 0 };
    }
    acc[q.subject].total++;
    if (results.answers[q.id] !== undefined) {
      acc[q.subject].attempted++;
      if (results.answers[q.id] === q.correctAnswer) {
        acc[q.subject].correct++;
      }
    }
    return acc;
  }, {} as Record<string, { total: number; correct: number; attempted: number }>);

  // Calculate difficulty-wise performance
  const difficultyStats = results.questions.reduce((acc, q) => {
    if (!acc[q.difficulty]) {
      acc[q.difficulty] = { total: 0, correct: 0, attempted: 0 };
    }
    acc[q.difficulty].total++;
    if (results.answers[q.id] !== undefined) {
      acc[q.difficulty].attempted++;
      if (results.answers[q.id] === q.correctAnswer) {
        acc[q.difficulty].correct++;
      }
    }
    return acc;
  }, {} as Record<string, { total: number; correct: number; attempted: number }>);

  const percentile = Math.min(99, Math.round(results.percentage * 0.85 + Math.random() * 10));
  const rank = Math.max(1, Math.round((100 - percentile) * 50));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4">
              <Trophy className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Test Completed!</h1>
            <p className="text-xl text-blue-100">{testName}</p>
          </div>

          {/* Score Card */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center">
              <div className="text-4xl font-bold mb-2">
                {results.scoredMarks.toFixed(1)}/{results.totalMarks}
              </div>
              <div className="text-sm text-blue-100">Total Score</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center">
              <div className="text-4xl font-bold mb-2">{results.percentage.toFixed(1)}%</div>
              <div className="text-sm text-blue-100">Percentage</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center">
              <div className="text-4xl font-bold mb-2">{percentile}</div>
              <div className="text-sm text-blue-100">Percentile</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6 text-center">
              <div className="text-4xl font-bold mb-2">#{rank}</div>
              <div className="text-sm text-blue-100">All India Rank</div>
            </Card>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Performance Badge */}
        <div className="flex items-center justify-center mb-8">
          <div className={`${performance.bg} ${performance.color} px-8 py-4 rounded-full text-xl font-bold`}>
            Performance: {performance.level}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">{results.correct}</div>
                <div className="text-sm text-muted-foreground">Correct Answers</div>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">{results.incorrect}</div>
                <div className="text-sm text-muted-foreground">Incorrect Answers</div>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Circle className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-600">{results.unattempted}</div>
                <div className="text-sm text-muted-foreground">Unattempted</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Detailed Analysis Tabs */}
        <Card className="p-6 mb-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="subjects">Subject-wise</TabsTrigger>
              <TabsTrigger value="difficulty">Difficulty</TabsTrigger>
              <TabsTrigger value="solutions">Solutions</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 mt-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Performance Overview
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Accuracy</span>
                      <span className="text-sm font-medium">
                        {results.attempted > 0
                          ? ((results.correct / results.attempted) * 100).toFixed(1)
                          : 0}
                        %
                      </span>
                    </div>
                    <Progress
                      value={
                        results.attempted > 0 ? (results.correct / results.attempted) * 100 : 0
                      }
                      className="h-3"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Attempt Rate</span>
                      <span className="text-sm font-medium">
                        {((results.attempted / results.totalQuestions) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <Progress
                      value={(results.attempted / results.totalQuestions) * 100}
                      className="h-3"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Time Analysis
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-foreground">
                      {formatTime(results.timeTaken)}
                    </div>
                    <div className="text-sm text-muted-foreground">Time Taken</div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-foreground">
                      {(results.timeTaken / results.attempted || 0).toFixed(0)}s
                    </div>
                    <div className="text-sm text-muted-foreground">Avg. Time/Question</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Key Insights
                </h3>
                <div className="space-y-3">
                  {results.percentage >= 75 && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800">
                        <strong>Excellent performance!</strong> You're in the top tier. Keep up the
                        great work.
                      </p>
                    </div>
                  )}
                  {results.unattempted > results.totalQuestions * 0.2 && (
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-yellow-800">
                        <strong>Time management tip:</strong> You left{" "}
                        {results.unattempted} questions unattempted. Practice with time
                        constraints.
                      </p>
                    </div>
                  )}
                  {results.attempted > 0 &&
                    (results.correct / results.attempted) * 100 < 60 && (
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-blue-800">
                          <strong>Accuracy needs work:</strong> Focus on understanding concepts
                          rather than attempting more questions.
                        </p>
                      </div>
                    )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="subjects" className="mt-6">
              <div className="space-y-4">
                {Object.entries(subjectStats).map(([subject, stats]) => (
                  <div key={subject} className="p-4 bg-muted rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-semibold text-lg">{subject}</h4>
                      <Badge>
                        {stats.correct}/{stats.total}
                      </Badge>
                    </div>
                    <Progress
                      value={stats.total > 0 ? (stats.correct / stats.total) * 100 : 0}
                      className="h-2 mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>
                        Accuracy:{" "}
                        {stats.attempted > 0
                          ? ((stats.correct / stats.attempted) * 100).toFixed(1)
                          : 0}
                        %
                      </span>
                      <span>
                        Attempted: {stats.attempted}/{stats.total}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="difficulty" className="mt-6">
              <div className="space-y-4">
                {Object.entries(difficultyStats).map(([difficulty, stats]) => (
                  <div key={difficulty} className="p-4 bg-muted rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-semibold text-lg capitalize">{difficulty}</h4>
                      <Badge
                        variant={
                          difficulty === "easy"
                            ? "default"
                            : difficulty === "medium"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {stats.correct}/{stats.total}
                      </Badge>
                    </div>
                    <Progress
                      value={stats.total > 0 ? (stats.correct / stats.total) * 100 : 0}
                      className="h-2 mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>
                        Accuracy:{" "}
                        {stats.attempted > 0
                          ? ((stats.correct / stats.attempted) * 100).toFixed(1)
                          : 0}
                        %
                      </span>
                      <span>
                        Attempted: {stats.attempted}/{stats.total}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="solutions" className="mt-6">
              <div className="space-y-6">
                {results.questions.map((q, index) => {
                  const userAnswer = results.answers[q.id];
                  const isCorrect = userAnswer === q.correctAnswer;
                  const wasAttempted = userAnswer !== undefined;

                  return (
                    <div
                      key={q.id}
                      className={`p-6 rounded-lg border-2 ${
                        !wasAttempted
                          ? "border-gray-300 bg-gray-50"
                          : isCorrect
                          ? "border-green-300 bg-green-50"
                          : "border-red-300 bg-red-50"
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <Badge
                          variant={!wasAttempted ? "outline" : isCorrect ? "default" : "destructive"}
                        >
                          Q{index + 1}
                        </Badge>
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{q.text}</p>
                        </div>
                        {!wasAttempted && (
                          <Badge variant="outline">Not Attempted</Badge>
                        )}
                      </div>

                      <div className="space-y-2 mb-4">
                        {q.options.map((option, optIndex) => (
                          <div
                            key={optIndex}
                            className={`p-3 rounded border ${
                              optIndex === q.correctAnswer
                                ? "bg-green-100 border-green-400"
                                : optIndex === userAnswer && !isCorrect
                                ? "bg-red-100 border-red-400"
                                : "bg-white border-gray-200"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {optIndex === q.correctAnswer && (
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                              )}
                              {optIndex === userAnswer && !isCorrect && (
                                <XCircle className="w-4 h-4 text-red-600" />
                              )}
                              <span>{option}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                        <p className="text-sm font-semibold text-blue-900 mb-1">Explanation:</p>
                        <p className="text-sm text-blue-800">{q.explanation}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" onClick={onRetake}>
            <Target className="w-5 h-5 mr-2" />
            Retake Test
          </Button>
          <Button size="lg" variant="outline">
            <Download className="w-5 h-5 mr-2" />
            Download Report
          </Button>
          <Button size="lg" variant="outline">
            <Share2 className="w-5 h-5 mr-2" />
            Share Results
          </Button>
          <Button size="lg" variant="secondary" onClick={onHome}>
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
