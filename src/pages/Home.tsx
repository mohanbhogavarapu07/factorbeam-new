import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const categories = [
    {
      title: "UPSC Civil Services",
      description: "Full-length mock tests for Prelims and Mains.",
    },
    {
      title: "Banking Exams (IBPS, SBI)",
      description: "Practice tests for PO, Clerk, and SO exams.",
    },
    {
      title: "GATE",
      description: "Subject-wise tests for all major engineering branches.",
    },
    {
      title: "Management (CAT / GMAT)",
      description: "Sharpen your Quant, Verbal, and DILR skills.",
    },
  ];

  const games = [
    {
      title: "Vocab Vortex",
      description: "Expand your vocabulary in 60 seconds.",
    },
    {
      title: "Logic Leap",
      description: "Solve quick logical puzzles and syllogisms.",
    },
  ];

  return (
    <div className="space-y-12">
      <section className="text-center bg-card p-12 rounded-lg shadow-sm border border-border">
        <h1 className="text-4xl font-bold text-foreground">
          Your Gateway to Success
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore assessments, sharpen your skills, and land your dream career.
        </p>
        <div className="mt-8 max-w-xl mx-auto">
          <input
            type="search"
            placeholder="Search for an exam, topic, or game..."
            className="w-full px-5 py-3 border border-input rounded-full focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Popular Assessment Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-foreground">{category.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {category.description}
              </p>
              <a
                href="#"
                className="text-sm text-primary hover:text-accent font-medium mt-4 inline-flex items-center gap-1"
              >
                View All <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Train Your Brain
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <h3 className="font-semibold text-foreground">{game.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {game.description}
                </p>
                <Button className="mt-4 w-full">Play Now</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
