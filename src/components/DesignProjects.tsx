import React from "react";
import { designProjects } from "../data/designProjects";

interface DesignProjectsProps {
  onNavigate: (page: string) => void;
}

const DesignProjects: React.FC<DesignProjectsProps> = ({ onNavigate }) => {
  return (
    <section className="design-projects">
      <div className="container">
        <h2>Design Projects</h2>
        <p className="section-intro">
          Creative design work spanning UI/UX, branding, and design systems,
          with a focus on clean aesthetics and user-centered experiences.
        </p>

        <div className="writing-grid">
          {designProjects.map((project, index) => (
            <article key={index} className="writing-card">
              <div className="writing-header">
                <h3>{project.title}</h3>
                <span className="writing-type">{project.type}</span>
              </div>

              <p className="writing-description">{project.description}</p>
              <p className="writing-preview">{project.preview}</p>

              <div className="technologies">
                {project.tools.map((tool, i) => (
                  <span key={i} className="tech-tag">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="writing-links">
                {project.internalUrl && (
                  <button
                    className="btn btn-primary"
                    onClick={() => onNavigate(project.internalUrl!)}
                  >
                    🎨 View Design
                  </button>
                )}
                {project.figmaUrl && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    📐 Figma File
                  </a>
                )}
                {project.behanceUrl && (
                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    🎯 Behance
                  </a>
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

export default DesignProjects;
