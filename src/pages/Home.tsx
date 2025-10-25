import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
          Find Your Path. Master Your Skills.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We don't just prepare you for an exam. We help you discover your true potential and master the skills you need to succeed.
        </p>
        <div className="mt-8">
          <Link to="/discovery">
            <Button size="lg" className="text-lg">
              Start Your 5-Minute Discovery Test (Free)
            </Button>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Explore Our Platform
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-foreground">The Discovery Engine</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Start here. Take our psychometric tests to find your innate strengths.
            </p>
            <Link to="/discovery" className="text-sm text-primary hover:text-primary/80 font-medium mt-4 inline-flex items-center gap-1">
              Begin Discovery <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-foreground">GATE Exam Prep</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Validate your skills with our complete GATE preparation hub.
            </p>
            <Link to="/gate-prep" className="text-sm text-primary hover:text-primary/80 font-medium mt-4 inline-flex items-center gap-1">
              Start Prep <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-foreground">Skill-Builders</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Take 10-minute micro-assessments in Python, SQL, and more.
            </p>
            <Link to="/skills" className="text-sm text-primary hover:text-primary/80 font-medium mt-4 inline-flex items-center gap-1">
              View Skills <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-foreground">Practice Arcade</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Train your brain with our 'Skill-Trainer' games.
            </p>
            <Link to="/games" className="text-sm text-primary hover:text-primary/80 font-medium mt-4 inline-flex items-center gap-1">
              Play Games <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Featured Brain Training Games
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
                <Link to="/games">
                  <Button className="mt-4 w-full">Play Now</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
