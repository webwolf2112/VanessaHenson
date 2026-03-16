import React, { useState } from "react";
import { promptProjects } from "../data/promptProjects";

interface AISecurityProps {
  onNavigate: (page: string) => void;
}

const AISecurity: React.FC<AISecurityProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Integration Architecture", "Defensive Engineering", "Prompt Architecture"];

  const categoryIntros: Record<string, string> = {
    All: "I build AI systems with security at the core, not as an afterthought. From designing safe integrations to engineering defensive systems and production-ready prompts, my focus is on creating AI that's both powerful and protected against emerging threats.",

    "Integration Architecture": "I design secure connections between AI systems and your infrastructure. Whether it's MCP servers controlling tool access or RAG pipelines grounding responses in verified data, I build integrations that balance capability with safety. Every connection includes access controls and audit trails that default to secure.",

    "Defensive Engineering": "I approach AI development with an adversarial mindset from the start. Every input, tool call, and memory reference is treated as potentially malicious. I build layered defenses against prompt injection, data exfiltration, and privilege escalation—security is part of the architecture, not added later.",

    "Prompt Architecture": "I treat prompts as production infrastructure that needs the same rigor as any other code. My templates include clear boundaries, structured outputs, and fail-safe behaviors that maintain integrity under edge cases. Each prompt is tested against adversarial inputs and designed to fail gracefully when things go wrong.",
  };

  const filteredProjects =
    selectedCategory === "All"
      ? promptProjects
      : promptProjects.filter(
          (project) => project.category === selectedCategory,
        );

  return (
    <section className="prompt-engineering">
      <div className="container">
        <h2>AI Security</h2>
        <p className="section-intro">
          {categoryIntros[selectedCategory]}
        </p>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                selectedCategory === category ? "active" : ""
              }`}
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
          <p className="no-results">
            No prompts found in this category yet. Check back soon!
          </p>
        )}
      </div>
    </section>
  );
};

export default AISecurity;
