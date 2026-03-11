export interface PromptProject {
  title: string;
  description: string;
  category:
    | "MCP"
    | "RAG"
    | "Prompting"
    | "Security"
    | "Copilot"
    | "Gemini"
    | "ChatGPT"
    | "Industry"
    | "Social Media"
    | "Design"
    | "Code";
  industries?: string[];
  technologies?: string[];
  preview: string;
  examplePrompt?: string;
  repoUrl?: string;
  internalUrl?: string;
}

export const promptProjects: PromptProject[] = [
  {
    title: "Attack Surface Management",
    description:
      "Understanding and managing the expanded attack surface introduced by AI agents and integrations.",
    category: "Security",
    technologies: ["AI Security", "Risk Management", "Threat Modeling"],
    preview:
      "AI systems dramatically expand your attack surface. Every API call, data access, and integration point creates new vulnerabilities that traditional security tools miss. Learn to identify, monitor, and secure AI-specific attack vectors.",
  },
  {
    title: "Shadow AI",
    description:
      "Detecting and managing unauthorized AI tools and shadow employees using AI outside security oversight.",
    category: "Security",
    technologies: ["Security Governance", "Policy Management", "AI Detection"],
    preview:
      "Shadow employees use AI tools outside of security team oversight, creating blind spots in your security posture. Unmanaged AI integrations bypass compliance controls, leak sensitive data, and introduce vulnerabilities. Implement detection and governance strategies.",
  },
  {
    title: "Agent Autonomy Risks",
    description:
      "Securing AI agents that act with real credentials beyond human-supervised workflows.",
    category: "Security",
    technologies: ["Access Control", "Credential Management", "AI Governance"],
    preview:
      "Agent autonomy means AI systems act with real credentials beyond human-supervised workflows. They make decisions, execute transactions, and access sensitive systems automatically. Without proper controls, autonomous agents become high-privilege attack vectors.",
  },
  {
    title: "Novel Vector Attacks",
    description:
      "Defending against AI-specific attacks: prompt injection, tool poisoning, memory corruption, and cascading failures.",
    category: "Security",
    technologies: ["Prompt Security", "AI Defense", "Attack Prevention"],
    preview:
      "Novel vector attacks target AI systems specifically: prompt injection bypasses instructions, tool poisoning corrupts agent capabilities, memory corruption leaks context across sessions, and cascading failures amplify damage across integrated systems. Traditional security tools can't detect these.",
  },
  {
    title: "GitHub Copilot Prompts for Development",
    description:
      "Curated collection of effective prompts for GitHub Copilot to enhance code generation and productivity.",
    category: "Copilot",
    technologies: ["GitHub Copilot", "VS Code", "AI Pair Programming"],
    preview:
      "Master the art of prompting GitHub Copilot for better code suggestions, refactoring assistance, and automated documentation generation.",
    examplePrompt:
      "Create a React component with TypeScript that handles form validation with error messages",
  },
  {
    title: "Code Generation Prompts",
    description:
      "Specialized prompts for generating high-quality code across different programming languages and frameworks.",
    category: "Code",
    technologies: ["Python", "JavaScript", "TypeScript", "React", "Node.js"],
    preview:
      "Learn how to craft precise prompts for code generation, bug fixing, optimization, and architectural decisions.",
    examplePrompt:
      "Write a REST API endpoint with error handling and validation using Express and TypeScript",
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
