export const SITE = {
  name: 'Andrés Frías',
  shortName: 'AF',
  role: 'Senior Full Stack Software Engineer',
  email: 'afriasdev@gmail.com',
  mailto: 'mailto:afriasdev@gmail.com',
  github: 'https://github.com/SentenciaSQL',
  githubLabel: 'github.com/SentenciaSQL',
  linkedin: 'https://www.linkedin.com/in/andres-frias-guzman/',
  linkedinLabel: '/in/andres-frias-guzman',
  portfolio: 'https://andresfrias.dev',
  cv: '/Andres_Frias_CV.pdf',
  location: 'Santo Domingo, DR',
  timezone: 'GMT-4',
  timezoneName: 'America/Santo_Domingo',
} as const;

export const HERO_TECHS = [
  'Java',
  'Spring Boot',
  'Angular',
  'React',
  'TypeScript',
  '.NET',
  'PostgreSQL',
  'Docker',
  'AWS',
] as const;

export const NAV_ITEMS = [
  {id: 'home', labelKey: 'nav.home'},
  {id: 'about', labelKey: 'nav.about'},
  {id: 'experience', labelKey: 'nav.experience'},
  {id: 'stack', labelKey: 'nav.stack'},
  {id: 'projects', labelKey: 'nav.projects'},
  {id: 'contact', labelKey: 'nav.contact'},
] as const;
