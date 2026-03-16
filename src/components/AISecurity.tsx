import React, { useState } from "react";
import { promptProjects } from "../data/promptProjects";

interface AISecurityProps {
  onNavigate: (page: string) => void;
}

const AISecurity: React.FC<AISecurityProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "MCP", "RAG", "Prompting", "Security"];

  const categoryIntros: Record<string, string> = {
    All: "Strategic AI implementation with security at the forefront. From MCP and RAG architectures to prompt engineering and threat mitigation, I help organizations integrate AI safely and effectively while managing novel attack vectors and maintaining compliance.",

    MCP: "Model Context Protocol (MCP) connects AI agents to your tools, databases, and APIs. I design and implement MCP servers that give your AI systems safe, controlled access to live data and functionality. From custom integrations to enterprise-scale deployments, I build the bridges that make AI agents truly useful in your environment.",

    RAG: "Retrieval Augmented Generation grounds AI in your organization's knowledge. I architect RAG systems that connect language models to your documentation, codebases, and data sources, ensuring responses are accurate, up-to-date, and traceable. From semantic search to context injection, I build knowledge systems that scale with your business.",

    Prompting: "Great prompts are the difference between AI that frustrates and AI that accelerates. I craft prompt templates, chains, and systems that extract consistent, high-quality outputs from language models. From zero-shot strategies to few-shot examples and chain-of-thought reasoning, I engineer prompts that turn AI potential into production reliability.",

    Security: "As a developer, your goal is to build \"pessimistic\" agents that treat every input, every tool, and even their own past memories as potentially malicious. I create secure, robust AI systems that anticipate and mitigate risks while delivering powerful capabilities. With a focus on best practices, I help organizations navigate the complexities of AI security to ensure successful, responsible deployments.",
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
