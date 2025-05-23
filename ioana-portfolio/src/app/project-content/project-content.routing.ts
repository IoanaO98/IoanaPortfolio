import { Routes } from '@angular/router';
import { ProjectContentComponent } from './project-content.component';
import { BookstorePageComponent } from './bookstore-page/bookstore-page.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { TehilaxPageComponent } from './tehilax-page/tehilax-page.component';

export const projectsRoutes: Routes = [
  {
    path: '',
    component: ProjectContentComponent,
  },
  {
    path: 'bookstore-page',
    component: BookstorePageComponent,
  },
  {
    path: 'tehilax-page',
    component: TehilaxPageComponent,
  },
];
