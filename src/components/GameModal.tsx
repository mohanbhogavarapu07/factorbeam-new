import { useState, useEffect, useCallback } from "react";

interface Question {
  q: string;
  options: string[];
  a: string;
  img?: string;
}

interface GameData {
  title: string;
  duration: number;
  questions: Question[];
}

interface GameModalProps {
  gameId: string;
  onClose: () => void;
}

const gameDataConfig: Record<string, GameData> = {
  vocabVortex: {
    title: "Vocab Vortex",
    duration: 60,
    questions: [
      { q: "Ephemeral", options: ["Everlasting", "Short-lived", "Strong", "Weak"], a: "Short-lived" },
      { q: "Ubiquitous", options: ["Rare", "Hidden", "Everywhere", "Scary"], a: "Everywhere" },
      { q: "Lethargic", options: ["Energetic", "Sluggish", "Quick", "Happy"], a: "Sluggish" },
      { q: "Arduous", options: ["Easy", "Difficult", "Simple", "Pleasant"], a: "Difficult" },
      { q: "Benevolent", options: ["Malicious", "Kind", "Angry", "Neutral"], a: "Kind" },
      { q: "Candid", options: ["Dishonest", "Frank", "Shy", "Loud"], a: "Frank" },
      { q: "Diligent", options: ["Lazy", "Hardworking", "Careless", "Slow"], a: "Hardworking" },
      { q: "Elated", options: ["Sad", "Overjoyed", "Angry", "Calm"], a: "Overjoyed" },
    ],
  },
  logicLeap: {
    title: "Logic Leap",
    duration: 120,
    questions: [
      { q: "Statement: All dogs are animals. All animals have four legs. Conclusion: All dogs have four legs.", options: ["True", "False"], a: "True" },
      { q: "Find the next number: 2, 5, 11, 23, ?", options: ["47", "46", "45", "44"], a: "47" },
      { q: "If A > B and B > C, then:", options: ["A > C", "A < C", "A = C", "Cannot determine"], a: "A > C" },
      { q: "Complete the series: 1, 1, 2, 3, 5, 8, ?", options: ["13", "12", "11", "10"], a: "13" },
      { q: "Statement: Some cats are black. All black things are beautiful. Conclusion: Some cats are beautiful.", options: ["True", "False"], a: "True" },
      { q: "Which is the odd one out: 3, 5, 7, 9, 12", options: ["12", "9", "7", "5"], a: "12" },
      { q: "If today is Monday, what day was it 100 days ago?", options: ["Saturday", "Sunday", "Monday", "Friday"], a: "Saturday" },
    ],
  },
  dataDash: {
    title: "Data Dash",
    duration: 90,
    questions: [
      { q: "Sales in March were higher than in January.", options: ["True", "False"], a: "True", img: "https://placehold.co/600x300/e2e8f0/475569?text=Sales+Chart%0AJan:100+Feb:150+Mar:120" },
      { q: "February saw the highest sales.", options: ["True", "False"], a: "True", img: "https://placehold.co/600x300/e2e8f0/475569?text=Sales+Chart%0AJan:100+Feb:150+Mar:120" },
      { q: "The total sales across all months exceed 350.", options: ["True", "False"], a: "True", img: "https://placehold.co/600x300/e2e8f0/475569?text=Sales+Chart%0AJan:100+Feb:150+Mar:120" },
      { q: "January had the lowest sales.", options: ["True", "False"], a: "True", img: "https://placehold.co/600x300/e2e8f0/475569?text=Sales+Chart%0AJan:100+Feb:150+Mar:120" },
      { q: "March sales were exactly 20% higher than January.", options: ["True", "False"], a: "True", img: "https://placehold.co/600x300/e2e8f0/475569?text=Sales+Chart%0AJan:100+Feb:150+Mar:120" },
    ],
  },
  quickCalc: {
    title: "Quick Calc",
    duration: 90,
    questions: [],
  },
};

const GameModal = ({ gameId, onClose }: GameModalProps) => {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [gameEnded, setGameEnded] = useState(false);

  const gameData = gameDataConfig[gameId];

  const generateCalcQuestion = useCallback((): Question => {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const ops = ['+', '-', '*'];
    const op = ops[Math.floor(Math.random() * ops.length)];
    let answer: number;
    
    if (op === '+') answer = num1 + num2;
    else if (op === '-') answer = num1 - num2;
    else answer = num1 * num2;
    
    const options = new Set([answer.toString()]);
    while (options.size < 4) {
      options.add((answer + (Math.floor(Math.random() * 10) - 5)).toString());
    }
    
    return {
      q: `What is ${num1} ${op} ${num2}?`,
      options: Array.from(options).sort(() => Math.random() - 0.5),
      a: answer.toString(),
    };
  }, []);

  const loadQuestion = useCallback(() => {
    if (gameId === 'quickCalc') {
      setCurrentQuestion(generateCalcQuestion());
    } else {
      if (currentQuestionIndex >= gameData.questions.length) {
        setGameEnded(true);
        return;
      }
      setCurrentQuestion(gameData.questions[currentQuestionIndex]);
    }
  }, [gameId, currentQuestionIndex, gameData.questions, generateCalcQuestion]);

  const checkAnswer = (selectedAnswer: string) => {
    if (currentQuestion && selectedAnswer === currentQuestion.a) {
      setScore(prev => prev + 10);
    }
    setCurrentQuestionIndex(prev => prev + 1);
  };

  const handleRestart = () => {
    setScore(0);
    setTimer(gameData.duration);
    setCurrentQuestionIndex(0);
    setGameEnded(false);
  };

  useEffect(() => {
    setTimer(gameData.duration);
  }, [gameData.duration]);

  useEffect(() => {
    if (timer <= 0) {
      setGameEnded(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    if (!gameEnded) {
      loadQuestion();
    }
  }, [currentQuestionIndex, gameEnded, loadQuestion]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-card rounded-lg shadow-xl w-11/12 max-w-2xl max-h-[90vh] flex flex-col border border-border">
        {/* Header */}
        <header className="p-4 border-b border-border flex justify-between items-center">
          <h2 className="text-xl font-bold text-foreground">{gameData.title}</h2>
          <div className="flex items-center space-x-4">
            <div className="text-lg font-mono font-semibold text-foreground">
              {formatTime(timer)}
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground text-2xl leading-none"
            >
              ×
            </button>
          </div>
        </header>

        {/* Game Area */}
        {!gameEnded ? (
          <main className="p-8 flex-grow overflow-y-auto">
            {currentQuestion && (
              <div>
                {currentQuestion.img && (
                  <div className="text-center mb-4">
                    <img
                      src={currentQuestion.img}
                      alt="Chart Data"
                      className="mx-auto rounded-lg"
                    />
                  </div>
                )}
                <h3 className={`text-2xl mb-6 text-foreground ${currentQuestion.img ? 'text-center' : ''}`}>
                  {currentQuestion.q}
                </h3>
                <div className={`${currentQuestion.img ? 'grid grid-cols-2' : 'flex flex-col'} gap-4`}>
                  {currentQuestion.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => checkAnswer(option)}
                      className="text-left p-4 border border-border rounded-lg hover:bg-muted transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </main>
        ) : (
          <div className="p-8 text-center flex-grow flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-foreground">Workout Complete!</h2>
            <p className="mt-4 text-muted-foreground">Here's how you did:</p>
            <div className="mt-6 text-5xl font-bold text-primary">{score}</div>
            <p className="text-muted-foreground">points</p>
            <div className="mt-8">
              <button
                onClick={handleRestart}
                className="bg-primary text-primary-foreground py-2 px-6 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameModal;
