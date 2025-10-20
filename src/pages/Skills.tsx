import { Button } from "@/components/ui/button";
import { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("technical");

  const categories = [
    { id: "technical", name: "Technical Skills" },
    { id: "language", name: "Language Skills" },
    { id: "cognitive", name: "Cognitive Drills" },
  ];

  const skillsByCategory = {
    technical: [
      { title: "Basic Python Quiz", description: "Test your Python fundamentals", level: "Beginner" },
      { title: "SQL Foundations Challenge", description: "Master database queries", level: "Intermediate" },
      { title: "JavaScript ES6+ Mastery", description: "Modern JavaScript concepts", level: "Intermediate" },
      { title: "React Components Deep Dive", description: "Component architecture patterns", level: "Advanced" },
    ],
    language: [
      { title: "English Grammar Essentials", description: "Core grammar rules and usage", level: "Beginner" },
      { title: "Reading Comprehension Pro", description: "Advanced reading strategies", level: "Advanced" },
      { title: "Vocabulary Builder", description: "Expand your word power", level: "All Levels" },
    ],
    cognitive: [
      { title: "Pattern Recognition", description: "Visual and logical patterns", level: "Intermediate" },
      { title: "Memory Training", description: "Enhance recall and retention", level: "All Levels" },
      { title: "Problem Solving Speed", description: "Quick analytical thinking", level: "Advanced" },
    ],
  };

  const currentSkills = skillsByCategory[activeCategory as keyof typeof skillsByCategory];

  return (
    <div className="grid grid-cols-12 gap-8">
      <aside className="col-span-12 lg:col-span-3">
        <div className="sticky top-24 bg-card p-4 rounded-lg shadow-sm border border-border">
          <h3 className="font-semibold text-foreground mb-2">Skill Categories</h3>
          <nav className="space-y-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`block w-full text-left p-2 text-sm font-medium rounded-md transition-colors ${
                  activeCategory === category.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {category.name}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      <section className="col-span-12 lg:col-span-9">
        <h1 className="text-3xl font-bold text-foreground mb-6">
          {categories.find(c => c.id === activeCategory)?.name}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-5 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {skill.description}
                  </p>
                  <span className="inline-block mt-2 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {skill.level}
                  </span>
                </div>
              </div>
              <Button className="mt-4 w-full" variant="outline" size="sm">
                Start Challenge
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
