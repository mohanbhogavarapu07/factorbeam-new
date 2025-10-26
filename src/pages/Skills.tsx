import { Button } from "@/components/ui/button";
import { useState } from "react";
import SEO from "@/components/SEO";

const Skills = () => {
  const skillsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Skill-Builder Quizzes",
    "description": "10-minute micro-assessments to test your skills in Python, SQL, Excel, and more",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Quiz",
          "name": "Basic Python Quiz",
          "description": "Test your Python programming fundamentals",
          "educationalLevel": "Beginner to Intermediate",
          "timeRequired": "PT10M"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Quiz",
          "name": "SQL Foundations Challenge",
          "description": "Assess your SQL query and database skills",
          "educationalLevel": "Beginner to Intermediate",
          "timeRequired": "PT10M"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Quiz",
          "name": "Advanced Grammar Test",
          "description": "Test your English grammar and writing skills",
          "educationalLevel": "Intermediate to Advanced",
          "timeRequired": "PT10M"
        }
      }
    ]
  };
  const [activeCategory, setActiveCategory] = useState<"technical" | "language" | "cognitive">("technical");

  const technicalSkills = [
    {
      id: 1,
      title: "Basic Python Quiz",
      description: "Test your understanding of Python fundamentals, syntax, and basic data structures.",
      duration: "10 min",
      questions: 15,
      level: "Beginner",
    },
    {
      id: 2,
      title: "SQL Foundations Challenge",
      description: "Master SQL basics including SELECT, JOIN, and aggregate functions.",
      duration: "12 min",
      questions: 20,
      level: "Beginner",
    },
    {
      id: 3,
      title: "JavaScript Essentials",
      description: "Cover core JavaScript concepts, ES6+ features, and async programming.",
      duration: "15 min",
      questions: 20,
      level: "Intermediate",
    },
    {
      id: 4,
      title: "Data Structures Deep Dive",
      description: "Test your knowledge of arrays, linked lists, trees, and graphs.",
      duration: "20 min",
      questions: 25,
      level: "Advanced",
    },
    {
      id: 5,
      title: "Algorithm Analysis",
      description: "Evaluate complexity, sorting, searching, and dynamic programming concepts.",
      duration: "25 min",
      questions: 30,
      level: "Advanced",
    },
    {
      id: 6,
      title: "Web Development Basics",
      description: "HTML, CSS, and responsive design fundamentals.",
      duration: "10 min",
      questions: 15,
      level: "Beginner",
    },
  ];

  const languageSkills = [
    {
      id: 1,
      title: "Reading Comprehension Sprint",
      description: "Read passages and answer inference-based questions quickly.",
      duration: "15 min",
      questions: 10,
      level: "Intermediate",
    },
    {
      id: 2,
      title: "Vocabulary Builder",
      description: "Test your knowledge of synonyms, antonyms, and contextual word usage.",
      duration: "10 min",
      questions: 20,
      level: "Beginner",
    },
    {
      id: 3,
      title: "Grammar & Syntax Challenge",
      description: "Identify and correct grammatical errors in complex sentences.",
      duration: "12 min",
      questions: 15,
      level: "Intermediate",
    },
    {
      id: 4,
      title: "Para Jumbles Master",
      description: "Reorder jumbled sentences to form coherent paragraphs.",
      duration: "15 min",
      questions: 10,
      level: "Advanced",
    },
  ];

  const cognitiveDrills = [
    {
      id: 1,
      title: "Pattern Recognition",
      description: "Identify patterns in sequences of numbers, shapes, and letters.",
      duration: "10 min",
      questions: 15,
      level: "Beginner",
    },
    {
      id: 2,
      title: "Logical Deduction",
      description: "Solve syllogisms and logical reasoning problems.",
      duration: "15 min",
      questions: 20,
      level: "Intermediate",
    },
    {
      id: 3,
      title: "Spatial Reasoning",
      description: "Test your ability to visualize and manipulate 3D objects.",
      duration: "12 min",
      questions: 15,
      level: "Intermediate",
    },
    {
      id: 4,
      title: "Mental Math Speed",
      description: "Solve arithmetic problems quickly without a calculator.",
      duration: "8 min",
      questions: 25,
      level: "Beginner",
    },
  ];

  const getCurrentSkills = () => {
    switch (activeCategory) {
      case "technical":
        return technicalSkills;
      case "language":
        return languageSkills;
      case "cognitive":
        return cognitiveDrills;
      default:
        return technicalSkills;
    }
  };

  const getCategoryTitle = () => {
    switch (activeCategory) {
      case "technical":
        return "Technical Skills";
      case "language":
        return "Language Skills";
      case "cognitive":
        return "Cognitive Drills";
      default:
        return "Technical Skills";
    }
  };

  return (
    <div className="space-y-8">
      <SEO
        title="Skill Builders - Quick Skill Assessment Quizzes"
        description="Take 10-minute micro-assessments to test your skills in Python, SQL, Excel, Advanced Grammar, and more. Build and validate your professional skills with FactorBeam's Skill Builders."
        canonicalUrl="https://factorbeam.com/skills"
        schema={skillsSchema}
        keywords="skill assessment, Python quiz, SQL test, Excel quiz, grammar test, skill builder, programming quiz, technical skills assessment"
      />
      
      <div className="grid grid-cols-12 gap-8">
        <aside className="col-span-12 lg:col-span-3">
        <div className="sticky top-24 bg-card p-4 rounded-lg shadow-sm border border-border">
          <h3 className="font-semibold text-foreground mb-4">Skill Categories</h3>
          <nav className="space-y-1">
            <button
              onClick={() => setActiveCategory("technical")}
              className={`block w-full text-left p-3 text-sm font-medium rounded-md transition-colors ${
                activeCategory === "technical"
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveCategory("language")}
              className={`block w-full text-left p-3 text-sm font-medium rounded-md transition-colors ${
                activeCategory === "language"
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              Language Skills
            </button>
            <button
              onClick={() => setActiveCategory("cognitive")}
              className={`block w-full text-left p-3 text-sm font-medium rounded-md transition-colors ${
                activeCategory === "cognitive"
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              Cognitive Drills
            </button>
          </nav>
        </div>
      </aside>

      <section className="col-span-12 lg:col-span-9">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground">{getCategoryTitle()}</h1>
          <p className="mt-2 text-muted-foreground">
            {activeCategory === "technical" && "Master essential programming languages, frameworks, and technical concepts with focused micro-assessments."}
            {activeCategory === "language" && "Enhance your verbal abilities with targeted exercises in comprehension, vocabulary, and grammar."}
            {activeCategory === "cognitive" && "Sharpen your mental agility with quick drills in logic, reasoning, and problem-solving."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {getCurrentSkills().map((skill) => (
            <div
              key={skill.id}
              className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-foreground text-lg">{skill.title}</h3>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    skill.level === "Beginner"
                      ? "bg-primary/10 text-primary"
                      : skill.level === "Intermediate"
                      ? "bg-accent text-accent-foreground"
                      : "bg-destructive/10 text-destructive"
                  }`}
                >
                  {skill.level}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>{skill.questions} Questions</span>
                <span>•</span>
                <span>{skill.duration}</span>
              </div>
              <Button className="w-full">Start Quiz</Button>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4">Why Practice Skill-Builders?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Focused Practice</h4>
              <p className="text-sm text-muted-foreground">
                Short, targeted assessments that help you master specific skills without overwhelming time commitments.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Instant Feedback</h4>
              <p className="text-sm text-muted-foreground">
                Get immediate results with detailed explanations to understand your mistakes and learn effectively.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Progressive Learning</h4>
              <p className="text-sm text-muted-foreground">
                Move from beginner to advanced levels systematically, building a strong foundation in each skill area.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Skills;
