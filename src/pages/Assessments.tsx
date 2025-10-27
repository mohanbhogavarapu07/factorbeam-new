import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Trophy, Clock, BookOpen, Target } from "lucide-react";
import TestInterface, { TestResults } from "@/components/TestInterface";
import ResultsPage from "@/components/ResultsPage";
import { upscQuestions, catQuestions, gateQuestions, sscQuestions } from "@/data/assessments";

type TestState = "list" | "test" | "results";
type TestType = "upsc" | "cat" | "gate" | "ssc" | null;

const Assessments = () => {
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({});
  const [testState, setTestState] = useState<TestState>("list");
  const [currentTest, setCurrentTest] = useState<TestType>(null);
  const [testResults, setTestResults] = useState<TestResults | null>(null);

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

  const assessmentTests = [
    {
      id: "upsc" as TestType,
      title: "UPSC CSE Prelims Mock Test",
      description: "Comprehensive mock test covering General Studies Paper 1",
      details: "10 Questions | 20 Mins | 20 Marks",
      tags: ["Polity", "History", "Geography", "Environment"],
      icon: BookOpen,
      difficulty: "Hard",
      attempts: "15,234",
    },
    {
      id: "cat" as TestType,
      title: "CAT Mock Test 2025",
      description: "Full-length MBA entrance preparation test",
      details: "10 Questions | 30 Mins | 30 Marks",
      tags: ["Quant", "Verbal", "Logical Reasoning"],
      icon: Target,
      difficulty: "Hard",
      attempts: "23,456",
    },
    {
      id: "gate" as TestType,
      title: "GATE Computer Science Mock",
      description: "Complete GATE CS syllabus coverage",
      details: "10 Questions | 15 Mins | 17 Marks",
      tags: ["Data Structures", "Algorithms", "OS", "DBMS"],
      icon: Trophy,
      difficulty: "Hard",
      attempts: "18,890",
    },
    {
      id: "ssc" as TestType,
      title: "SSC CGL Tier 1 Mock Test",
      description: "Practice test for SSC Combined Graduate Level",
      details: "10 Questions | 15 Mins | 20 Marks",
      tags: ["Reasoning", "Quant", "English", "GK"],
      icon: Clock,
      difficulty: "Medium",
      attempts: "31,567",
    },
  ];

  const getQuestions = (testId: TestType) => {
    switch (testId) {
      case "upsc":
        return upscQuestions;
      case "cat":
        return catQuestions;
      case "gate":
        return gateQuestions;
      case "ssc":
        return sscQuestions;
      default:
        return [];
    }
  };

  const getTestName = (testId: TestType) => {
    const test = assessmentTests.find((t) => t.id === testId);
    return test?.title || "";
  };

  const getDuration = (testId: TestType) => {
    switch (testId) {
      case "upsc":
        return 20;
      case "cat":
        return 30;
      case "gate":
        return 15;
      case "ssc":
        return 15;
      default:
        return 20;
    }
  };

  const handleStartTest = (testId: TestType) => {
    setCurrentTest(testId);
    setTestState("test");
  };

  const handleTestComplete = (results: TestResults) => {
    setTestResults(results);
    setTestState("results");
  };

  const handleRetake = () => {
    setTestState("test");
  };

  const handleBackToList = () => {
    setTestState("list");
    setCurrentTest(null);
    setTestResults(null);
  };

  if (testState === "test" && currentTest) {
    return (
      <TestInterface
        testName={getTestName(currentTest)}
        questions={getQuestions(currentTest)}
        duration={getDuration(currentTest)}
        onComplete={handleTestComplete}
        onExit={handleBackToList}
      />
    );
  }

  if (testState === "results" && testResults && currentTest) {
    return (
      <ResultsPage
        testName={getTestName(currentTest)}
        results={testResults}
        onRetake={handleRetake}
        onHome={handleBackToList}
      />
    );
  }

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
      <section className="col-span-12 lg:col-span-9">
        <div className="space-y-6">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold mb-3">
              World-Class Assessment Platform
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Benchmark your preparation with our meticulously crafted mock tests.
              Each assessment is designed by experts to mirror actual exam patterns.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm text-blue-100">Test Takers</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm text-blue-100">Accuracy</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">4</div>
                <div className="text-sm text-blue-100">Elite Tests</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-lg text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-blue-100">Available</div>
              </div>
            </div>
          </div>

          {/* Assessment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {assessmentTests.map((test) => {
              const Icon = test.icon;
              return (
                <div
                  key={test.id}
                  className="bg-card rounded-xl shadow-md border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge
                        variant={test.difficulty === "Hard" ? "destructive" : "secondary"}
                      >
                        {test.difficulty}
                      </Badge>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {test.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 min-h-[48px]">
                      {test.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{test.details}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Trophy className="w-4 h-4" />
                        <span>{test.attempts} attempts</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {test.tags.map((tag, index) => (
                        <Badge key={index} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      onClick={() => handleStartTest(test.id)}
                      className="w-full group-hover:bg-primary group-hover:scale-105 transition-all"
                      size="lg"
                    >
                      Start Assessment
                    </Button>
                  </div>
                  
                  <div className="bg-muted px-6 py-3 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">
                      Detailed analysis • Solutions included • Percentile ranking
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Features Section */}
          <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Why Our Assessments Are World-Class
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Expert Crafted</h3>
                <p className="text-sm text-muted-foreground">
                  Each question is designed by subject matter experts with years of
                  experience in competitive exams.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Detailed Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Get comprehensive performance reports with subject-wise analysis and
                  improvement suggestions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Complete Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  Every question comes with detailed explanations to help you learn from
                  your mistakes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Assessments;
