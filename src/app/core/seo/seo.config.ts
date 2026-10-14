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
  'Andrés Frías, Senior Full Stack Software Engineer, Java, Spring Boot, Angular, React, TypeScript, .NET, Remote LATAM, Portfolio';

export const HOME_SEO: PageSeo = {
  path: '/',
  title: 'Andrés Frías | Senior Full Stack Software Engineer',
  description:
    'Senior Full Stack Software Engineer with 13+ years building enterprise applications, SaaS platforms, and scalable systems with Java, Spring Boot, Angular, React, and .NET. Remote LATAM → US.',
  keywords: DEFAULT_KEYWORDS,
};

export const PROJECTS_SEO: PageSeo = {
  path: '/projects',
  title: 'Projects | Andrés Frías — Senior Software Engineer',
  description:
    'Selected projects by Andrés Frías: Java, Spring Boot, Angular, FastAPI, and mobile apps across enterprise CMMS, e-commerce, LMS, and social-impact platforms.',
  keywords: `${DEFAULT_KEYWORDS}, Projects, Portfolio Projects`,
};

export const PRIVACY_SEO: PageSeo = {
  path: '/privacy',
  title: 'Privacy Policy | Andrés Frías',
  description:
    'Privacy policy for andresfrias.dev: how language preferences, analytics, and contact interactions are handled on this personal portfolio site.',
  keywords: `${DEFAULT_KEYWORDS}, Privacy Policy`,
};

export const FINTRACK_SEO: PageSeo = {
  path: '/fintrack',
  title: 'FinTrack | Personal Finance, in Balance',
  description:
    'Track income, expenses, budgets, and financial activity with FinTrack, a clear personal finance app.',
  keywords:
    'FinTrack, personal finance, budget tracker, income, expenses, finance app',
};

export const FINTRACK_SUPPORT_SEO: PageSeo = {
  path: '/fintrack/support',
  title: 'FinTrack Support | Help Center',
  description:
    'Get help with FinTrack, find answers to common questions, or contact the support team.',
  keywords: 'FinTrack support, help center, finance app support, contact',
};

export const FINTRACK_PRIVACY_SEO: PageSeo = {
  path: '/fintrack/privacy',
  title: 'FinTrack Privacy Policy',
  description:
    'Learn how FinTrack processes account information and financial records, and how to request deletion of your data.',
  keywords:
    'FinTrack privacy policy, financial data, account data, data deletion',
};

export const ROUTE_SEO: Record<string, PageSeo> = {
  '': HOME_SEO,
  projects: PROJECTS_SEO,
  privacy: PRIVACY_SEO,
  fintrack: FINTRACK_SEO,
  'fintrack/support': FINTRACK_SUPPORT_SEO,
  'fintrack/privacy': FINTRACK_PRIVACY_SEO,
};

export const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Andrés Frías',
  alternateName: 'Andres Frias',
  jobTitle: 'Senior Full Stack Software Engineer',
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
    'React',
    'TypeScript',
    '.NET',
    'REST APIs',
    'PostgreSQL',
    'Oracle',
    'AWS',
    'Docker',
    'Clean Architecture',
    'Full Stack Engineering',
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
