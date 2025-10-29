import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import SEO from "@/components/SEO";
import { loadGateAssessments, loadPYQAssessments, MockTest, loadGateAssessmentData, loadPYQAssessmentData } from "@/data/gateAssessments";
import GateAssessment from "@/components/GateAssessment";
import GateResults from "@/components/GateResults";

const GatePrep = () => {
  const gateSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "GATE Preparation Hub",
    "description": "Complete resource for GATE (Graduate Aptitude Test in Engineering) mock tests and exam preparation",
    "provider": {
      "@type": "Organization",
      "name": "FactorBeam"
    },
    "coursePrerequisites": "Engineering undergraduate or graduate students",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT3H"
    }
  };
  const [activeTab, setActiveTab] = useState<"mock" | "sectional" | "pyq">("mock");
  const [mockTests, setMockTests] = useState<MockTest[]>([]);
  const [pyqTests, setPyqTests] = useState<MockTest[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Assessment flow states
  const [currentAssessment, setCurrentAssessment] = useState<any>(null);
  const [assessmentResults, setAssessmentResults] = useState<any>(null);
  const [showAssessment, setShowAssessment] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('🔄 Loading GATE assessments and PYQ data...');
        const [assessmentsData, pyqData] = await Promise.all([
          loadGateAssessments(),
          loadPYQAssessments()
        ]);
        
        console.log('✅ Actual assessments loaded:', assessmentsData.length);
        console.log('✅ PYQ assessments loaded:', pyqData.length);
        console.log('📊 Sample assessment:', assessmentsData[0]);
        
        setMockTests(assessmentsData);
        setPyqTests(pyqData);
        
        console.log('🎯 All data loaded successfully!');
      } catch (error) {
        console.error('❌ Error loading GATE data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  const handleStartAssessment = async (assessmentId: string) => {
    try {
      console.log('🚀 Starting assessment:', assessmentId);
      
      // Check if it's a PYQ assessment
      const isPYQ = assessmentId.startsWith('pyq-');
      const assessmentData = isPYQ 
        ? await loadPYQAssessmentData(assessmentId)
        : await loadGateAssessmentData(assessmentId);
        
      if (assessmentData) {
        setCurrentAssessment(assessmentData);
        setShowAssessment(true);
        setShowResults(false);
      } else {
        console.error('Failed to load assessment data');
      }
    } catch (error) {
      console.error('Error starting assessment:', error);
    }
  };

  const handleAssessmentComplete = (results: any) => {
    console.log('✅ Assessment completed:', results);
    setAssessmentResults(results);
    setShowAssessment(false);
    setShowResults(true);
  };

  const handleExitAssessment = () => {
    setShowAssessment(false);
    setCurrentAssessment(null);
  };

  const handleRetakeAssessment = () => {
    setShowResults(false);
    setAssessmentResults(null);
    if (currentAssessment) {
      setShowAssessment(true);
    }
  };

  const handleBackToAssessments = () => {
    setShowResults(false);
    setShowAssessment(false);
    setCurrentAssessment(null);
    setAssessmentResults(null);
  };


  // Show assessment if active
  if (showAssessment && currentAssessment) {
    return (
      <GateAssessment
        assessment={currentAssessment}
        onComplete={handleAssessmentComplete}
        onExit={handleExitAssessment}
      />
    );
  }

  // Show results if available
  if (showResults && assessmentResults) {
    return (
      <GateResults
        results={assessmentResults}
        onRetake={handleRetakeAssessment}
        onBack={handleBackToAssessments}
      />
    );
  }

  return (
    <div className="space-y-8">
      <SEO
        title="GATE Preparation Hub - Mock Tests & Exam Prep"
        description="Complete GATE exam preparation resource with full-length mock tests and sectional tests. Prepare for GATE 2026 with comprehensive practice tests for Computer Science and all branches."
        canonicalUrl="https://factorbeam.com/gate-prep"
        schema={gateSchema}
        keywords="GATE preparation, GATE mock test, GATE exam, GATE 2026, engineering entrance exam, GATE computer science, GATE practice test, graduate aptitude test"
      />
      
      <header className="bg-card p-8 rounded-lg shadow-sm border border-border">
        <h1 className="text-3xl font-bold text-foreground">GATE Preparation Hub</h1>
        <p className="mt-2 text-muted-foreground">
          Your complete resource for mastering the Graduate Aptitude Test in Engineering. 
          Practice with full-length mocks, sectional tests, and previous year questions.
        </p>
      </header>

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
              GATE Assessments
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
            <button
              onClick={() => setActiveTab("sectional")}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === "sectional"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              Sectional Tests <span className="text-xs text-muted-foreground ml-1">(Coming Soon)</span>
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === "mock" && (
            <div className="space-y-4">
              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                  <p className="mt-2 text-muted-foreground">Loading GATE assessments...</p>
                </div>
              ) : (
                mockTests.map((test) => (
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
                    <Button onClick={() => handleStartAssessment(test.id)}>Start Test</Button>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === "sectional" && (
            <div className="text-center py-16">
              <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Coming Soon</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                We're working hard to bring you comprehensive sectional tests for all GATE subjects. 
                Stay tuned for topic-wise practice tests that will help you focus on specific areas.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>In Development</span>
              </div>
            </div>
          )}

          {activeTab === "pyq" && (
            <div className="space-y-4">
              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                  <p className="mt-2 text-muted-foreground">Loading previous year questions...</p>
                </div>
              ) : (
                pyqTests.map((test) => (
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
                        <span className="text-primary">{test.difficulty}</span>
                      </div>
                    </div>
                    <Button onClick={() => handleStartAssessment(test.id)}>Start Test</Button>
                  </div>
                ))
              )}
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
