export const STACK_FILTERS = [
  'Java',
  'Spring Boot',
  'Angular',
  'React',
  'NestJS',
  'Python',
  'Kotlin',
  'Android',
  'Flutter',
  'Dart',
  'C#',
  '.NET',
  'PHP',
] as const;

export type StackFilter = (typeof STACK_FILTERS)[number];
