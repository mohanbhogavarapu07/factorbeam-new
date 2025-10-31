import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, ArrowRight, ArrowLeft, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

interface GateQuestion {
  id: string;
  text: string;
  type: string;
  options?: Array<{
    id: string;
    text: string;
    value: string;
  }>;
  correctAnswer?: string;
  subject: string;
  difficulty: string;
  explanation?: string;
}

interface GateAssessmentData {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  gateSections: {
    aptitude: {
      title: string;
      description: string;
      timeLimit: number;
      questions: GateQuestion[];
    };
    core: {
      title: string;
      description: string;
      timeLimit: number;
      questions: GateQuestion[];
    };
  };
}

interface GateAssessmentProps {
  assessment: GateAssessmentData;
  onComplete: (results: any) => void;
  onExit: () => void;
}

const GateAssessment: React.FC<GateAssessmentProps> = ({ assessment, onComplete, onExit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [currentSection, setCurrentSection] = useState<'aptitude' | 'core'>('aptitude');
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  // Get current section questions
  const currentQuestions = currentSection === 'aptitude' 
    ? assessment.gateSections.aptitude.questions 
    : assessment.gateSections.core.questions;
  
  const currentQuestion = currentQuestions[currentQuestionIndex];
  const totalQuestions = assessment.gateSections.aptitude.questions.length + 
                        assessment.gateSections.core.questions.length;
  const answeredQuestions = Object.keys(answers).length;
  const progress = totalQuestions > 0 ? (answeredQuestions / totalQuestions) * 100 : 0;
  
  // Flattened list of all questions to support global navigator indexes
  const allQuestions: { q: GateQuestion; section: 'aptitude' | 'core'; indexInSection: number }[] = [
    ...assessment.gateSections.aptitude.questions.map((q, i) => ({ q, section: 'aptitude' as const, indexInSection: i })),
    ...assessment.gateSections.core.questions.map((q, i) => ({ q, section: 'core' as const, indexInSection: i }))
  ];

  // Timer effect
  useEffect(() => {
    const timeLimit = 180; // 3 hours for full assessment
    setTimeRemaining(timeLimit * 60);

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleTimeUp = () => {
    toast({
      title: "Time's Up!",
      description: "The assessment time has ended. Your answers will be submitted automatically.",
      variant: "destructive",
    });
    handleSubmit();
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (currentSection === 'aptitude') {
      // Move to core section
      setCurrentSection('core');
      setCurrentQuestionIndex(0);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else if (currentSection === 'core') {
      // Move back to aptitude section
      setCurrentSection('aptitude');
      setCurrentQuestionIndex(assessment.gateSections.aptitude.questions.length - 1);
    }
  };

  const handleJumpToIndex = (globalIndex: number) => {
    const aptitudeLen = assessment.gateSections.aptitude.questions.length;
    if (globalIndex < aptitudeLen) {
      setCurrentSection('aptitude');
      setCurrentQuestionIndex(globalIndex);
    } else {
      setCurrentSection('core');
      setCurrentQuestionIndex(globalIndex - aptitudeLen);
    }
  };

  const toggleMarkForReview = () => {
    const qid = currentQuestion?.id;
    if (!qid) return;
    setMarkedForReview(prev => ({ ...prev, [qid]: !prev[qid] }));
  };

  const calculateSectionScore = (sectionId: 'aptitude' | 'core') => {
    const section = assessment.gateSections[sectionId];
    if (!section) return 0;

    let earnedMarks = 0;

    section.questions.forEach(question => {
      const userAnswer = answers[question.id];
      
      // Only calculate marks for answered questions
      if (userAnswer !== undefined && userAnswer !== null && userAnswer !== '') {
        if (question.correctAnswer && userAnswer.toString() === question.correctAnswer.toString()) {
          // Correct answer: +1.5 marks
          earnedMarks += 1.5;
        } else {
          // Wrong answer: -0.5 marks (negative marking)
          earnedMarks -= 0.5;
        }
      }
      // Unattempted questions (no userAnswer) get 0 marks - no penalty
    });

    return Math.max(0, earnedMarks);
  };

  const calculateTotalScore = () => {
    const aptitudeScore = calculateSectionScore('aptitude');
    const coreScore = calculateSectionScore('core');
    return aptitudeScore + coreScore;
  };

  const handleSubmit = () => {
    const aptitudeScore = calculateSectionScore('aptitude');
    const coreScore = calculateSectionScore('core');
    const totalScore = aptitudeScore + coreScore;
    
    // Calculate correct, incorrect, and unattempted questions
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let unattemptedQuestions = 0;
    
    const allQuestions = [...assessment.gateSections.aptitude.questions, ...assessment.gateSections.core.questions];
    
    allQuestions.forEach(question => {
      const userAnswer = answers[question.id];
      
      // Check if question was attempted (has an answer)
      if (userAnswer !== undefined && userAnswer !== null && userAnswer !== '') {
        // Question was attempted - check if correct or incorrect
        if (question.correctAnswer && userAnswer.toString() === question.correctAnswer.toString()) {
          correctAnswers++;
        } else {
          incorrectAnswers++;
        }
      } else {
        // Question was not attempted
        unattemptedQuestions++;
      }
    });
    
    // Validation: Ensure counts add up to total questions
    const totalCounted = correctAnswers + incorrectAnswers + unattemptedQuestions;
    if (totalCounted !== totalQuestions) {
      console.error(`Count mismatch: ${correctAnswers} + ${incorrectAnswers} + ${unattemptedQuestions} = ${totalCounted}, but total questions = ${totalQuestions}`);
    }
    
    const results = {
      aptitudeScore,
      coreScore,
      totalScore,
      correctAnswers,
      incorrectAnswers,
      unattemptedQuestions,
      totalQuestions,
      answers,
      questions: allQuestions,
      timestamp: new Date().toISOString(),
      assessment: {
        id: assessment.id,
        title: assessment.title,
        duration: assessment.duration
      }
    };

    // Save results to localStorage
    localStorage.setItem('gateExamResults', JSON.stringify(results));
    
    onComplete(results);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">{assessment.title}</h1>
              <p className="text-sm text-gray-600">
                {currentSection === 'aptitude' ? 'General Aptitude' : 'Core Subject'} - Question {currentQuestionIndex + 1} of {currentQuestions.length}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="w-4 h-4" />
                <span className="font-mono">{formatTime(timeRemaining)}</span>
              </div>
              <Button variant="outline" size="sm" onClick={onExit}>
                Exit
              </Button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Overall Progress</span>
              <span>{answeredQuestions}/{totalQuestions} answered</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

        </div>
      </div>

      {/* Question Content with Navigator */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Badge className={getDifficultyColor(currentQuestion?.difficulty || 'medium')}>
                  {currentQuestion?.difficulty || 'Medium'}
                </Badge>
                <Badge variant="outline">{currentQuestion?.subject}</Badge>
              </div>
              <div className="text-sm text-gray-500">
                Question {currentQuestionIndex + 1} of {currentQuestions.length}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {currentQuestion?.text}
              </h3>
              
              {currentQuestion?.options && (
                <div className="space-y-3">
                  {currentQuestion.options.map((option) => (
                    <label
                      key={option.id}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 ${
                        answers[currentQuestion.id] === option.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQuestion.id}`}
                        value={option.value}
                        checked={answers[currentQuestion.id] === option.value}
                        onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                        className="mr-3"
                      />
                      <span className="text-gray-900">{option.text}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentSection === 'aptitude' && currentQuestionIndex === 0}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              
              <div className="flex space-x-2">
                <Button variant={markedForReview[currentQuestion?.id || ''] ? 'secondary' : 'outline'} onClick={toggleMarkForReview}>
                  {markedForReview[currentQuestion?.id || ''] ? 'Unmark Review' : 'Mark for Review'}
                </Button>
                <Button onClick={handleNext}>
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  onClick={handleSubmit}
                >
                  Submit Assessment
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Sidebar Navigator */}
        <div className="lg:sticky lg:top-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Question Navigator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 text-sm mb-4">
                <div className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded bg-green-500" /> Answered</div>
                <div className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded bg-orange-500" /> Marked</div>
                <div className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded bg-gray-300" /> Not Answered</div>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {allQuestions.map((item, idx) => {
                  const qid = item.q.id;
                  const isAnswered = answers[qid] !== undefined && answers[qid] !== '';
                  const isMarked = !!markedForReview[qid];
                  const bg = isAnswered ? 'bg-green-500 text-white' : isMarked ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800';
                  const isCurrent = currentSection === item.section && currentQuestion?.id === qid;
                  const ring = isCurrent ? 'ring-2 ring-blue-500' : '';
                  return (
                    <button
                      key={qid}
                      type="button"
                      onClick={() => handleJumpToIndex(idx)}
                      className={`h-9 rounded-md text-sm font-medium ${bg} ${ring}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
        </div>
      </div>
    </div>
  );
};

export default GateAssessment;
