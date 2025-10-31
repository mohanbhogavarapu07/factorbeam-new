import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const Discovery = () => {
  const discoverySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Discovery Engine Assessments",
    "description": "Free psychometric and career assessment tests to discover your strengths and ideal career path",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Quiz",
          "name": "Career Interest Compass (RIASEC)",
          "description": "Discover your career interests using the Holland Code framework",
          "educationalLevel": "All levels",
          "timeRequired": "PT15M"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Quiz",
          "name": "Cognitive Skills Profile",
          "description": "Measure your core abilities in Logic, Verbal, and Quantitative reasoning",
          "educationalLevel": "All levels",
          "timeRequired": "PT20M"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Quiz",
          "name": "Personality & Work Style",
          "description": "Understand your work style and personality traits",
          "educationalLevel": "All levels",
          "timeRequired": "PT12M"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Quiz",
          "name": "Learning Style Analyzer",
          "description": "Identify how you learn best to optimize your study strategies",
          "educationalLevel": "All levels",
          "timeRequired": "PT10M"
        }
      }
    ]
  };

  return (
    <div className="space-y-8">
      <SEO
        title="Discovery Engine - Free Career & Psychometric Tests"
        description="Find your true potential with free psychometric, career, and personality tests. Discover your strengths, interests, and ideal career path with FactorBeam's Discovery Engine."
        canonicalUrl="https://factorbeam.com/discovery"
        schema={discoverySchema}
        keywords="career test, psychometric test, personality assessment, career guidance, RIASEC test, cognitive assessment, career aptitude test, free career test"
      />
      
      <header className="bg-card p-8 rounded-lg shadow-sm border border-border">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground">The Discovery Engine</h1>
          <p className="mt-2 text-muted-foreground">
            Start your journey here. These assessments help you understand your innate strengths, 
            interests, and work style to find the perfect career path.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-foreground">Career Interest Compass</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Discover what you love to do. Are you a Thinker, Creator, or Persuader?
          </p>
          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
            <p><strong>Duration:</strong> 15 minutes</p>
            <p><strong>Questions:</strong> 60 situational scenarios</p>
            <p><strong>Output:</strong> Your top 3 career clusters with detailed profiles</p>
          </div>
          <Link to="/discovery/career" className="block">
            <Button className="mt-4 w-full">Start Assessment</Button>
          </Link>
        </article>

        <article className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-foreground">Cognitive Skills Profile</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Measure your core abilities in Logic, Verbal, and Quantitative reasoning.
          </p>
          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
            <p><strong>Duration:</strong> 20 minutes</p>
            <p><strong>Sections:</strong> Logical Reasoning, Verbal Ability, Quantitative Aptitude</p>
            <p><strong>Output:</strong> Detailed score breakdown with percentile rankings</p>
          </div>
          <Link to="/discovery/cognitive" className="block">
            <Button className="mt-4 w-full">Start Assessment</Button>
          </Link>
        </article>

        <article className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-foreground">Personality & Work Style</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Understand your work preferences, communication style, and team dynamics.
          </p>
          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
            <p><strong>Duration:</strong> 12 minutes</p>
            <p><strong>Questions:</strong> 48 personality traits evaluation</p>
            <p><strong>Output:</strong> Your personality type with career recommendations</p>
          </div>
          <Link to="/discovery/personality" className="block">
            <Button className="mt-4 w-full">Start Assessment</Button>
          </Link>
        </article>

        <article className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-foreground">Learning Style Analyzer</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Identify how you learn best to optimize your study strategies.
          </p>
          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
            <p><strong>Duration:</strong> 10 minutes</p>
            <p><strong>Questions:</strong> 40 learning preference scenarios</p>
            <p><strong>Output:</strong> Your primary and secondary learning styles</p>
          </div>
          <Link to="/discovery/learning-preference" className="block">
            <Button className="mt-4 w-full">Start Assessment</Button>
          </Link>
        </article>
      </div>

      <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Why Take Discovery Assessments?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Self-Awareness</h4>
            <p className="text-sm text-muted-foreground">
              Gain deep insights into your natural strengths, interests, and preferences.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Career Clarity</h4>
            <p className="text-sm text-muted-foreground">
              Get personalized career recommendations aligned with your profile.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Strategic Planning</h4>
            <p className="text-sm text-muted-foreground">
              Make informed decisions about your education and career path.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discovery;
