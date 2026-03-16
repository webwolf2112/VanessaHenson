import React from "react";
import { writingProjects } from "../data/writingProjects";

interface DocumentationAndTrainingProps {
  onNavigate: (page: string) => void;
}

const DocumentationAndTraining: React.FC<DocumentationAndTrainingProps> = ({
  onNavigate,
}) => {
  return (
    <section className="technical-writing">
      <div className="container">
        <h2>Documentation and Training</h2>
        <p className="section-intro">
          Documentation is the foundation of both AI and business success. I
          create organized, comprehensive technical documents and training
          materials that power AI agents, accelerate onboarding, and establish
          the knowledge base your teams need to thrive. From API documentation
          to developer workshops, I transform complex systems into clear,
          actionable resources. Knowledge is truly the power your company needs
          to shine.
        </p>

        <h3 className="section-subtitle">Sample Projects</h3>
        <div className="writing-grid">
          {writingProjects.map((project, index) => (
            <article key={index} className="writing-card">
              <div className="writing-header">
                <h3>{project.title}</h3>
                <span className="writing-type">{project.type}</span>
              </div>

              <p className="writing-description">{project.description}</p>
              <p className="writing-preview">{project.preview}</p>

              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="writing-links">
                {project.internalUrl && (
                  <button
                    className="btn btn-primary"
                    onClick={() => onNavigate("postman-automation")}
                  >
                    📖 Read Article
                  </button>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    🌐 Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentationAndTraining;
