import { Routes } from '@angular/router';
import { ProjectContentComponent } from './project-content.component';
import { BookstorePageComponent } from './bookstore-page/bookstore-page.component';

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
