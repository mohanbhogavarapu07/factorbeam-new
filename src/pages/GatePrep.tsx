import { Button } from "@/components/ui/button";
import { useState } from "react";

const GatePrep = () => {
  const [activeTab, setActiveTab] = useState<"mock" | "sectional" | "pyq">("mock");

  const mockTests = [
    { id: 1, title: "GATE 2026: Full Mock Test 1 (CS)", questions: 65, duration: "180 min", difficulty: "Medium" },
    { id: 2, title: "GATE 2026: Full Mock Test 2 (CS)", questions: 65, duration: "180 min", difficulty: "Medium" },
    { id: 3, title: "GATE 2026: Full Mock Test 3 (CS)", questions: 65, duration: "180 min", difficulty: "Hard" },
    { id: 4, title: "GATE 2026: Full Mock Test 4 (EC)", questions: 65, duration: "180 min", difficulty: "Medium" },
    { id: 5, title: "GATE 2026: Full Mock Test 5 (ME)", questions: 65, duration: "180 min", difficulty: "Hard" },
  ];

  const sectionalTests = [
    { id: 1, title: "Data Structures & Algorithms", questions: 20, duration: "45 min", topics: "Arrays, Trees, Graphs" },
    { id: 2, title: "Operating Systems", questions: 15, duration: "30 min", topics: "Processes, Memory, Scheduling" },
    { id: 3, title: "Database Management", questions: 15, duration: "30 min", topics: "SQL, Normalization, Transactions" },
    { id: 4, title: "Computer Networks", questions: 15, duration: "30 min", topics: "Protocols, OSI Model, TCP/IP" },
    { id: 5, title: "Digital Logic", questions: 15, duration: "30 min", topics: "Boolean Algebra, Gates, Circuits" },
  ];

  const pyqSets = [
    { id: 1, title: "GATE CS 2024 - Complete Paper", questions: 65, duration: "180 min", year: 2024 },
    { id: 2, title: "GATE CS 2023 - Complete Paper", questions: 65, duration: "180 min", year: 2023 },
    { id: 3, title: "GATE CS 2022 - Complete Paper", questions: 65, duration: "180 min", year: 2022 },
    { id: 4, title: "GATE CS 2021 - Complete Paper", questions: 65, duration: "180 min", year: 2021 },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
        <h1 className="text-3xl font-bold text-foreground">GATE Preparation Hub</h1>
        <p className="mt-2 text-muted-foreground">
          Your complete resource for mastering the Graduate Aptitude Test in Engineering. 
          Practice with full-length mocks, sectional tests, and previous year questions.
        </p>
      </div>

      <div className="bg-card rounded-lg shadow-sm border border-border">
        <div className="border-b border-border">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab("mock")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "mock"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              Full Mock Tests
            </button>
            <button
              onClick={() => setActiveTab("sectional")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "sectional"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              Sectional Tests
            </button>
            <button
              onClick={() => setActiveTab("pyq")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "pyq"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              Previous Year Questions
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === "mock" && (
            <div className="space-y-4">
              {mockTests.map((test) => (
                <div
                  key={test.id}
                  className="bg-background p-5 rounded-lg border border-border flex items-center justify-between hover:shadow-md transition-shadow"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{test.title}</h3>
                    <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{test.questions} Questions</span>
                      <span>•</span>
                      <span>{test.duration}</span>
                      <span>•</span>
                      <span className={test.difficulty === "Hard" ? "text-destructive" : "text-primary"}>
                        {test.difficulty}
                      </span>
                    </div>
                  </div>
                  <Button>Start Test</Button>
                </div>
              ))}
            </div>
          )}

          {activeTab === "sectional" && (
            <div className="space-y-4">
              {sectionalTests.map((test) => (
                <div
                  key={test.id}
                  className="bg-background p-5 rounded-lg border border-border flex items-center justify-between hover:shadow-md transition-shadow"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{test.title}</h3>
                    <div className="mt-2 text-sm text-muted-foreground">
                      <p>{test.questions} Questions • {test.duration}</p>
                      <p className="mt-1">Topics: {test.topics}</p>
                    </div>
                  </div>
                  <Button>Start Test</Button>
                </div>
              ))}
            </div>
          )}

          {activeTab === "pyq" && (
            <div className="space-y-4">
              {pyqSets.map((test) => (
                <div
                  key={test.id}
                  className="bg-background p-5 rounded-lg border border-border flex items-center justify-between hover:shadow-md transition-shadow"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{test.title}</h3>
                    <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{test.questions} Questions</span>
                      <span>•</span>
                      <span>{test.duration}</span>
                      <span>•</span>
                      <span className="text-primary">Year {test.year}</span>
                    </div>
                  </div>
                  <Button>Start Test</Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-2">100+ Mock Tests</h3>
          <p className="text-sm text-muted-foreground">
            Comprehensive coverage of all GATE branches with detailed solutions and performance analytics.
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-2">Expert Solutions</h3>
          <p className="text-sm text-muted-foreground">
            Every question comes with step-by-step explanations from GATE toppers and experienced faculty.
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-2">Performance Tracking</h3>
          <p className="text-sm text-muted-foreground">
            Track your progress with detailed analytics, identify weak areas, and improve strategically.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GatePrep;
