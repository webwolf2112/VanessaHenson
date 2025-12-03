import React, { useState } from "react";
import { promptProjects } from "../data/promptProjects";

interface PromptEngineeringProps {
  onNavigate: (page: string) => void;
}

const PromptEngineering: React.FC<PromptEngineeringProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Copilot", "Gemini", "ChatGPT", "Industry", "Social Media", "Design", "Code"];

  const filteredProjects = selectedCategory === "All" 
    ? promptProjects 
    : promptProjects.filter(project => project.category === selectedCategory);

  return (
    <section className="prompt-engineering">
      <div className="container">
        <h2>Prompt Engineering</h2>
        <p className="section-intro">
          Explore curated prompts and strategies for AI tools across different domains,
          from code generation to social media and design.
        </p>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="writing-grid">
          {filteredProjects.map((project, index) => (
            <article key={index} className="writing-card">
              <div className="writing-header">
                <h3>{project.title}</h3>
                <span className="writing-type">{project.category}</span>
              </div>

              <p className="writing-description">{project.description}</p>
              <p className="writing-preview">{project.preview}</p>

              {project.examplePrompt && (
                <div className="example-prompt">
                  <strong>Example:</strong>
                  <code>{project.examplePrompt}</code>
                </div>
              )}

              {project.technologies && (
                <div className="technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {project.industries && (
                <div className="industries">
                  {project.industries.map((industry, i) => (
                    <span key={i} className="industry-tag">
                      {industry}
                    </span>
                  ))}
                </div>
              )}

              <div className="writing-links">
                {project.internalUrl && (
                  <button
                    className="btn btn-primary"
                    onClick={() => onNavigate(project.internalUrl!)}
                  >
                    📝 View Prompts
                  </button>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    💾 View Repository
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="no-results">No prompts found in this category yet. Check back soon!</p>
        )}
      </div>
    </section>
  );
};

export default PromptEngineering;
