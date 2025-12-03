export interface PromptProject {
  title: string;
  description: string;
  category: "Copilot" | "Gemini" | "ChatGPT" | "Industry" | "Social Media" | "Design" | "Code";
  industries?: string[];
  technologies?: string[];
  preview: string;
  examplePrompt?: string;
  repoUrl?: string;
  internalUrl?: string;
}

export const promptProjects: PromptProject[] = [
  {
    title: "GitHub Copilot Prompts for Development",
    description:
      "Curated collection of effective prompts for GitHub Copilot to enhance code generation and productivity.",
    category: "Copilot",
    technologies: ["GitHub Copilot", "VS Code", "AI Pair Programming"],
    preview:
      "Master the art of prompting GitHub Copilot for better code suggestions, refactoring assistance, and automated documentation generation.",
    examplePrompt: "Create a React component with TypeScript that handles form validation with error messages",
  },
  {
    title: "Code Generation Prompts",
    description:
      "Specialized prompts for generating high-quality code across different programming languages and frameworks.",
    category: "Code",
    technologies: ["Python", "JavaScript", "TypeScript", "React", "Node.js"],
    preview:
      "Learn how to craft precise prompts for code generation, bug fixing, optimization, and architectural decisions.",
    examplePrompt: "Write a REST API endpoint with error handling and validation using Express and TypeScript",
  },
  {
    title: "Social Media Content Prompts",
    description:
      "Prompts for creating engaging social media content, posts, and campaigns across different platforms.",
    category: "Social Media",
    industries: ["Marketing", "Content Creation", "Brand Management"],
    preview:
      "Develop compelling social media strategies with AI-generated content ideas, hashtags, and engagement tactics.",
  },
  {
    title: "Design System Prompts",
    description:
      "Prompts for creating and maintaining design systems, UI/UX patterns, and design documentation.",
    category: "Design",
    technologies: ["Figma", "Design Tokens", "Component Libraries"],
    preview:
      "Generate design system documentation, component specifications, and accessibility guidelines using AI prompts.",
  },
];
