import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const exploreCards = [
    {
      title: "The Discovery Engine",
      description: "Start here. Take our psychometric tests to find your innate strengths.",
      cta: "Begin Discovery",
      link: "/discovery",
    },
    {
      title: "GATE Exam Prep",
      description: "Validate your skills with our complete GATE preparation hub.",
      cta: "Start Prep",
      link: "/gate-prep",
    },
    {
      title: "Skill-Builders",
      description: "Take 10-minute micro-assessments in Python, SQL, and more.",
      cta: "View Skills",
      link: "/skills",
    },
    {
      title: "Practice Arcade",
      description: "Train your brain with our 'Skill-Trainer' games.",
      cta: "Play Games",
      link: "/games",
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
            <Button size="lg" className="text-lg px-8">
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
          {exploreCards.map((card, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-foreground">{card.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {card.description}
              </p>
              <Link
                to={card.link}
                className="text-sm text-primary hover:text-accent font-medium mt-4 inline-flex items-center gap-1"
              >
                {card.cta} <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
