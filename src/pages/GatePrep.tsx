import { Button } from "@/components/ui/button";
import { useState } from "react";

const GatePrep = () => {
  const [activeTab, setActiveTab] = useState("full-mock");

  const fullMockTests = [
    { title: "GATE 2026: Full Mock Test 1 (CS)", duration: "3 hours", questions: "65" },
    { title: "GATE 2026: Full Mock Test 2 (CS)", duration: "3 hours", questions: "65" },
    { title: "GATE 2026: Full Mock Test 3 (EC)", duration: "3 hours", questions: "65" },
  ];

  const sectionalTests = [
    { title: "Digital Logic - Practice Set 1", duration: "45 mins", questions: "15" },
    { title: "Data Structures - Advanced", duration: "60 mins", questions: "20" },
    { title: "Algorithms - Comprehensive", duration: "60 mins", questions: "20" },
  ];

  const tests = activeTab === "full-mock" ? fullMockTests : sectionalTests;

  return (
    <div className="space-y-8">
      <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
        <h1 className="text-3xl font-bold text-foreground">GATE Preparation Hub</h1>
        <p className="mt-2 text-muted-foreground">
          Your complete resource for mastering the Graduate Aptitude Test in Engineering.
        </p>
      </div>

      <div>
        <div className="border-b border-border">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("full-mock")}
              className={`${
                activeTab === "full-mock"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
            >
              Full Mock Tests
            </button>
            <button
              onClick={() => setActiveTab("sectional")}
              className={`${
                activeTab === "sectional"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
            >
              Sectional Tests
            </button>
          </nav>
        </div>

        <div className="mt-6 space-y-4">
          {tests.map((test, index) => (
            <div
              key={index}
              className="bg-card p-5 rounded-lg shadow-sm border border-border flex items-center justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="font-medium text-foreground">{test.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {test.duration} • {test.questions} questions
                </p>
              </div>
              <Button>Start Test</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GatePrep;
