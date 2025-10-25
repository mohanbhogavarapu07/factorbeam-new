import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { useState, useCallback } from "react";
import { sanitizeHtml } from "@/lib/security";

const Header = () => {
  const location = useLocation();
  const [searchValue, setSearchValue] = useState("");

  const isActive = (path: string) => location.pathname === path;

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
    
    // Log search for security monitoring (in production, send to analytics)
    console.info("[SEARCH]", {
      query: sanitizeHtml(searchValue),
      timestamp: new Date().toISOString(),
    });
    
    // In production: navigate to search results or call search API
  }, [searchValue]);

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-2xl text-primary">FactorBeam</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`${
                  isActive("/")
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors`}
              >
                Home
              </Link>
              <Link
                to="/discovery"
                className={`${
                  isActive("/discovery") || isActive("/gate-prep") || isActive("/skills") || isActive("/assessments")
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors`}
              >
                Assessments
              </Link>
              <Link
                to="/games"
                className={`${
                  isActive("/games")
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors`}
              >
                Games
              </Link>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <form onSubmit={handleSearchSubmit}>
                <input
                  id="search"
                  name="search"
                  value={searchValue}
                  onChange={handleSearchChange}
                  className="block w-full pl-3 pr-3 py-2 border border-input rounded-md leading-5 bg-card placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-colors"
                  placeholder="Search for an exam or topic..."
                  type="search"
                  maxLength={200}
                  autoComplete="off"
                />
              </form>
            </div>
          </div>

          <div className="hidden sm:ml-4 sm:flex sm:items-center gap-3">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
            <Button>Login</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
