import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import { sanitizeHtml } from "@/lib/security";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

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
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="font-bold text-2xl text-primary">FactorBeam</span>
              <span
                className="inline-flex items-baseline rounded-md px-2 py-0.5 text-[10px] font-semibold"
                style={{ backgroundColor: '#E7BE4B', color: '#1A1A1A' }}
                aria-label="Beta badge"
              >
                Beta 0.1
              </span>
            </Link>
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
