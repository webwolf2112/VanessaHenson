import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TechnicalWriting from "./components/TechnicalWriting";
import PostmanCollectionPage from "./components/PostmanCollectionPage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
        <TechnicalWriting />
      </main>
    </>
  );

  return (
    <Router>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>

      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/postman-automation"
            element={<PostmanCollectionPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
