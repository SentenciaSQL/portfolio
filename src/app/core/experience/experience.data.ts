export interface ExperienceMeta {
  id: 'oneseven' | 'ceshop' | 'indra' | 'excellent';
  company: string;
  location?: string;
  role: string;
  technologies: string[];
}

export const EXPERIENCE: ExperienceMeta[] = [
  {
    id: 'oneseven',
    company: 'OneSeven Tech',
    location: 'USA',
    role: 'Senior Full Stack Developer',
    technologies: ['Java', 'Angular', 'AWS', 'JWT'],
  },
  {
    id: 'ceshop',
    company: 'The CE Shop',
    location: 'USA',
    role: 'Senior Systems Engineer',
    technologies: ['Java', 'Spring Boot', 'Angular', 'React', 'AWS', 'PostgreSQL'],
  },
  {
    id: 'indra',
    company: 'Indra Sistemas',
    role: 'Senior Systems Engineer',
    technologies: ['Java', 'Angular', 'React', 'Oracle', 'PL/SQL', 'Flutter'],
  },
  {
    id: 'excellent',
    company: 'Excellent Integrity Solutions',
    role: 'Full Stack Developer',
    technologies: ['Java EE', 'PHP', 'WordPress', 'Angular', 'Oracle', 'PL/SQL'],
  },
];
