import { Routes } from '@angular/router';
import { Projects } from './components/projects/projects';
import { Home } from './components/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects', component: Projects },
];
