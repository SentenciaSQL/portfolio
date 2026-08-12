import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home/home.component';
import {AllProjectsComponent} from './features/all-projects/all-projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: AllProjectsComponent },
  { path: '**', redirectTo: '' },
];
