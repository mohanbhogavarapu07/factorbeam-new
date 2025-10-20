import { useState } from "react";

interface SentenceWeaverQuestion {
  jumbled: Array<{id: string; text: string}>;
  correctOrder: string[];
}

interface SentenceWeaverGameProps {
  question: SentenceWeaverQuestion;
  onSubmit: (answer: string[]) => void;
}

const SentenceWeaverGame = ({ question, onSubmit }: SentenceWeaverGameProps) => {
  const [sentences, setSentences] = useState(() => 
    [...question.jumbled].sort(() => Math.random() - 0.5)
  );
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    
    if (draggedIndex === null || draggedIndex === index) return;

    const newSentences = [...sentences];
    const draggedSentence = newSentences[draggedIndex];
    
    newSentences.splice(draggedIndex, 1);
    newSentences.splice(index, 0, draggedSentence);
    
    setSentences(newSentences);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const handleSubmit = () => {
    const answer = sentences.map(s => s.id);
    onSubmit(answer);
  };

  return (
    <div>
      <h3 className="text-xl mb-4 text-foreground">
        Reorder the sentences to form a coherent paragraph:
      </h3>
      
      <div className="space-y-3 mb-6">
        {sentences.map((sentence, index) => (
          <div
            key={sentence.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnd={handleDragEnd}
            className={`p-3 bg-card border border-border rounded-lg cursor-move hover:bg-muted transition-colors ${
              draggedIndex === index ? 'opacity-50' : ''
            }`}
          >
            {sentence.text}
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-primary text-primary-foreground py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
      >
        Submit Answer
      </button>
    </div>
  );
};

export default SentenceWeaverGame;
