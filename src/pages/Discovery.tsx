import { Button } from "@/components/ui/button";

const Discovery = () => {
  const assessments = [
    {
      title: "Career Interest Compass",
      description: "Discover what you love to do. Are you a Thinker, Creator, or Persuader?",
    },
    {
      title: "Cognitive Skills Profile",
      description: "Measure your core abilities in Logic, Verbal, and Quantitative reasoning.",
    },
    {
      title: "Work Style Inventory",
      description: "Understand your natural work preferences and team dynamics.",
    },
    {
      title: "Technical Aptitude Test",
      description: "Evaluate your potential for technical careers and engineering paths.",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
        <h1 className="text-3xl font-bold text-foreground">The Discovery Engine</h1>
        <p className="mt-2 text-muted-foreground">
          Start your journey here. These assessments help you understand your innate strengths, interests, and work style to find the perfect career path.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assessments.map((assessment, index) => (
          <div
            key={index}
            className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-foreground">
              {assessment.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              {assessment.description}
            </p>
            <Button className="mt-4" variant="outline" size="sm">
              Start Assessment
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discovery;
