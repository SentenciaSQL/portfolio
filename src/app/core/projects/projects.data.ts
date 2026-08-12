import {ProjectMeta} from './project.model';

export const PROJECTS: ProjectMeta[] = [
  {
    id: 'cmms',
    featured: true,
    stacks: ['Java', 'Spring Boot', 'Angular'],
    links: [
      {kind: 'api', url: 'https://github.com/SentenciaSQL/cmms-api'},
      {kind: 'ui', url: 'https://github.com/SentenciaSQL/cmms-angular-frontend'},
    ],
  },
  {
    id: 'blood',
    featured: true,
    stacks: ['Java', 'Spring Boot', 'Angular'],
    links: [
      {kind: 'repo', url: 'https://github.com/SentenciaSQL/blood-donation-platform'},
    ],
  },
  {
    id: 'spa',
    featured: true,
    stacks: ['Python', 'Angular'],
    links: [
      {kind: 'api', url: 'https://github.com/SentenciaSQL/Beauty-Spa-API'},
      {kind: 'ui', url: 'https://github.com/SentenciaSQL/Beauty-Spa-Frontend'},
    ],
  },
  {
    id: 'stockWise',
    stacks: ['Java', 'Spring Boot', 'Angular', 'Flutter', 'Dart'],
    links: [
      {kind: 'repo', url: 'https://github.com/SentenciaSQL/StockWise-App'},
    ],
  },
  {
    id: 'pagatodo',
    featured: true,
    stacks: ['Angular'],
    links: [
      {kind: 'admin', url: 'https://github.com/SentenciaSQL/pagatodo-admin'},
      {kind: 'ui', url: 'https://github.com/SentenciaSQL/pagatodo'},
    ],
  },
  {
    id: 'tesloShop',
    featured: true,
    stacks: ['React', 'NestJS'],
    links: [
      {kind: 'api', url: 'https://github.com/SentenciaSQL/nest-urbanwear-shop-api'},
      {kind: 'ui', url: 'https://github.com/SentenciaSQL/urbanwear-shop-fontend'},
    ],
  },
  {
    id: 'pokedexKotlin',
    stacks: ['Kotlin', 'Android'],
    links: [
      {kind: 'repo', url: 'https://github.com/SentenciaSQL/Pokedex-Kotlin'},
    ],
  },
  {
    id: 'pokeFlu',
    stacks: ['Flutter', 'Dart', 'Android'],
    links: [
      {kind: 'repo', url: 'https://github.com/SentenciaSQL/PokeFlu'},
    ],
  },
  {
    id: 'learnKids',
    featured: true,
    stacks: ['Flutter', 'Dart'],
    links: [
      {kind: 'repo', url: 'https://github.com/SentenciaSQL/learn_kids_app'},
    ],
  },
  {
    id: 'taskFlow',
    stacks: ['C#', '.NET'],
    links: [
      {kind: 'repo', url: 'https://github.com/SentenciaSQL/TaskFlow'},
    ],
  },
  {
    id: 'adminDashboardFlutter',
    stacks: ['Flutter', 'Dart'],
    links: [
      {kind: 'repo', url: 'https://github.com/SentenciaSQL/admin_dashboard_flutter'},
    ],
  },
  {
    id: 'springChat',
    stacks: ['Java', 'Spring Boot'],
    links: [
      {kind: 'repo', url: 'https://github.com/SentenciaSQL/spring-boot-backend-chat'},
    ],
  },
];

export const FEATURED_PROJECT_IDS = PROJECTS.filter((p) => p.featured).map((p) => p.id);
