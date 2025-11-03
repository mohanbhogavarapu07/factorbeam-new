import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Pause } from 'lucide-react';
import WelcomeScreen from '../components/WelcomeScreen';
import PreAssessmentBriefing from '../components/PreAssessmentBriefing';
import AssessmentQuestion from '../components/AssessmentQuestion';
import ResultsScreen from '../components/ResultsScreen';
import { assessmentItems } from '../data/assessmentItems';
import { Response, AssessmentResults } from '../types/assessment';
import { calculateScores } from '../utils/scoring';

type Screen = 'welcome' | 'briefing' | 'assessment' | 'results';

export default function Index() {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<Response[]>([]);
  const [results, setResults] = useState<AssessmentResults | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Load saved progress with error handling
    try {
      const saved = localStorage.getItem("assessment_progress");
      if (saved) {
        const data = JSON.parse(saved);
        if (data.responses && Array.isArray(data.responses) && 
            typeof data.currentQuestion === 'number' && 
            data.currentQuestion >= 0 && 
            data.currentQuestion < assessmentItems.length) {
          setResponses(data.responses);
          setCurrentQuestion(data.currentQuestion);
        }
      }
    } catch (error) {
      console.error("Failed to load saved progress:", error);
      // Clear corrupted data
      localStorage.removeItem("assessment_progress");
    }
  }, []);

  useEffect(() => {
    // Save progress with error handling
    if (screen === 'assessment') {
      try {
        localStorage.setItem(
          "assessment_progress",
          JSON.stringify({ responses, currentQuestion })
        );
      } catch (error) {
        console.error("Failed to save progress:", error);
      }
    }
  }, [responses, currentQuestion, screen]);

  const handleStart = () => {
    setScreen('briefing');
  };

  const handleStartAssessment = () => {
    setScreen('assessment');
    setCurrentQuestion(0);
    setResponses([]);
  };

  const handleSkipBriefing = () => {
    setScreen('assessment');
    setCurrentQuestion(0);
    setResponses([]);
  };

  const getCurrentResponse = () => {
    const current = assessmentItems[currentQuestion];
    return responses.find(r => r.itemId === current.id)?.value || null;
  };

  const handleComplete = useCallback((finalResponses?: Response[]) => {
    try {
      const responsesToUse = finalResponses || responses;
      const calculatedResults = calculateScores(responsesToUse);
      setResults(calculatedResults);
      setScreen('results');
      localStorage.removeItem("assessment_progress");
    } catch (error) {
      console.error("Failed to complete assessment:", error);
      // Show error to user
      alert("There was an error processing your results. Please try again.");
      setScreen('welcome');
    }
  }, [responses]);

  const handleAnswer = useCallback((value: number) => {
    const currentItem = assessmentItems[currentQuestion];
    if (!currentItem) return;
    
    // Update responses and auto-advance (always enabled)
    setResponses(prev => {
      const existing = prev.findIndex(r => r.itemId === currentItem.id);
      const newResponses = existing >= 0
        ? prev.map(r => r.itemId === currentItem.id ? { itemId: currentItem.id, value } : r)
        : [...prev, { itemId: currentItem.id, value }];
      
      // Auto-advance to next question (always enabled)
      setTimeout(() => {
        if (currentQuestion < assessmentItems.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          // On last question, complete the assessment
          const allAnswered = newResponses.length === assessmentItems.length;
          if (allAnswered || newResponses.find(r => r.itemId === currentItem.id)) {
            handleComplete(newResponses);
          }
        }
      }, 300); // Small delay for visual feedback
      
      return newResponses;
    });
  }, [currentQuestion, handleComplete]);

  useEffect(() => {
    // Keyboard shortcuts
    const handleKeyPress = (e: KeyboardEvent) => {
      if (screen !== 'assessment' || isPaused) return;
      
      if (e.key >= "1" && e.key <= "5") {
        handleAnswer(parseInt(e.key));
      } else if (e.key === "Escape") {
        setIsPaused(!isPaused);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentQuestion, responses, isPaused, screen, handleAnswer]);


  const handleReset = () => {
    setScreen('welcome');
    setCurrentQuestion(0);
    setResponses([]);
    setResults(null);
  };

  const currentResponse = getCurrentResponse();
  const canProceed = currentResponse !== null;
  
  // Check if all questions are answered
  // Need to account for the current question's answer being selected but not yet saved
  const answeredCount = responses.length;
  const allQuestionsAnswered = 
    answeredCount === assessmentItems.length || 
    (answeredCount === assessmentItems.length - 1 && currentResponse !== null);

  if (screen === 'welcome') {
    return <WelcomeScreen onStart={handleStart} />;
  }

  if (screen === 'briefing') {
    return <PreAssessmentBriefing onStart={handleStartAssessment} onSkip={handleSkipBriefing} />;
  }

  if (screen === 'results' && results) {
    return <ResultsScreen results={results} onReset={handleReset} />;
  }

  const currentItem = assessmentItems[currentQuestion];

  // Safety check for currentItem
  if (!currentItem) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Assessment Error</h2>
          <p className="text-muted-foreground mb-4">Unable to load assessment question.</p>
          <Button onClick={() => setScreen('welcome')} className="gradient-primary">
            Return to Start
          </Button>
        </div>
      </div>
    );
  }

  if (isPaused) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
        <div className="text-center space-y-8 max-w-md animate-in fade-in duration-500">
          <div className="relative">
            <div className="text-8xl animate-bounce">⏸️</div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">!</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Assessment Paused
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Take a moment to breathe. Your progress is automatically saved and you can continue anytime.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Progress: {currentQuestion + 1} of {assessmentItems.length} questions</span>
              </div>
              
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="h-full gradient-primary transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / assessmentItems.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <Button
              onClick={() => setIsPaused(false)}
              size="lg"
              className="w-full gradient-primary hover:opacity-90 shadow-lg"
            >
              Continue Assessment
            </Button>
            <Button
              onClick={() => setScreen('welcome')}
              variant="outline"
              size="lg"
              className="w-full hover:bg-primary/10"
            >
              Save & Exit
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-subtle overflow-hidden flex flex-col">
      {/* Compact Header */}
      <header className="border-b bg-card/80 backdrop-blur-md shadow-sm flex-shrink-0">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">📚</span>
            </div>
            <h1 className="text-base md:text-lg font-bold text-foreground">
              Learning Preferences Assessment
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              <span>In Progress</span>
            </div>
            <Button
              onClick={() => setIsPaused(true)}
              variant="outline"
              size="sm"
              className="text-xs hover:bg-primary/10 h-8 px-3"
            >
              <Pause className="h-3 w-3 mr-1" />
              <span className="hidden sm:inline">Pause</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content - Takes remaining height */}
      <main className="flex-1 container mx-auto px-4 py-4 flex flex-col min-h-0">
        <div className="flex-1 flex flex-col min-h-0">
          <AssessmentQuestion
            questionNumber={currentQuestion + 1}
            totalQuestions={assessmentItems.length}
            question={currentItem.text}
            onAnswer={handleAnswer}
            selectedValue={currentResponse}
          />

          {/* Compact Navigation */}
          <div className="flex-shrink-0 mt-4">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              {/* Question Counter */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="flex gap-1">
                  {Array.from({ length: assessmentItems.length }, (_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        i < currentQuestion
                          ? 'bg-primary'
                          : i === currentQuestion
                          ? 'bg-primary/50'
                          : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium text-xs">
                  {currentQuestion + 1} of {assessmentItems.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
