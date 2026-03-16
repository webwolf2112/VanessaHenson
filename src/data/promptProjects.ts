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
      "Focus: Visibility and Control - Expanding the Perimeter",
    category: "Security",
    technologies: ["AI Security", "Risk Management", "Threat Modeling"],
    preview:
      "As AI agents and integrations grow, so does the potential for risk. I focus on identifying and securing new entry points, ensuring data access remains monitored and controlled.",
  },
  {
    title: "Shadow AI",
    description:
      "Focus: Governance and Education - Managing the Unknown",
    category: "Security",
    technologies: ["Security Governance", "Policy Management", "AI Detection"],
    preview:
      "Unmanaged AI tools can create blind spots in a security posture. I advocate for clear governance and safe-use policies that empower employees to use AI without compromising company data.",
  },
  {
    title: "Agent Autonomy Risks",
    description:
      "Focus: Trust and Guardrails - Securing Independent Workflows",
    category: "Security",
    technologies: ["Access Control", "Credential Management", "AI Governance"],
    preview:
      "Agents with high-level credentials require robust guardrails. I focus on credential management and access controls to ensure autonomous systems act only within their intended scope.",
  },
  {
    title: "Novel Vector Defense",
    description:
      "Focus: Resilience and Awareness - Protecting Against the New",
    category: "Security",
    technologies: ["Prompt Security", "AI Defense", "Attack Prevention"],
    preview:
      "From prompt injection to data poisoning, AI introduces unique challenges. I help build defenses that anticipate these novel vectors, keeping systems resilient in a rapidly shifting landscape.",
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
