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
    description: "Focus: Visibility and Control - Expanding the Perimeter",
    category: "Defensive Engineering",
    technologies: ["AI Security", "Risk Management", "Threat Modeling"],
    preview:
      "As AI agents and integrations grow, so does the potential for risk. The key is identifying and securing new entry points, ensuring data access remains monitored and controlled.",
  },
  {
    title: "Shadow AI",
    description: "Focus: Governance and Education - Managing the Unknown",
    category: "Defensive Engineering",
    technologies: ["Security Governance", "Policy Management", "AI Detection"],
    preview:
      "Unmanaged AI tools can create blind spots in a security posture. The key is to understand the risks and doing through analysis of any new tools before using them in any environment",
  },
  {
    title: "Agent Autonomy Risks",
    description: "Focus: Trust and Guardrails - Ensuring Secure Workflows",
    category: "Defensive Engineering",
    technologies: ["Access Control", "Credential Management", "AI Governance"],
    preview:
      "Agents with high-level credentials require robust guardrails. By using techniques such as credential management, access controls and human in the loop you can ensure autonomous systems act only within their intended scope.",
  },
  {
    title: "Novel Vector Defense",
    description: "Focus: Resilience and Awareness - Protecting Against the New",
    category: "Defensive Engineering",
    technologies: ["Prompt Security", "AI Defense", "Attack Prevention"],
    preview:
      "Ai introduces an entire new scope of attack vectors from prompt injection and cascading failures to data poisoning. Security is multi layered and it's important to understand the current vectors as well as continuous learning to continue to evolve alongside of AI",
  },
  {
    title: "Defensive System Prompts",
    description:
      "Focus: Boundaries and Access Control - Securing Agent Behavior",
    category: "Prompt Architecture",
    technologies: ["System Prompts", "agents.md", "File Access Control"],
    preview:
      "System prompts are your first line of defense in controlling AI behavior starting with utilizing consistent patters within agents.md files with proper security.  I design prompts and skills that explicitly define what files and resources an agent can access, preventing it from reading sensitive configuration or credentials",
  },
  {
    title: "Prompt Injection Mitigation",
    description: "Focus: Input Sanitization - Preventing Instruction Hijacking",
    category: "Prompt Architecture",
    technologies: [
      "Prompt Security",
      "Input Validation",
      "Instruction Isolation",
    ],
    preview:
      "User inputs are attack vectors waiting to happen. I structure prompts to clearly separate sanitized user-provided content from system instructions using delimiters, prefixes, and XML tags. By treating all user input as untrusted data rather than instructions, I prevent attackers from hijacking the AI's behavior through crafted prompts.",
  },
  {
    title: "Output Validation",
    description: "Focus: Trust and Verification - Controlling AI Responses",
    category: "Prompt Architecture",
    technologies: [
      "Response Validation",
      "Hallucination Detection",
      "Data Leakage Prevention",
    ],
    preview:
      "AI outputs can't be trusted blindly. It's important to have validation layers that check responses for hallucinated data, PII leakage, and off-task behavior before they reach users. Structured outputs with strict schemas help ensure the AI stays within safe boundaries, ensuring post-processing checks that catch attempts to leak training data or bypass content filters.",
  },
  {
    title: "MCP Server Security",
    description: "Focus: Tool Access Control - Building Safe AI Integrations",
    category: "Integration Architecture",
    technologies: ["Model Context Protocol", "API Security", "Access Control"],
    preview:
      "MCP servers are the gateway between AI agents and your systems. It's critical to use MCP implementations that use capability-based security, where each tool explicitly defines what it can access. Never give agents broad credentials, always create narrow interfaces that log every action and fail closed when something unexpected happens.",
  },
  {
    title: "API Authentication for Agents",
    description:
      "Focus: Identity and Authorization - Securing Agent-to-Service Communication",
    category: "Integration Architecture",
    technologies: ["OAuth", "JWT", "Service Accounts", "mTLS"],
    preview:
      "AI agents making API calls need identity management that's more restrictive than human users. By implementing service account architectures where each agent gets scoped tokens with minimal permissions and short expiration times can save your company from a major incident. Every API call is authenticated, rate-limited, and tied to a specific agent instance so we can revoke access if something goes wrong.",
  },
  {
    title: "Audit Trail Architecture",
    description:
      "Focus: Observability and Accountability - Tracking AI Actions",
    category: "Integration Architecture",
    technologies: ["Logging", "Monitoring", "Trace Analysis"],
    preview:
      "You can't secure what you can't see. Audit trails are a critical to capture every integration point—what the agent read, what tools it called, what data it accessed. These logs are structured for analysis, not just storage, so you can detect anomalies, debug failures, and prove compliance.",
  },
];
