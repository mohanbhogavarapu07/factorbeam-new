import { useState } from "react";
import GameModal from "@/components/GameModal";
import SEO from "@/components/SEO";

const Games = () => {
  const gamesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Practice Arcade Games",
    "description": "Brain training games and skill-trainer games for cognitive development",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Game",
          "name": "Grid Master",
          "description": "Pattern recognition and spatial reasoning game",
          "gameLocationType": "WebApplication"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Game",
          "name": "Sentence Weaver",
          "description": "Grammar and sentence construction game",
          "gameLocationType": "WebApplication"
        }
      }
    ]
  };
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
    {
      id: "gridMaster",
      title: "Grid Master",
      description: "Solve classic seating arrangement and logic grid puzzles by placing items according to a set of rules.",
      skills: "Spatial Reasoning, Constraint Satisfaction",
    },
    {
      id: "sentenceWeaver",
      title: "Sentence Weaver",
      description: "Unscramble a set of jumbled sentences to form a coherent paragraph. A true test of verbal logic.",
      skills: "Reading Comprehension, Logical Sequencing",
    },
    {
      id: "ratioRacer",
      title: "Ratio Racer",
      description: "Solve problems involving percentages, ratios, and proportions as quickly as possible.",
      skills: "Quantitative Aptitude, Proportional Reasoning",
    },
  ];

  return (
    <>
      <SEO
        title="Practice Arcade - Brain Training Games"
        description="Train your brain with skill-trainer games like Vocab Vortex and Logic Leap. Engaging brain training games that make learning fun and build cognitive skills."
        canonicalUrl="https://factorbeam.com/games"
        schema={gamesSchema}
        keywords="brain training games, cognitive games, vocabulary games, logic games, skill trainer, educational games, learning games"
      />
      
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
