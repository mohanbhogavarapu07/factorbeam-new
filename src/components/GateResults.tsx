import React, { useState } from 'react';
import { Trophy, Clock, Target, Award, BookOpen, Brain, CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface GateResults {
  aptitudeScore: number;
  coreScore: number;
  totalScore: number;
  correctAnswers: number;
  incorrectAnswers?: number;
  unattemptedQuestions?: number;
  totalQuestions: number;
  answers: Record<string, any>;
  questions: Array<{
    id: string;
    text: string;
    options?: Array<{id: string; text: string; value: string}>;
    correctAnswer?: string;
    explanation?: string;
    subject?: string;
    difficulty?: string;
  }>;
  timestamp: string;
  assessment: {
    id: string;
    title: string;
    duration: string;
  };
}

interface GateResultsProps {
  results: GateResults;
  onRetake: () => void;
  onBack: () => void;
}

const GateResults: React.FC<GateResultsProps> = ({ results, onRetake, onBack }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'solutions' | 'analytics'>('overview');

  // Calculate incorrect and unattempted if not provided
  const incorrectAnswers = results.incorrectAnswers || (results.totalQuestions - results.correctAnswers - (results.unattemptedQuestions || 0));
  const unattemptedQuestions = results.unattemptedQuestions || (results.totalQuestions - results.correctAnswers - (results.incorrectAnswers || 0));
  const accuracy = results.totalQuestions > 0 ? (results.correctAnswers / results.totalQuestions) * 100 : 0;


  const getScoreGrade = (score: number) => {
    if (score >= 80) return { grade: 'A+', color: 'text-green-600', bg: 'bg-green-100' };
    if (score >= 70) return { grade: 'A', color: 'text-green-600', bg: 'bg-green-100' };
    if (score >= 60) return { grade: 'B+', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (score >= 50) return { grade: 'B', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (score >= 40) return { grade: 'C+', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    if (score >= 30) return { grade: 'C', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { grade: 'D', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const scoreGrade = getScoreGrade(results.totalScore);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTopicWisePerformance = () => {
    const topicMap = new Map<string, {
      name: string;
      correct: number;
      total: number;
      score: number;
    }>();

    // Process all questions from both aptitude and core sections
    const allQuestions = [...results.questions];
    
    allQuestions.forEach(question => {
      const subject = question.subject || 'Unknown Topic';
      const userAnswer = results.answers[question.id];
      
      // Extract the main topic by splitting on " - " and taking the first part
      // e.g., "Redox Reactions - Electron Transfer" -> "Redox Reactions"
      // e.g., "Verbal Ability - Coding" -> "Verbal Ability"
      const mainTopic = subject.includes(' - ') ? subject.split(' - ')[0] : subject;
      
      if (!topicMap.has(mainTopic)) {
        topicMap.set(mainTopic, {
          name: mainTopic,
          correct: 0,
          total: 0,
          score: 0
        });
      }
      
      const topic = topicMap.get(mainTopic)!;
      topic.total++;
      
      // Check if question was attempted
      if (userAnswer !== undefined && userAnswer !== null && userAnswer !== '') {
        if (question.correctAnswer && userAnswer.toString() === question.correctAnswer.toString()) {
          topic.correct++;
          topic.score += 1.5; // Correct answer: +1.5 marks
        } else {
          topic.score -= 0.5; // Wrong answer: -0.5 marks
        }
      }
      // Unattempted questions: 0 marks (no penalty)
    });

    // Convert to array and sort by score (highest first)
    return Array.from(topicMap.values())
      .map(topic => ({
        ...topic,
        percentage: topic.total > 0 ? Math.round((topic.correct / topic.total) * 100) : 0
      }))
      .sort((a, b) => b.score - a.score);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Assessment Results</h1>
              <p className="text-gray-600">{results.assessment.title}</p>
            </div>
            <Button variant="outline" onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Assessments
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Score Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Trophy className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{results.totalScore.toFixed(1)}</h3>
              <p className="text-gray-600">Total Score</p>
              <Badge className={`mt-2 ${scoreGrade.bg} ${scoreGrade.color}`}>
                Grade {scoreGrade.grade}
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{accuracy.toFixed(1)}%</h3>
              <p className="text-gray-600">Accuracy</p>
              <div className="mt-2">
                <Progress value={accuracy} className="h-2" />
              </div>
            </CardContent>
          </Card>

        </div>


        {/* Question Analysis */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Question Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-600">{results.correctAnswers}</div>
                <p className="text-gray-600">Correct</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mx-auto mb-2">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-2xl font-bold text-red-600">{incorrectAnswers}</div>
                <p className="text-gray-600">Incorrect</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mx-auto mb-2">
                  <Clock className="w-6 h-6 text-gray-600" />
                </div>
                <div className="text-2xl font-bold text-gray-600">{unattemptedQuestions}</div>
                <p className="text-gray-600">Unattempted</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Card>
          <div className="border-b">
            <div className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'overview'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('solutions')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'solutions'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                }`}
              >
                Solutions
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'analytics'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                }`}
              >
                Analytics
              </button>
            </div>
          </div>

          <CardContent className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Performance Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Assessment Duration</p>
                      <p className="font-semibold">{results.assessment.duration}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Completion Time</p>
                      <p className="font-semibold">{new Date(results.timestamp).toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Recommendations</h3>
                  <div className="space-y-3">
                    {results.aptitudeScore < 10 && (
                      <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                        <p className="text-sm text-yellow-800">
                          <strong>General Aptitude:</strong> Focus on improving verbal ability and quantitative aptitude skills.
                        </p>
                      </div>
                    )}
                    {results.coreScore < 50 && (
                      <div className="p-4 bg-red-50 border-l-4 border-red-400 rounded">
                        <p className="text-sm text-red-800">
                          <strong>Core Subject:</strong> Review fundamental concepts and practice more core subject questions.
                        </p>
                      </div>
                    )}
                    {results.totalScore >= 70 && (
                      <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded">
                        <p className="text-sm text-green-800">
                          <strong>Excellent Performance:</strong> You're well-prepared for the GATE exam!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'solutions' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Question Solutions</h3>
                <div className="space-y-4">
                  {results.questions.map((question, index) => {
                    const userAnswer = results.answers[question.id];
                    const isCorrect = userAnswer === question.correctAnswer;
                    const isUnattempted = userAnswer === undefined || userAnswer === null || userAnswer === '';
                    
                    return (
                      <div key={question.id} className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium">Question {index + 1}</h4>
                          <div className="flex items-center space-x-2">
                            <Badge className={getDifficultyColor(question.difficulty || 'medium')}>
                              {question.difficulty || 'Medium'}
                            </Badge>
                            {isUnattempted ? (
                              <Badge className="bg-gray-100 text-gray-800">
                                Unattempted
                              </Badge>
                            ) : isCorrect ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-600" />
                            )}
                          </div>
                        </div>
                        <p className="text-gray-700 mb-3">{question.text}</p>
                        {question.options && (
                          <div className="space-y-2 mb-3">
                            {question.options.map((option) => (
                              <div
                                key={option.id}
                                className={`p-2 rounded ${
                                  option.value === question.correctAnswer
                                    ? 'bg-green-100 border border-green-300'
                                    : userAnswer === option.value
                                    ? 'bg-red-100 border border-red-300'
                                    : 'bg-gray-50'
                                }`}
                              >
                                <span className="font-medium">{option.id}.</span> {option.text}
                                {option.value === question.correctAnswer && (
                                  <Badge className="ml-2 bg-green-600">Correct Answer</Badge>
                                )}
                                {userAnswer === option.value && option.value !== question.correctAnswer && (
                                  <Badge className="ml-2 bg-red-600">Your Answer</Badge>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                        {question.explanation && (
                          <div className="p-3 bg-blue-50 rounded">
                            <p className="text-sm text-blue-800">
                              <strong>Explanation:</strong> {question.explanation}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Performance Analytics</h3>
                <div className="grid grid-cols-1 gap-6">

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Target className="w-5 h-5 mr-2" />
                        Topic-wise Performance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {getTopicWisePerformance().map((topic, index) => (
                          <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{topic.name}</h4>
                              <p className="text-sm text-gray-600">
                                {topic.correct}/{topic.total} ({topic.percentage}%)
                              </p>
                            </div>
                            <div className="text-right">
                              <p className={`font-semibold ${topic.score >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                Score: {topic.score.toFixed(2)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <Button variant="outline" onClick={onBack}>
            Back to Assessments
          </Button>
          <Button onClick={onRetake} className="bg-blue-600 hover:bg-blue-700">
            Retake Assessment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GateResults;
