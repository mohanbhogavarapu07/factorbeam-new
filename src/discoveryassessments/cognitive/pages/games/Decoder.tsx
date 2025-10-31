import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Circle, Triangle, Square, Hexagon, Star, Diamond } from 'lucide-react';
import BaseGame from '../../components/games/BaseGameEnhanced';
import { DECODER_QUESTIONS, DECODER_PRACTICE_QUESTIONS } from '../../data/questions/decoderQuestions';
import { GameResult } from '../../types/assessment';
import { useAssessment } from '../../context/AssessmentContext';
import { getNextGame, isLastGame } from '../../data/gameConfig';

const ShapeIcon = ({ shape, color }: { shape: string; color: string }) => {
  const colorMap: Record<string, string> = {
    primary: "text-primary",
    accent: "text-accent",
    success: "text-success",
    warning: "text-warning",
  };

  const shapeMap: Record<string, any> = {
    circle: Circle,
    triangle: Triangle,
    square: Square,
    hexagon: Hexagon,
    star: Star,
    diamond: Diamond,
  };

  const Icon = shapeMap[shape] || Circle;
  return <Icon className={`w-12 h-12 ${colorMap[color] || "text-foreground"}`} fill="currentColor" />;
};

const Decoder = () => {
  const navigate = useNavigate();
  const { setCurrentGame } = useAssessment();

  const handleComplete = (result: GameResult) => {
    // BaseGame handles navigation automatically
    console.log('Decoder game completed:', result);
  };

  return (
    <BaseGame
      gameId="decoder"
        gameName="The Decoder"
      gameDescription="Logical Reasoning Challenge"
      timeLimit={240}
      questions={DECODER_QUESTIONS}
      practiceQuestions={DECODER_PRACTICE_QUESTIONS}
      onComplete={handleComplete}
    >
      {({ question, selectedAnswer, setSelectedAnswer, showFeedback, handleAnswer, handleContinue, isPractice }) => (
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Card container matching reference spacing */}
          <div className="bg-card border border-border rounded-xl shadow-soft p-6 md:p-8 mb-6">
            <div className="text-center mb-6">
              <p className="text-sm text-muted-foreground">
                {isPractice ? 'Practice Round — Learn the pattern before the real run' : 'Select the piece that completes the pattern'}
              </p>
            </div>

            {/* Grid Display */}
            <div className="mb-8">
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              {question.metadata?.grid.map((row: any[], i: number) => (
                row.map((cell: any, j: number) => (
                  <div
                    key={`${i}-${j}`}
                    className="aspect-square border-2 border-border rounded-lg flex items-center justify-center bg-card hover:bg-muted/50 transition-colors"
                  >
                    {cell ? (
                      <ShapeIcon shape={cell.shape} color={cell.color} />
                    ) : (
                      <span className="text-4xl text-muted-foreground">?</span>
                    )}
                  </div>
                ))
              ))}
              </div>
            </div>

            {/* Options */}
            <div className="mb-2">
              <p className="text-center text-sm font-semibold text-muted-foreground mb-4">
                Select the missing symbol
              </p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-2xl mx-auto">
                {question.options?.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedAnswer(option)}
                    className={`aspect-square border-2 rounded-lg flex items-center justify-center transition-all hover:scale-105 ${
                      selectedAnswer === option
                        ? "border-primary bg-primary/10 shadow-medium"
                        : "border-border bg-card hover:bg-muted/50"
                    }`}
                  >
                    <ShapeIcon shape={option} color="primary" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Feedback for practice */}
          {showFeedback && isPractice && (
            <div className={`p-4 rounded-lg mb-6 ${
              selectedAnswer === question.correctAnswer ? "bg-success/10" : "bg-destructive/10"
            }`}>
              <p className="font-semibold mb-2">
                {selectedAnswer === question.correctAnswer ? "Correct! ✓" : "Not quite"}
              </p>
              <p className="text-sm">{question.explanation}</p>
            </div>
          )}

          {/* Action Button */}
          {isPractice && !showFeedback && (
            <button
              className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-opacity disabled:opacity-50"
              onClick={handleAnswer}
              disabled={!selectedAnswer}
            >
              Check Answer
            </button>
          )}

          {isPractice && showFeedback && (
            <button
              className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-opacity"
              onClick={handleContinue}
            >
              Continue
            </button>
          )}

          {!isPractice && (
            <button
              className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-opacity disabled:opacity-50"
              onClick={handleAnswer}
              disabled={!selectedAnswer}
            >
              Submit Answer
            </button>
          )}
        </div>
      )}
    </BaseGame>
  );
};

export default Decoder;
