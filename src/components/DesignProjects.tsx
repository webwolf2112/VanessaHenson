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
        <h2>Development Projects</h2>
        <p className="section-intro">
          Creative development work spanning UI/UX, branding, and design systems,
          with a focus on clean aesthetics and user-centered experiences.
        </p>

        {/* Companies Section */}
        {/* <div className="companies-subsection"> */}
          <h3 className="companies-title">
            See what amazing companies that trusted me with their code
          </h3>
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
