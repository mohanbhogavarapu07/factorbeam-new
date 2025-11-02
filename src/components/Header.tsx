import { Link, useNavigate } from "react-router-dom";
import { useState, useCallback, useEffect, useRef } from "react";
import { sanitizeHtml } from "@/lib/security";
import { Search, GraduationCap, Gamepad2, FileText } from "lucide-react"; // BookOpen removed - Skill Builder temporarily disabled
import { GATE_SUBJECTS, PYQ_SUBJECTS } from "@/data/gateAssessments";

interface Suggestion {
  id: string;
  title: string;
  type: 'exam' | 'game' | 'assessment' | 'topic'; // 'skill' removed - Skill Builder temporarily disabled
  url: string;
  icon: React.ReactNode;
}

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Generate search suggestions
  const generateSuggestions = useCallback((query: string): Suggestion[] => {
    if (!query.trim() || query.length < 2) return [];

    const searchLower = query.toLowerCase();
    const results: Suggestion[] = [];
    const maxResults = 8;

    // Search GATE subjects
    [...GATE_SUBJECTS, ...PYQ_SUBJECTS].forEach(subject => {
      if (results.length >= maxResults) return;
      if (
        subject.name.toLowerCase().includes(searchLower) ||
        subject.id.toLowerCase().includes(searchLower)
      ) {
        results.push({
          id: subject.id,
          title: subject.name,
          type: 'exam',
          url: `/gate-prep`,
          icon: <GraduationCap className="w-4 h-4" />
        });
      }
    });

    // Games
    const games = [
      { id: "vocabVortex", title: "Vocab Vortex", url: "/games#vocabVortex", keywords: ["vocab", "vocabulary", "verbal", "words"] },
      { id: "logicLeap", title: "Logic Leap", url: "/games#logicLeap", keywords: ["logic", "reasoning", "puzzle"] },
      { id: "dataDash", title: "Data Dash", url: "/games#dataDash", keywords: ["data", "analysis", "interpretation"] },
    ];

    games.forEach(game => {
      if (results.length >= maxResults) return;
      if (
        game.title.toLowerCase().includes(searchLower) ||
        game.keywords.some(kw => kw.includes(searchLower))
      ) {
        results.push({
          id: game.id,
          title: game.title,
          type: 'game',
          url: game.url,
          icon: <Gamepad2 className="w-4 h-4" />
        });
      }
    });

    // Assessments
    const assessments = [
      { id: "career", title: "Career Interest Compass", url: "/discovery/career", keywords: ["career", "interest", "compass", "job"] },
      { id: "cognitive", title: "Cognitive Skills Profile", url: "/discovery/cognitive", keywords: ["cognitive", "skills", "memory", "attention"] },
      { id: "personality", title: "Personality Assessment", url: "/discovery/personality", keywords: ["personality", "traits", "big five"] },
      { id: "learning", title: "Learning Preference", url: "/discovery/learning-preference", keywords: ["learning", "preference", "style"] },
    ];

    assessments.forEach(assessment => {
      if (results.length >= maxResults) return;
      if (
        assessment.title.toLowerCase().includes(searchLower) ||
        assessment.keywords.some(kw => kw.includes(searchLower))
      ) {
        results.push({
          id: assessment.id,
          title: assessment.title,
          type: 'assessment',
          url: assessment.url,
          icon: <FileText className="w-4 h-4" />
        });
      }
    });

    // Skills - Commented out - Skill Builder temporarily disabled
    // const skills = [
    //   { id: "python", title: "Python Programming", url: "/skills#python", keywords: ["python", "programming", "coding"] },
    //   { id: "sql", title: "SQL Database", url: "/skills#sql", keywords: ["sql", "database", "query"] },
    //   { id: "grammar", title: "Advanced Grammar", url: "/skills#grammar", keywords: ["grammar", "english", "language"] },
    // ];

    // skills.forEach(skill => {
    //   if (results.length >= maxResults) return;
    //   if (
    //     skill.title.toLowerCase().includes(searchLower) ||
    //     skill.keywords.some(kw => kw.includes(searchLower))
    //   ) {
    //     results.push({
    //       id: skill.id,
    //       title: skill.title,
    //       type: 'skill',
    //       url: skill.url,
    //       icon: <BookOpen className="w-4 h-4" />
    //     });
    //   }
    // });

    // Common exams - Commented out UPSC, CAT, SSC - Assessments page temporarily disabled
    const commonExams = [
      { id: "gate", title: "GATE Exam", url: "/gate-prep", keywords: ["gate", "graduate", "aptitude"] },
      // { id: "upsc", title: "UPSC", url: "/assessments", keywords: ["upsc", "civil services"] },
      // { id: "cat", title: "CAT Exam", url: "/assessments", keywords: ["cat", "mba", "admission"] },
      // { id: "ssc", title: "SSC Exam", url: "/assessments", keywords: ["ssc", "staff selection"] },
    ];

    commonExams.forEach(exam => {
      if (results.length >= maxResults) return;
      if (
        exam.title.toLowerCase().includes(searchLower) ||
        exam.keywords.some(kw => kw.includes(searchLower))
      ) {
        results.push({
          id: exam.id,
          title: exam.title,
          type: 'exam',
          url: exam.url,
          icon: <GraduationCap className="w-4 h-4" />
        });
      }
    });

    return results.slice(0, maxResults);
  }, []);

  // Update suggestions when search value changes
  useEffect(() => {
    if (searchValue.trim().length >= 2) {
      const newSuggestions = generateSuggestions(searchValue);
      setSuggestions(newSuggestions);
      setShowSuggestions(newSuggestions.length > 0);
      setSelectedIndex(-1);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }
  }, [searchValue, generateSuggestions]);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Security: Sanitize search input to prevent XSS
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Limit length to prevent DoS via large inputs
    if (value.length > 200) return;
    // Basic sanitization
    const sanitized = value.replace(/[<>]/g, "");
    setSearchValue(sanitized);
  }, []);

  const handleSearchSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!searchValue.trim()) return;
    
    const sanitizedQuery = sanitizeHtml(searchValue.trim());
    
    // Log search for security monitoring (in production, send to analytics)
    console.info("[SEARCH]", {
      query: sanitizedQuery,
      timestamp: new Date().toISOString(),
    });
    
    // Navigate to search results page with query parameter
    navigate(`/search?q=${encodeURIComponent(sanitizedQuery)}`);
    setShowSuggestions(false);
  }, [searchValue, navigate]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || suggestions.length === 0) {
      if (e.key === 'Enter') {
        const formEvent = { preventDefault: () => {} } as React.FormEvent;
        handleSearchSubmit(formEvent);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      const selectedSuggestion = suggestions[selectedIndex];
      navigate(selectedSuggestion.url);
      setShowSuggestions(false);
      setSearchValue('');
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }
  }, [showSuggestions, suggestions, selectedIndex, navigate, handleSearchSubmit]);

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 relative">
              <span className="font-bold text-2xl text-primary">FactorBeam</span>
              <span
                className="absolute -top-2 right-[-50px] inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold italic"
                style={{ backgroundColor: '#E7BE4B', color: '#1A1A1A' }}
                aria-label="Beta badge"
              >
                Beta V1.0
              </span>
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs relative" ref={searchRef}>
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <form onSubmit={handleSearchSubmit} className="relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <input
                  id="search"
                  name="search"
                  value={searchValue}
                  onChange={handleSearchChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => {
                      if (suggestions.length > 0) {
                        setShowSuggestions(true);
                      }
                    }}
                    className="block w-full pl-10 pr-3 py-2 border border-input rounded-md leading-5 bg-card placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-colors"
                  placeholder="Search for an exam or topic..."
                  type="search"
                  maxLength={200}
                  autoComplete="off"
                />
                </div>
              </form>

              {/* Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute z-50 w-full mt-1 bg-card border border-border rounded-md shadow-lg max-h-80 overflow-auto">
                  <div className="py-1">
                    {suggestions.map((suggestion, index) => (
                      <Link
                        key={suggestion.id}
                        to={suggestion.url}
                        onClick={() => {
                          setShowSuggestions(false);
                          setSearchValue('');
                        }}
                        className={`flex items-center gap-3 px-4 py-2 hover:bg-accent cursor-pointer transition-colors ${
                          index === selectedIndex ? 'bg-accent' : ''
                        }`}
                      >
                        <div className="text-primary flex-shrink-0">
                          {suggestion.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-foreground truncate">
                            {suggestion.title}
                          </div>
                          <div className="text-xs text-muted-foreground capitalize">
                            {suggestion.type}
                          </div>
                        </div>
                      </Link>
                    ))}
                    <div className="border-t border-border mt-1 pt-1">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleSearchSubmit(e as any);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-primary hover:bg-accent flex items-center gap-2"
                      >
                        <Search className="w-4 h-4" />
                        Search for &quot;{searchValue}&quot;
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
