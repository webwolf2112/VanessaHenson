import { useState, useEffect } from "react";
import DocumentationAndTraining from "./components/DocumentationAndTraining";
import PostmanCollectionPage from "./components/PostmanCollectionPage";
import AISecurity from "./components/AISecurity";
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
              <a href="#design-projects" className="nav-link">
                Full Stack Development
              </a>
            </li>
            <li>
              <a href="#prompt-engineering" className="nav-link">
                AI Security
              </a>
            </li>
            <li>
              <a href="#technical-writing" className="nav-link">
                Documentation
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
            <button
              className="btn-cta-nav"
              onClick={() => scrollToSection("lets-connect")}
            >
              Let's Connect
            </button>
          </div>
        </div>
      </nav>

      <header className="hero">
        <h1 className="hero-headline">
          Where engineering meets defense.
          <span className="hero-headline-accent">
            Building resilient software for an AI-driven world.
          </span>
        </h1>
        <p className="hero-subtitle">
          Hi, I’m Vanessa. With a background in full-stack development, I
          believe that elegant code is secure code. My work lives at the
          intersection of software engineering and defensive AI, where I focus
          on building systems that are as resilient as they are scalable. I
          bring a builder’s perspective to the exciting world of AI security.
        </p>
      </header>

      <div className="portfolio-grid">
        <div
          className="portfolio-card portfolio-card-green"
          onClick={() => scrollToSection("design-projects")}
        >
          <div className="card-icon">🎨</div>
          <div>
            <h3 className="card-title">Full Stack Development</h3>
            <p className="card-description">
              I focus on event-driven architectures, reliable CI/CD pipelines,
              and ensuring security-first development meets user-friendly
              experiences. interfaces.
            </p>
          </div>
        </div>

        <div
          className="portfolio-card portfolio-card-yellow"
          onClick={() => scrollToSection("prompt-engineering")}
        >
          <div className="card-icon">🤖</div>
          <div>
            <h3 className="card-title">AI Security</h3>
            <p className="card-description">
              Integrating AI with a focus on safety and reliability. I help
              teams adopt agent technologies responsibly, ensuring that new
              systems stay resilient against emerging risks and the complexities
              of modern AI security.
            </p>
          </div>
        </div>

        <div
          className="portfolio-card portfolio-card-coral"
          onClick={() => scrollToSection("technical-writing")}
        >
          <div className="card-icon">📝</div>
          <div>
            <h3 className="card-title">Documentation and Training</h3>
            <p className="card-description">
              Translating complex systems into clear, actionable resources. I
              create documentation that helps humans and agents succeed in your
              environments through clarity and technical depth.
            </p>
          </div>
        </div>
      </div>

      <main>
        <div id="design-projects">
          <DevelopmentProjects onNavigate={setCurrentPage} />
        </div>
        <div id="prompt-engineering">
          <AISecurity onNavigate={setCurrentPage} />
        </div>
        <div id="technical-writing">
          <DocumentationAndTraining onNavigate={setCurrentPage} />
        </div>

        {/* Let's Connect Section */}
        <section id="lets-connect" className="companies-section">
          <div className="section-container">
            <h2 className="connect-title">Let's Connect</h2>
            <p className="section-intro">
              Beyond the screen, I'm an optimist who loves constant learning and
              thoughtful design. I'm currently looking for my next challenge—if
              you're building something meaningful, I'd love to chat.
            </p>
            <div className="connect-links">
              <a
                href="https://www.linkedin.com/in/vanessa-henson/"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-link"
              >
                💼 LinkedIn
              </a>
              <a
                href="http://vanessahenson.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-link"
              >
                📝 Blog
              </a>
            </div>
            <div style={{ marginTop: "5rem", textAlign: "center" }}>
              <button
                className="btn-secondary"
                style={{ background: "transparent", borderColor: "rgba(0, 0, 0, 0.3)" }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                ↑ Back to Top
              </button>
            </div>
          </div>
        </section>
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
