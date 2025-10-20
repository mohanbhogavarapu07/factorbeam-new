import { useState } from "react";
import GameModal from "@/components/GameModal";

const Games = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const categories = [
    { name: "All Games", active: true },
    { name: "Logic & Puzzles", active: false },
    { name: "Verbal Ability", active: false },
    { name: "Quantitative Speed", active: false },
  ];

  const games = [
    {
      id: "vocabVortex",
      title: "Vocab Vortex",
      description: "A 60-second challenge to test and expand your vocabulary by matching synonyms and antonyms.",
      skills: "Verbal Ability, Speed",
    },
    {
      id: "logicLeap",
      title: "Logic Leap",
      description: "Solve a series of quick logical reasoning puzzles, including syllogisms and pattern recognition.",
      skills: "Logical Reasoning, Critical Thinking",
    },
    {
      id: "dataDash",
      title: "Data Dash",
      description: "Quickly interpret charts and graphs to answer true/false questions against the clock.",
      skills: "Data Interpretation, Analytical Speed",
    },
    {
      id: "quickCalc",
      title: "Quick Calc",
      description: "Solve as many arithmetic problems as you can in 90 seconds to boost your mental math speed.",
      skills: "Quantitative Speed, Calculation",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-12 gap-8">
        {/* Left Sidebar */}
        <aside className="col-span-12 lg:col-span-3">
          <div className="sticky top-20 bg-card p-4 rounded-lg shadow-sm border border-border">
            <h3 className="font-semibold text-foreground mb-4">Game Categories</h3>
            <nav className="space-y-1">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className={`block p-2 text-sm font-medium rounded-md transition-colors ${
                    category.active
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {category.name}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <section className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <div
                key={game.id}
                className="bg-card rounded-lg shadow-sm border border-border p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {game.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {game.description}
                  </p>
                  <div className="mt-4 text-xs text-muted-foreground">
                    <span className="font-semibold">Skills:</span> {game.skills}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedGame(game.id)}
                  className="mt-4 w-full bg-primary text-primary-foreground py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Play Now
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {selectedGame && (
        <GameModal
          gameId={selectedGame}
          onClose={() => setSelectedGame(null)}
        />
      )}
    </>
  );
};

export default Games;
