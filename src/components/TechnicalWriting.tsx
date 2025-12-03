import React from "react";
import { writingProjects } from "../data/writingProjects";

interface TechnicalWritingProps {
  onNavigate: (page: string) => void;
}

const TechnicalWriting: React.FC<TechnicalWritingProps> = ({ onNavigate }) => {
  return (
    <section className="technical-writing">
      <div className="container">
        <h2>Technical Writing</h2>
        <p className="section-intro">
          I create clear, comprehensive documentation that helps developers
          understand and implement complex technical concepts.
        </p>

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
                    onClick={() => onNavigate('postman-automation')}
                  >
                    📖 Read Article
                  </button>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    � View Repository
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    � Live Demo
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

export default TechnicalWriting;
