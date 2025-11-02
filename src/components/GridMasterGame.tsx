import { useState, useEffect } from "react";

interface GridMasterQuestion {
  rules: string[];
  items: string[];
  solution: string[];
}

interface GridMasterGameProps {
  question: GridMasterQuestion;
  onSubmit: (answer: string[]) => void;
}

const GridMasterGame = ({ question, onSubmit }: GridMasterGameProps) => {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [draggedFromSlot, setDraggedFromSlot] = useState<number | null>(null);
  const [slots, setSlots] = useState<(string | null)[]>(new Array(question.items.length).fill(null));
  const [availableItems, setAvailableItems] = useState<string[]>(question.items);

  // Reset state when question changes
  useEffect(() => {
    setSlots(new Array(question.items.length).fill(null));
    setAvailableItems([...question.items]);
    setDraggedItem(null);
    setDraggedFromSlot(null);
  }, [question]);

  const handleDragStart = (item: string, slotIndex?: number) => {
    setDraggedItem(item);
    if (slotIndex !== undefined) {
      setDraggedFromSlot(slotIndex);
    } else {
      setDraggedFromSlot(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDropOnSlot = (slotIndex: number) => {
    if (!draggedItem) return;

    const newSlots = [...slots];
    const newAvailableItems = [...availableItems];

    // If slot already has an item, move it back to available
    if (newSlots[slotIndex]) {
      newAvailableItems.push(newSlots[slotIndex]!);
    }

    // If dragging from another slot, clear that slot
    if (draggedFromSlot !== null && draggedFromSlot !== slotIndex) {
      newSlots[draggedFromSlot] = null;
    } else if (draggedFromSlot === null) {
      // Dragging from available items, remove from available
      const itemIndex = newAvailableItems.indexOf(draggedItem);
      if (itemIndex > -1) {
        newAvailableItems.splice(itemIndex, 1);
      }
    }

    // Place dragged item in slot
    newSlots[slotIndex] = draggedItem;
    setSlots(newSlots);
    setAvailableItems(newAvailableItems);
    setDraggedItem(null);
    setDraggedFromSlot(null);
  };

  const handleDropOnAvailable = () => {
    if (!draggedItem) return;
    
    // If item was from a slot, clear that slot and return to available
    if (draggedFromSlot !== null) {
      const newSlots = [...slots];
      newSlots[draggedFromSlot] = null;
      setSlots(newSlots);
      
      if (!availableItems.includes(draggedItem)) {
        setAvailableItems(prev => [...prev, draggedItem]);
      }
    }
    
    setDraggedItem(null);
    setDraggedFromSlot(null);
  };

  const handleSubmit = () => {
    const answer = slots.filter((item): item is string => item !== null);
    if (answer.length === question.items.length) {
      onSubmit(answer);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h3 className="font-semibold text-foreground mb-2">Rules:</h3>
        <ul className="list-disc list-inside space-y-1">
          {question.rules.map((rule, idx) => (
            <li key={idx} className="text-muted-foreground">{rule}</li>
          ))}
        </ul>
      </div>

      <div 
        className="mb-6 flex flex-wrap gap-4 justify-center min-h-[80px] p-4 border-2 border-dashed border-border rounded-lg"
        onDragOver={handleDragOver}
        onDrop={handleDropOnAvailable}
      >
        <p className="w-full text-sm text-muted-foreground text-center mb-2">Available Items:</p>
        {availableItems.map(item => (
          <div
            key={item}
            draggable
            onDragStart={() => handleDragStart(item)}
            className="p-4 bg-secondary rounded-lg text-center cursor-move hover:bg-secondary/80 transition-colors"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="mb-6">
        <p className="text-sm text-muted-foreground text-center mb-3">Arrange items in the correct order:</p>
        <div className="flex gap-4 justify-center flex-wrap">
          {slots.map((item, idx) => (
            <div
              key={idx}
              onDragOver={handleDragOver}
              onDrop={() => handleDropOnSlot(idx)}
              className="h-20 w-20 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center bg-card hover:bg-muted transition-colors cursor-pointer"
            >
              <span className="text-xs text-muted-foreground mb-1">{idx + 1}</span>
              {item ? (
                <div
                  draggable
                  onDragStart={() => handleDragStart(item, idx)}
                  className="p-2 bg-primary text-primary-foreground rounded cursor-move font-semibold"
                >
                  {item}
                </div>
              ) : (
                <span className="text-xs text-muted-foreground">Drop here</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={slots.some(item => item === null)}
        className="w-full bg-primary text-primary-foreground py-2 rounded-md font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Submit Answer
      </button>
    </div>
  );
};

export default GridMasterGame;
