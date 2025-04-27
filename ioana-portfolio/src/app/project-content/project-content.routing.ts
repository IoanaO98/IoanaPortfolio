import { Routes } from '@angular/router';
import { ProjectContentComponent } from './project-content.component';
import { BookstorePageComponent } from './bookstore-page/bookstore-page.component';
import { MainContentComponent } from '../main-content/main-content.component';

export const projectsRoutes: Routes = [
  {
    path: '',
    component: ProjectContentComponent,
  },
  {
    path: 'bookstore-page',
    component: BookstorePageComponent,
  },
];
