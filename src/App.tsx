import { useState, useEffect } from "react";
import "./App.css";
import TechnicalWriting from "./components/TechnicalWriting";
import PostmanCollectionPage from "./components/PostmanCollectionPage";
import PromptEngineering from "./components/PromptEngineering";
import DesignProjects from "./components/DesignProjects";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  // Check for saved theme preference or default to system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
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
      isDarkMode ? "dark" : "light"
    );
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const HomePage = () => (
    <>
      <header className="hero">
        <div className="main-content">
          <h1>Vanessa Henson</h1>
          <h2>Software Engineer/Technical Writer</h2>
        </div>
      </header>

      <main>
        <TechnicalWriting onNavigate={setCurrentPage} />
        <PromptEngineering onNavigate={setCurrentPage} />
        <DesignProjects onNavigate={setCurrentPage} />
      </main>
    </>
  );

  return (
    <>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>

      <div className="app">
        {currentPage === "home" && <HomePage />}
        {currentPage === "postman-automation" && (
          <PostmanCollectionPage onNavigate={setCurrentPage} />
        )}
      </div>
    </>
  );
}

export default App;
