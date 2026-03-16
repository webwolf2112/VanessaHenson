import { useState, useEffect } from "react";
import DocumentationAndTraining from "./components/DocumentationAndTraining";
import PostmanCollectionPage from "./components/PostmanCollectionPage";
import AIIntegration from "./components/AIIntegration";
import DevelopmentProjects from "./components/DevelopmentProjects";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  // Check for saved theme preference or default to system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light",
    );
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const HomePage = () => (
    <>
      <nav className="nav-bar">
        <div className="nav-container">
          <a href="#" className="nav-logo">
            Vanessa Henson
          </a>
          <ul className="nav-menu">
            <li>
              <a href="#technical-writing" className="nav-link">
                Documentation
              </a>
            </li>
            <li>
              <a href="#prompt-engineering" className="nav-link">
                AI
              </a>
            </li>
            <li>
              <a href="#design-projects" className="nav-link">
                Full Stack Development
              </a>
            </li>
          </ul>
          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
            <a
              href="https://github.com/vanessahenson"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-nav"
            >
              View GitHub
            </a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <h1 className="hero-headline">
          Your Company. My craft.
          <span className="hero-headline-accent">Everyone wins.</span>
        </h1>
        <p className="hero-subtitle">
          Hi, I'm Vanessa and I transform complex technical concepts into clear
          documentation, AI skills and scalable elegant code.
        </p>
      </header>

      <div className="portfolio-grid">
        <div
          className="portfolio-card portfolio-card-coral"
          onClick={() => scrollToSection("technical-writing")}
        >
          <div className="card-icon">📝</div>
          <div>
            <h3 className="card-title">Documentation and Training</h3>
            <p className="card-description">
              Clear documentation that helps employees and agents succeed in
              your environment.
            </p>
          </div>
        </div>

        <div
          className="portfolio-card portfolio-card-yellow"
          onClick={() => scrollToSection("prompt-engineering")}
        >
          <div className="card-icon">🤖</div>
          <div>
            <h3 className="card-title">AI Integration & Security</h3>
            <p className="card-description">
              Integrating AI with intent, security, and best practices to ensure
              a successful project
            </p>
          </div>
        </div>

        <div
          className="portfolio-card portfolio-card-green"
          onClick={() => scrollToSection("design-projects")}
        >
          <div className="card-icon">🎨</div>
          <div>
            <h3 className="card-title">Full Stack Excellence</h3>
            <p className="card-description">
              CI/CD, Event Driven Architecture and beautiful UI's across your
              full project tech stack.
            </p>
          </div>
        </div>

        <div
          className="portfolio-card portfolio-card-teal"
          onClick={() => scrollToSection("lets-connect")}
        >
          <div className="card-icon">⭐</div>
          <div>
            <h3 className="card-title">Let's Connect</h3>
            <p className="card-description">
              Ready to collaborate? Check out my work and get in touch.
            </p>
          </div>
        </div>
      </div>

      <main>
        <div id="technical-writing">
          <DocumentationAndTraining onNavigate={setCurrentPage} />
        </div>
        <div id="prompt-engineering">
          <AIIntegration onNavigate={setCurrentPage} />
        </div>
        <div id="design-projects">
          <DevelopmentProjects onNavigate={setCurrentPage} />
        </div>
      </main>
    </>
  );

  return (
    <div className="app">
      {currentPage === "home" && <HomePage />}
      {currentPage === "postman-automation" && (
        <PostmanCollectionPage onNavigate={setCurrentPage} />
      )}
    </div>
  );
}

export default App;
