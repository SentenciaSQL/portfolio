import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { AllProjectsComponent } from './features/all-projects/all-projects.component';
import { PrivacyComponent } from './features/privacy/privacy.component';
import { FintrackMarketingComponent } from './features/fintrack/fintrack-marketing.component';
import { FintrackPrivacyComponent } from './features/fintrack/fintrack-privacy.component';
import { FintrackShellComponent } from './features/fintrack/fintrack-shell.component';
import { FintrackSupportComponent } from './features/fintrack/fintrack-support.component';
import {
  FINTRACK_SEO,
  FINTRACK_PRIVACY_SEO,
  FINTRACK_SUPPORT_SEO,
  HOME_SEO,
  PRIVACY_SEO,
  PROJECTS_SEO,
} from './core/seo/seo.config';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: HOME_SEO.title,
    data: { seo: HOME_SEO },
  },
  {
    path: 'projects',
    component: AllProjectsComponent,
    title: PROJECTS_SEO.title,
    data: { seo: PROJECTS_SEO },
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
    title: PRIVACY_SEO.title,
    data: { seo: PRIVACY_SEO },
  },
  {
    path: 'fintrack',
    component: FintrackShellComponent,
    children: [
      {
        path: '',
        component: FintrackMarketingComponent,
        title: FINTRACK_SEO.title,
        data: { seo: FINTRACK_SEO },
      },
      {
        path: 'support',
        component: FintrackSupportComponent,
        title: FINTRACK_SUPPORT_SEO.title,
        data: { seo: FINTRACK_SUPPORT_SEO },
      },
      {
        path: 'privacy',
        component: FintrackPrivacyComponent,
        title: FINTRACK_PRIVACY_SEO.title,
        data: { seo: FINTRACK_PRIVACY_SEO },
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
