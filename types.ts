export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  PROJECTS = 'projects',
  CONTACT = 'contact',
  RESUME = 'resume',
}