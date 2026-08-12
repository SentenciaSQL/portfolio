import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home/home.component';
import {AllProjectsComponent} from './features/all-projects/all-projects.component';
import {HOME_SEO, PROJECTS_SEO} from './core/seo/seo.config';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: HOME_SEO.title,
    data: {seo: HOME_SEO},
  },
  {
    path: 'projects',
    component: AllProjectsComponent,
    title: PROJECTS_SEO.title,
    data: {seo: PROJECTS_SEO},
  },
  { path: '**', redirectTo: '' },
];
