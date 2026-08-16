export type StackCategoryId =
  | 'backend'
  | 'frontend'
  | 'mobile'
  | 'databases'
  | 'cloud'
  | 'architecture';

export interface StackCategory {
  id: StackCategoryId;
  items: readonly string[];
}

export const STACK_CATEGORIES: readonly StackCategory[] = [
  {
    id: 'backend',
    items: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'C# / .NET',
      'Kotlin',
      'Python / FastAPI',
      'PHP',
      'NestJS',
      'REST APIs',
      'JWT',
      'Microservices',
    ],
  },
  {
    id: 'frontend',
    items: [
      'Angular',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Angular Material',
      'PrimeNG',
      'DaisyUI',
    ],
  },
  {
    id: 'mobile',
    items: ['Flutter', 'Dart', 'Kotlin', 'Android', 'Capacitor'],
  },
  {
    id: 'databases',
    items: [
      'PostgreSQL',
      'Oracle',
      'PL/SQL',
      'SQL Server',
      'MySQL',
      'Redis',
      'Flyway / Liquibase',
    ],
  },
  {
    id: 'cloud',
    items: ['AWS (EC2 / S3 / RDS)', 'Docker', 'GitHub Actions', 'CI/CD'],
  },
];
