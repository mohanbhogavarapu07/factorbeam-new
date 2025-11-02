import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const Home = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is FactorBeam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FactorBeam is a comprehensive platform that helps you discover your ideal career path using psychometric tests, validate your readiness with exam prep like GATE, and master new skills with micro-assessments and engaging brain-training games."
        }
      },
      {
        "@type": "Question",
        "name": "Are the discovery tests free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our core Discovery Engine tests, including the Career Interest Compass and Cognitive Skills Profile, are completely free to help you find your path."
        }
      },
      {
        "@type": "Question",
        "name": "What is a Skill-Builder?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Skill-Builder is a 10-minute micro-assessment designed to test your knowledge in specific, high-demand skills like Python, SQL, or Advanced Grammar. These targeted quizzes help you identify strengths and areas for improvement."
        }
      },
      {
        "@type": "Question",
        "name": "How do brain training games help my career?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Skill-Trainer games like Vocab Vortex and Logic Leap help you build cognitive abilities that are essential for professional success, including vocabulary, logical reasoning, and problem-solving skills."
        }
      }
    ]
  };

  const games = [
    {
      title: "Vocab Vortex",
      description: "Expand your vocabulary in 60 seconds.",
    },
    {
      title: "Logic Leap",
      description: "Solve quick logical puzzles and syllogisms.",
    },
    {
      title: "Data Dash",
      description: "Interpret charts and graphs against the clock.",
    },
    {
      title: "Quick Calc",
      description: "Boost your mental math speed in 90 seconds.",
    },
  ];

  return (
    <div className="space-y-12">
      <SEO
        title="FactorBeam: Find Your Path, Master Your Skills"
        description="FactorBeam is a career guidance and skill mastery platform. Use our free psychometric tests to find your path, and our exam prep and skill games to succeed."
        canonicalUrl="https://factorbeam.com"
        schema={faqSchema}
        keywords="FactorBeam, career guidance, psychometric test, GATE prep, skill assessment, brain games, Python quiz, SQL quiz, career aptitude test, skill builder"
      />

      <section className="text-center bg-card p-12 rounded-lg shadow-sm border border-border">
        <h1 className="text-4xl font-bold text-foreground">
          Find Your Path. Master Your Skills.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We don't just prepare you for an exam. We help you discover your true potential and master the skills you need to succeed.
        </p>
        <div className="mt-8">
          <Link to="/discovery" title="Start free psychometric discovery test to find your career path">
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
          <article className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-foreground">The Discovery Engine</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Start here. Take our psychometric tests to find your innate strengths.
            </p>
            <Link 
              to="/discovery" 
              title="Take free psychometric tests to discover your career strengths and interests"
              className="text-sm text-primary hover:text-primary/80 font-medium mt-4 inline-flex items-center gap-1"
            >
              Begin Discovery <ArrowRight className="h-3 w-3" />
            </Link>
          </article>
          
          <article className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-foreground">GATE Exam Prep</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Validate your skills with our complete GATE preparation hub.
            </p>
            <Link 
              to="/gate-prep" 
              title="Access GATE exam mock tests and preparation materials"
              className="text-sm text-primary hover:text-primary/80 font-medium mt-4 inline-flex items-center justify-center gap-1"
            >
              Start Prep <ArrowRight className="h-3 w-3" />
            </Link>
          </article>
          
          {/* <article className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              {/* <h3 className="font-semibold text-foreground mb-2">Skill-Builders</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Coming Soon
              </p>
              <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                <span>In Development</span>
              </div> */}
            {/* </div> */}
          {/* </article> */} 
          
          <article className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-foreground">Practice Arcade</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Train your brain with our 'Skill-Trainer' games.
            </p>
            <Link 
              to="/games" 
              title="Play brain training games like Vocab Vortex and Logic Leap"
              className="text-sm text-primary hover:text-primary/80 font-medium mt-4 inline-flex items-center gap-1"
            >
              Play Games <ArrowRight className="h-3 w-3" />
            </Link>
          </article>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Featured Brain Training Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <article
              key={index}
              className="bg-card rounded-lg shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <h3 className="font-semibold text-foreground">{game.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {game.description}
                </p>
                <Link to="/games" title={`Play ${game.title} brain training game`}>
                  <Button className="mt-4 w-full">Play Now</Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-card p-8 rounded-lg shadow-sm border border-border">
        <h2 className="text-2xl font-semibold text-foreground mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <article>
            <h3 className="font-semibold text-foreground text-lg">What is FactorBeam?</h3>
            <p className="text-muted-foreground mt-2">
              FactorBeam is a comprehensive platform that helps you discover your ideal career path using psychometric tests, 
              validate your readiness with exam prep like GATE, and master new skills with micro-assessments and engaging brain-training games.
            </p>
          </article>
          <article>
            <h3 className="font-semibold text-foreground text-lg">Are the discovery tests free?</h3>
            <p className="text-muted-foreground mt-2">
              Yes, our core Discovery Engine tests, including the Career Interest Compass and Cognitive Skills Profile, 
              are completely free to help you find your path.
            </p>
          </article>
          <article>
            <h3 className="font-semibold text-foreground text-lg">What is a Skill-Builder?</h3>
            <p className="text-muted-foreground mt-2">
              A Skill-Builder is a 10-minute micro-assessment designed to test your knowledge in specific, high-demand skills 
              like Python, SQL, or Advanced Grammar. These targeted quizzes help you identify strengths and areas for improvement.
            </p>
          </article>
          <article>
            <h3 className="font-semibold text-foreground text-lg">How do brain training games help my career?</h3>
            <p className="text-muted-foreground mt-2">
              Our Skill-Trainer games like Vocab Vortex and Logic Leap help you build cognitive abilities that are essential 
              for professional success, including vocabulary, logical reasoning, and problem-solving skills.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Home;
