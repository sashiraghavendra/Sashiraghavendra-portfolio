export type Theme = 'dark' | 'white';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  featuredBadge?: string;
  category: 'Full Stack' | 'Java & Backend' | 'Web Systems';
  techStack: string[];
  metrics: {
    icon: string;
    label: string;
  }[];
  description: string;
  features: string[];
  architecture: string[];
  githubUrl: string;
  demoAvailable?: boolean;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    levelName: 'Advanced' | 'Proficient' | 'Intermediate';
    percentage: number;
    iconSvg?: string;
    color: string;
  }[];
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  badge?: string;
  badgeType?: 'cgpa' | 'cert' | 'intern';
  description: string;
  points: string[];
  techStack?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  partner?: string;
  issueDate: string;
  credentialUrl: string;
  skills: string[];
  description: string;
}
