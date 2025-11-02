import { useSearchParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Gamepad2, GraduationCap, FileText } from "lucide-react"; // BookOpen removed - Skill Builder temporarily disabled
import SEO from "@/components/SEO";
import { GATE_SUBJECTS, PYQ_SUBJECTS } from "@/data/gateAssessments";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'exam' | 'game' | 'assessment' | 'topic'; // 'skill' removed - Skill Builder temporarily disabled
  url: string;
  tags?: string[];
  icon?: React.ReactNode;
}

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Games data
  const games = [
    {
      id: "vocabVortex",
      title: "Vocab Vortex",
      description: "Expand your vocabulary in 60 seconds by matching synonyms and antonyms.",
      skills: "Verbal Ability, Speed",
      category: "Verbal Ability"
    },
    {
      id: "logicLeap",
      title: "Logic Leap",
      description: "Test your logical reasoning with pattern recognition and sequence puzzles.",
      skills: "Logical Reasoning, Pattern Recognition",
      category: "Logic & Puzzles"
    },
    {
      id: "dataDash",
      title: "Data Dash",
      description: "Quick-fire questions to test your data interpretation skills.",
      skills: "Data Analysis, Quick Thinking",
      category: "Quantitative Speed"
    },
  ];

  // Discovery assessments
  const assessments = [
    {
      id: "career",
      title: "Career Interest Compass",
      description: "Discover your ideal career path through visual preference assessment based on 60+ years of career psychology research.",
      category: "Discovery"
    },
    {
      id: "cognitive",
      title: "Cognitive Skills Profile",
      description: "Assess your cognitive abilities including memory, attention, and problem-solving skills.",
      category: "Discovery"
    },
    {
      id: "personality",
      title: "Personality Assessment",
      description: "Understand your personality traits using the Big Five model with decades of research backing.",
      category: "Discovery"
    },
    {
      id: "learning",
      title: "Learning Preference Assessment",
      description: "Discover your optimal learning style and strategies for better academic performance.",
      category: "Discovery"
    },
  ];

  // Skills/topics data - Commented out - Skill Builder temporarily disabled
  // const skills = [
  //   { id: "python", title: "Python Programming", description: "Test your knowledge of Python syntax, libraries, and best practices." },
  //   { id: "sql", title: "SQL Database", description: "Master SQL queries, joins, and database management concepts." },
  //   { id: "grammar", title: "Advanced Grammar", description: "Improve your grammar skills with comprehensive English language tests." },
  // ];

  // Perform search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate search delay for better UX
    setTimeout(() => {
      const searchLower = query.toLowerCase();
      const searchResults: SearchResult[] = [];

      // Search GATE subjects
      [...GATE_SUBJECTS, ...PYQ_SUBJECTS].forEach(subject => {
        if (
          subject.name.toLowerCase().includes(searchLower) ||
          subject.id.toLowerCase().includes(searchLower)
        ) {
          searchResults.push({
            id: subject.id,
            title: subject.name,
            description: `GATE preparation assessment for ${subject.name}`,
            type: 'exam',
            url: `/gate-prep`,
            icon: <GraduationCap className="w-5 h-5" />,
            tags: ['GATE', 'Exam Prep', 'Engineering']
          });
        }
      });

      // Search games
      games.forEach(game => {
        if (
          game.title.toLowerCase().includes(searchLower) ||
          game.description.toLowerCase().includes(searchLower) ||
          game.skills.toLowerCase().includes(searchLower) ||
          game.category.toLowerCase().includes(searchLower)
        ) {
          searchResults.push({
            id: game.id,
            title: game.title,
            description: game.description,
            type: 'game',
            url: `/games#${game.id}`,
            icon: <Gamepad2 className="w-5 h-5" />,
            tags: [game.category, game.skills]
          });
        }
      });

      // Search assessments
      assessments.forEach(assessment => {
        if (
          assessment.title.toLowerCase().includes(searchLower) ||
          assessment.description.toLowerCase().includes(searchLower) ||
          assessment.category.toLowerCase().includes(searchLower)
        ) {
          searchResults.push({
            id: assessment.id,
            title: assessment.title,
            description: assessment.description,
            type: 'assessment',
            url: `/discovery/${assessment.id === 'career' ? 'career' : assessment.id === 'cognitive' ? 'cognitive' : assessment.id === 'personality' ? 'personality' : 'learning-preference'}`,
            icon: <FileText className="w-5 h-5" />,
            tags: [assessment.category, 'Discovery']
          });
        }
      });

      // Search skills - Commented out - Skill Builder temporarily disabled
      // skills.forEach(skill => {
      //   if (
      //     skill.title.toLowerCase().includes(searchLower) ||
      //     skill.description.toLowerCase().includes(searchLower)
      //   ) {
      //     searchResults.push({
      //       id: skill.id,
      //       title: skill.title,
      //       description: skill.description,
      //       type: 'skill',
      //       url: `/skills#${skill.id}`,
      //       icon: <BookOpen className="w-5 h-5" />,
      //       tags: ['Skill Builder', 'Micro-assessment']
      //     });
      //   }
      // });

      // Search common exam names - Commented out UPSC, CAT, SSC - Assessments page temporarily disabled
      const commonExams = [
        { name: 'GATE', url: '/gate-prep', description: 'Graduate Aptitude Test in Engineering preparation' },
        // { name: 'UPSC', url: '/assessments', description: 'Union Public Service Commission exam preparation' },
        // { name: 'CAT', url: '/assessments', description: 'Common Admission Test for MBA programs' },
        // { name: 'SSC', url: '/assessments', description: 'Staff Selection Commission exam preparation' },
      ];

      commonExams.forEach(exam => {
        if (exam.name.toLowerCase().includes(searchLower) || exam.description.toLowerCase().includes(searchLower)) {
          searchResults.push({
            id: `exam-${exam.name.toLowerCase()}`,
            title: exam.name,
            description: exam.description,
            type: 'exam',
            url: exam.url,
            icon: <GraduationCap className="w-5 h-5" />,
            tags: ['Exam', 'Preparation']
          });
        }
      });

      setResults(searchResults);
      setIsLoading(false);
    }, 300);
  }, [query]);

  const resultCount = results.length;

  return (
    <>
      <SEO 
        title={`Search Results${query ? ` for "${query}"` : ''} | FactorBeam`}
        description={`Search results${query ? ` for "${query}"` : ''} on FactorBeam platform`}
      />
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-6 h-6 text-primary" />
            <h1 className="text-3xl font-bold">Search Results</h1>
          </div>
          {query && (
            <p className="text-muted-foreground">
              {isLoading ? (
                "Searching..."
              ) : resultCount > 0 ? (
                `Found ${resultCount} result${resultCount !== 1 ? 's' : ''} for "${query}"`
              ) : (
                `No results found for "${query}"`
              )}
            </p>
          )}
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : resultCount > 0 ? (
          <div className="space-y-4">
            {results.map((result) => (
              <Link key={result.id} to={result.url}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          {result.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{result.title}</CardTitle>
                          <CardDescription>{result.description}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline" className="capitalize">
                        {result.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  {result.tags && result.tags.length > 0 && (
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {result.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              </Link>
            ))}
          </div>
        ) : query ? (
          <Card>
            <CardContent className="py-12 text-center">
              <Search className="w-12 h-12 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground">
                Try searching for exams, topics, games, or assessments
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <Search className="w-12 h-12 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="text-xl font-semibold mb-2">Enter a search query</h3>
              <p className="text-muted-foreground">
                Search for exams, topics, games, or assessments
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default SearchResults;

