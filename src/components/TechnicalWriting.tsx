import React from "react";
import { Link } from "react-router-dom";

interface WritingProject {
  title: string;
  description: string;
  type: "Documentation" | "Tutorial" | "Guide" | "API Docs";
  repoUrl?: string;
  liveUrl?: string;
  internalUrl?: string;
  technologies: string[];
  preview: string;
}

const writingProjects: WritingProject[] = [
  {
    title: "Automate your UI data with Postman Collection Runs",
    description:
      "Comprehensive guide for automating API testing workflows with Postman collections.",
    type: "Documentation",
    repoUrl: "https://github.com/webwolf2112/postman-collection-runner",
    internalUrl: "/postman-automation",
    technologies: ["Postman", "API Testing", "Automation", "CI/CD"],
    preview:
      "Learn how to set up automated API testing pipelines using Postman collections, including environment management, test scripting, and integration with CI/CD workflows.",
  },
  {
    title: "React Portfolio Development Guide",
    description:
      "Step-by-step tutorial for building a modern portfolio website with React and TypeScript.",
    type: "Tutorial",
    repoUrl: "https://github.com/webwolf2112/VanessaHenson",
    technologies: ["React", "TypeScript", "Vite", "GitHub Pages"],
    preview:
      "A complete walkthrough of creating a responsive portfolio site with dark/light mode, GitHub Actions deployment, and modern development practices.",
  },
];

const TechnicalWriting: React.FC = () => {
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
                  <Link to={project.internalUrl} className="btn btn-primary">
                    📖 Read Article
                  </Link>
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
