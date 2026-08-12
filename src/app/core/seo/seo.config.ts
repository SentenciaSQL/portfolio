export interface PageSeo {
  title: string;
  description: string;
  path: string;
  keywords?: string;
}

export const SITE_URL = 'https://andresfrias.dev';
export const SITE_NAME = 'Andrés Frías';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const DEFAULT_KEYWORDS =
  'Andrés Frías, Java, Spring Boot, Angular, Senior Software Engineer, Backend Engineer, Remote LATAM, Portfolio';

export const HOME_SEO: PageSeo = {
  path: '/',
  title: 'Andrés Frías | Senior Java & Spring Boot Engineer',
  description:
    'Senior Java / Spring Boot Engineer with 13+ years building enterprise backend systems, scalable REST APIs, and Angular frontends. Remote LATAM → US.',
  keywords: DEFAULT_KEYWORDS,
};

export const PROJECTS_SEO: PageSeo = {
  path: '/projects',
  title: 'Projects | Andrés Frías — Senior Software Engineer',
  description:
    'Selected projects by Andrés Frías: Java, Spring Boot, Angular, FastAPI, and mobile apps across enterprise CMMS, e-commerce, LMS, and social-impact platforms.',
  keywords: `${DEFAULT_KEYWORDS}, Projects, Portfolio Projects`,
};

export const ROUTE_SEO: Record<string, PageSeo> = {
  '': HOME_SEO,
  projects: PROJECTS_SEO,
};

export const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Andrés Frías',
  alternateName: 'Andres Frias',
  jobTitle: 'Senior Software Engineer',
  description: HOME_SEO.description,
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  email: 'mailto:afriasdev@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Santo Domingo',
    addressCountry: 'DO',
  },
  sameAs: [
    'https://github.com/SentenciaSQL',
    'https://www.linkedin.com/in/andres-frias-guzman/',
  ],
  knowsAbout: [
    'Java',
    'Spring Boot',
    'Angular',
    'REST APIs',
    'PostgreSQL',
    'Oracle',
    'Clean Architecture',
    'Backend Engineering',
  ],
};

export const WEBSITE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: HOME_SEO.description,
  inLanguage: ['en', 'es'],
  publisher: {
    '@type': 'Person',
    name: SITE_NAME,
  },
};
