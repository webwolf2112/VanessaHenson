export interface PromptProject {
  title: string;
  description: string;
  category:
    | "Integration Architecture"
    | "Defensive Engineering"
    | "Prompt Architecture"
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
    category: "Defensive Engineering",
    technologies: ["AI Security", "Risk Management", "Threat Modeling"],
    preview:
      "As AI agents and integrations grow, so does the potential for risk. I focus on identifying and securing new entry points, ensuring data access remains monitored and controlled.",
  },
  {
    title: "Shadow AI",
    description:
      "Focus: Governance and Education - Managing the Unknown",
    category: "Defensive Engineering",
    technologies: ["Security Governance", "Policy Management", "AI Detection"],
    preview:
      "Unmanaged AI tools can create blind spots in a security posture. I advocate for clear governance and safe-use policies that empower employees to use AI without compromising company data.",
  },
  {
    title: "Agent Autonomy Risks",
    description:
      "Focus: Trust and Guardrails - Securing Independent Workflows",
    category: "Defensive Engineering",
    technologies: ["Access Control", "Credential Management", "AI Governance"],
    preview:
      "Agents with high-level credentials require robust guardrails. I focus on credential management and access controls to ensure autonomous systems act only within their intended scope.",
  },
  {
    title: "Novel Vector Defense",
    description:
      "Focus: Resilience and Awareness - Protecting Against the New",
    category: "Defensive Engineering",
    technologies: ["Prompt Security", "AI Defense", "Attack Prevention"],
    preview:
      "From prompt injection to data poisoning, AI introduces unique challenges. I help build defenses that anticipate these novel vectors, keeping systems resilient in a rapidly shifting landscape.",
  },
  {
    title: "Defensive System Prompts",
    description:
      "Focus: Boundaries and Access Control - Securing Agent Behavior",
    category: "Prompt Architecture",
    technologies: ["System Prompts", "agents.md", "File Access Control"],
    preview:
      "System prompts are your first line of defense in controlling AI behavior. I design prompts that use protocols like agents.md to explicitly define what files and resources an agent can access, preventing it from reading sensitive configuration or credentials. These boundaries are enforced at the prompt level before any tool execution happens.",
  },
  {
    title: "Prompt Injection Mitigation",
    description:
      "Focus: Input Sanitization - Preventing Instruction Hijacking",
    category: "Prompt Architecture",
    technologies: ["Prompt Security", "Input Validation", "Instruction Isolation"],
    preview:
      "User inputs are attack vectors waiting to happen. I structure prompts to clearly separate user-provided content from system instructions using delimiters, prefixes, and XML tags. By treating all user input as untrusted data rather than instructions, I prevent attackers from hijacking the AI's behavior through crafted prompts.",
  },
  {
    title: "Output Validation",
    description:
      "Focus: Trust and Verification - Controlling AI Responses",
    category: "Prompt Architecture",
    technologies: ["Response Validation", "Hallucination Detection", "Data Leakage Prevention"],
    preview:
      "AI outputs can't be trusted blindly. I build validation layers that check responses for hallucinated data, PII leakage, and off-task behavior before they reach users. Structured outputs with strict schemas help ensure the AI stays within safe boundaries, and I implement post-processing checks that catch attempts to leak training data or bypass content filters.",
  },
  {
    title: "MCP Server Security",
    description:
      "Focus: Tool Access Control - Building Safe AI Integrations",
    category: "Integration Architecture",
    technologies: ["Model Context Protocol", "API Security", "Access Control"],
    preview:
      "MCP servers are the gateway between AI agents and your systems. I build MCP implementations that use capability-based security, where each tool explicitly defines what it can access. Instead of giving agents broad database credentials, I create narrow interfaces that log every action and fail closed when something unexpected happens.",
  },
  {
    title: "RAG Pipeline Security",
    description:
      "Focus: Data Access and Isolation - Securing Knowledge Retrieval",
    category: "Integration Architecture",
    technologies: ["RAG", "Vector Databases", "Access Control Lists"],
    preview:
      "RAG systems can accidentally leak sensitive documents across user boundaries. I design retrieval pipelines with per-user access controls, where embeddings are tagged with permissions and queries are filtered before they hit the vector database. The AI only sees documents the current user should have access to, and all retrievals are logged for audit.",
  },
  {
    title: "API Authentication for Agents",
    description:
      "Focus: Identity and Authorization - Securing Agent-to-Service Communication",
    category: "Integration Architecture",
    technologies: ["OAuth", "JWT", "Service Accounts", "mTLS"],
    preview:
      "AI agents making API calls need identity management that's more restrictive than human users. I implement service account architectures where each agent gets scoped tokens with minimal permissions and short expiration times. Every API call is authenticated, rate-limited, and tied to a specific agent instance so we can revoke access if something goes wrong.",
  },
  {
    title: "Audit Trail Architecture",
    description:
      "Focus: Observability and Accountability - Tracking AI Actions",
    category: "Integration Architecture",
    technologies: ["Logging", "Monitoring", "Trace Analysis"],
    preview:
      "You can't secure what you can't see. I build comprehensive audit trails that capture every integration point—what the agent read, what tools it called, what data it accessed. These logs are structured for analysis, not just storage, so you can detect anomalies, debug failures, and prove compliance when regulators come asking.",
  },
];
