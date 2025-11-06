export interface WritingProject {
  title: string;
  description: string;
  type: "Documentation" | "Tutorial" | "Guide" | "API Docs";
  repoUrl?: string;
  liveUrl?: string;
  internalUrl?: string;
  technologies: string[];
  preview: string;
}

export const writingProjects: WritingProject[] = [
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