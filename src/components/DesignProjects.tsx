import React from "react";
import { designProjects } from "../data/designProjects";
import { companies } from "../data/companies";

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

        {/* Companies Section */}
        <div className="companies-subsection">
          <h3 className="companies-title">See who's trusted me with their code</h3>
          <div className="companies-grid">
            {companies.map((company, index) => (
              <div key={index} className="company-card">
                {company.url ? (
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-link"
                  >
                    <div className="company-name">{company.name}</div>
                    {company.industry && (
                      <div className="company-industry">{company.industry}</div>
                    )}
                  </a>
                ) : (
                  <>
                    <div className="company-name">{company.name}</div>
                    {company.industry && (
                      <div className="company-industry">{company.industry}</div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Let's Connect Section */}
        <div id="lets-connect" className="connect-subsection">
          <h3 className="connect-title">Let's Connect</h3>
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
              href="http://vanessahenson.blogspot.com/2023/12/add-fun-mario-bros-sound-on-git-commit.html"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-link"
            >
              📝 Blog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProjects;
