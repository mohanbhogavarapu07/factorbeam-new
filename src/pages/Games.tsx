import { Button } from "@/components/ui/button";

const Games = () => {
  const categories = [
    { name: "All Games", active: true },
    { name: "Logic & Puzzles", active: false },
    { name: "Verbal Ability", active: false },
    { name: "Quantitative Speed", active: false },
  ];

  const games = [
    {
      title: "Vocab Vortex",
      description:
        "Expand your vocabulary with this 60-second synonym matching challenge.",
    },
    {
      title: "Logic Leap",
      description:
        "Solve as many syllogisms and logical puzzles as you can against the clock.",
    },
    {
      title: "Data Dash",
      description: "Interpret charts and data points with lightning speed.",
    },
    {
      title: "Pattern-Mind",
      description:
        "Identify the next number or shape in the sequence. A pure logic test.",
    },
  ];

  return (
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
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <h3 className="font-semibold text-foreground text-lg">
                  {game.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {game.description}
                </p>
                <Button className="mt-6 w-full">Play Now</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Games;
