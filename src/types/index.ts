export interface Skill {
  name: string;
  years: number;
  category: SkillCategory;
  icon: string;
}

export type SkillCategory = 
  | 'Cloud Providers'
  | 'Performance Engineering'
  | 'Networking'
  | 'Security'
  | 'Containers'
  | 'Storage'
  | 'Databases'
  | 'IaC'
  | 'CI/CD'
  | 'Monitoring'
  | 'Programming'
  | 'OS & Infra';

export interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  university: string;
  country: string;
  startDate: string;
  endDate: string;
}

export interface Publication {
  title: string;
  authors: string[];
  journal: string;
  year: string;
  url: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  expiryDate: string | null;
  credentialId: string;
  url: string;
}

export interface Hobby {
  name: string;
  icon: string;
  description: string;
}

export interface ArchitectureDiagram {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}