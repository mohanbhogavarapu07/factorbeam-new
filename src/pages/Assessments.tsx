import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";

const Assessments = () => {
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({});

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categories = [
    {
      id: "public-services",
      title: "Public Services",
      subcategories: ["UPSC CSE", "State PSCs", "Defence Exams"],
    },
    {
      id: "management",
      title: "Management (MBA)",
      subcategories: ["CAT", "GMAT"],
    },
  ];

  const tests = [
    {
      title: "UPSC Prelims 2025: Full Mock Test 1",
      details: "100 Questions | 120 Mins | 200 Marks",
      tags: ["GS Paper 1", "Full Syllabus"],
    },
    {
      title: "UPSC Prelims 2025: Full Mock Test 2",
      details: "100 Questions | 120 Mins | 200 Marks",
      tags: ["GS Paper 1", "Full Syllabus"],
    },
  ];

  const trendingTests = [
    "IBPS PO Prelims Mock",
    "SSC CGL Tier 1",
    "CAT 2024 Quant Sectional",
  ];

  return (
    <div className="grid grid-cols-12 gap-8">
      {/* Left Sidebar */}
      <aside className="col-span-12 lg:col-span-3">
        <div className="sticky top-20 bg-card p-4 rounded-lg shadow-sm border border-border">
          <h3 className="font-semibold text-foreground mb-4">Exam Categories</h3>
          <nav className="space-y-1">
            {categories.map((category) => (
              <div key={category.id}>
                <button
                  type="button"
                  onClick={() => toggleAccordion(category.id)}
                  className="flex items-center justify-between w-full p-2 text-sm font-medium text-left text-foreground rounded-md hover:bg-muted focus:outline-none transition-colors"
                >
                  <span>{category.title}</span>
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform ${
                      openAccordions[category.id] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openAccordions[category.id] && (
                  <div className="mt-1 pl-4 space-y-1">
                    {category.subcategories.map((sub, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block p-2 text-sm text-muted-foreground rounded-md hover:bg-muted hover:text-foreground transition-colors"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#"
              className="block p-2 text-sm font-medium text-left text-foreground rounded-md hover:bg-muted transition-colors"
            >
              STEM & Graduate
            </a>
            <a
              href="#"
              className="block p-2 text-sm font-medium text-left text-foreground rounded-md hover:bg-muted transition-colors"
            >
              Banking & Insurance
            </a>
            <a
              href="#"
              className="block p-2 text-sm font-medium text-left text-foreground rounded-md hover:bg-muted transition-colors"
            >
              Corporate & IT
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <section className="col-span-12 lg:col-span-6">
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              UPSC CSE Mock Tests
            </h1>
            <p className="text-muted-foreground mt-2">
              Practice with our full-syllabus mock tests for the upcoming Civil
              Services Examination.
            </p>
          </div>

          {tests.map((test, index) => (
            <div key={index} className="border-t border-border pt-6">
              <h2 className="text-xl font-semibold text-primary hover:underline">
                <a href="#" className="transition-colors">
                  {test.title}
                </a>
              </h2>
              <p className="text-sm text-muted-foreground mt-2">
                {test.details}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  {test.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant={tagIndex === 0 ? "default" : "secondary"}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button>Start Test</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Right Sidebar */}
      <aside className="col-span-12 lg:col-span-3">
        <div className="sticky top-20 bg-card p-4 rounded-lg shadow-sm border border-border">
          <h3 className="font-semibold text-foreground mb-4">Trending Tests</h3>
          <ul className="space-y-3">
            {trendingTests.map((test, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-sm text-primary hover:underline transition-colors"
                >
                  {test}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Assessments;
