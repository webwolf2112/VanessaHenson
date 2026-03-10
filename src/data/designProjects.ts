export interface DesignProject {
  title: string;
  description: string;
  type:
    | "UI/UX"
    | "Branding"
    | "Web Design"
    | "Design System"
    | "Illustration"
    | "Prototype";
  tools: string[];
  preview: string;
  imageUrl?: string;
  liveUrl?: string;
  figmaUrl?: string;
  behanceUrl?: string;
  internalUrl?: string;
}

export const designProjects: DesignProject[] = [
  // Add your design projects here
];
