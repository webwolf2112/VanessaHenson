import React from "react";
import { designProjects } from "../data/designProjects";
import { companies } from "../data/companies";
import ibottaLogo from "../assets/ibotta.png";
import proofpointLogo from "../assets/proofpoint.jpeg";
import gogoLogo from "../assets/gogo.png";
import congaLogo from "../assets/conga.png";
import reebokLogo from "../assets/Reebok.jpeg";
import crocsLogo from "../assets/crocs.png";
import ritaHazanLogo from "../assets/ritaHazan.webp";
import nordstromLogo from "../assets/nordstrom.png";
import bigChillLogo from "../assets/bigChill.png";
import voltageLogo from "../assets/voltage.jpeg";
import crossfitLogo from "../assets/crossfit.png";

interface DevelopmentProjectsProps {
  onNavigate: (page: string) => void;
}

const DevelopmentProjects: React.FC<DevelopmentProjectsProps> = ({ onNavigate }) => {
  // Map company names to imported logos
  const logoMap: Record<string, string> = {
    "Ibotta": ibottaLogo,
    "Proofpoint": proofpointLogo,
    "Gogo": gogoLogo,
    "Conga": congaLogo,
    "Reebok": reebokLogo,
    "Crocs": crocsLogo,
    "Rita Hazan": ritaHazanLogo,
    "Nordstrom": nordstromLogo,
    "Big Chill": bigChillLogo,
    "Voltage Advertising": voltageLogo,
    "CrossFit": crossfitLogo,
  };

  return (
    <section className="design-projects">
      <div className="container">
        <h2>Full Stack Development</h2>
        <p className="section-intro">
          End-to-end software architecture and implementation across the entire technology stack. From scalable backend systems and API design to beautiful, responsive UIs with modern frontend frameworks and cloud infrastructure, I build robust, performant applications that solve real business problems. Event-driven architectures, CI/CD pipelines, and security-first development meet pixel-perfect interfaces that users love.
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
            {companies.map((company, index) => {
              const logo = logoMap[company.name];
              return (
                <div key={index} className="company-card">
                  {company.url ? (
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-link"
                    >
                      {logo ? (
                        <>
                          <div className="company-logo-container">
                            <img
                              src={logo}
                              alt={company.name}
                              className="company-logo"
                            />
                            <div className="company-name-overlay">{company.name}</div>
                          </div>
                          {company.industry && (
                            <div className="company-industry">{company.industry}</div>
                          )}
                        </>
                      ) : (
                        <>
                          <div className="company-name">{company.name}</div>
                          {company.industry && (
                            <div className="company-industry">{company.industry}</div>
                          )}
                        </>
                      )}
                    </a>
                  ) : (
                    <>
                      {logo ? (
                        <>
                          <div className="company-logo-container">
                            <img
                              src={logo}
                              alt={company.name}
                              className="company-logo"
                            />
                            <div className="company-name-overlay">{company.name}</div>
                          </div>
                          {company.industry && (
                            <div className="company-industry">{company.industry}</div>
                          )}
                        </>
                      ) : (
                        <>
                          <div className="company-name">{company.name}</div>
                          {company.industry && (
                            <div className="company-industry">{company.industry}</div>
                          )}
                        </>
                      )}
                    </>
                  )}
                </div>
              );
            })}
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
              href="http://vanessahenson.blogspot.com/"
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

export default DevelopmentProjects;
