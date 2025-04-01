import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
  },
  {
    path: 'project',
    loadChildren: () =>
      import('./project-content/project-content.routing').then(
        (r) => r.projectsRoutes
      ),
  },
  //   {
  //     path: 'projects',
  //     loadComponent: () =>
  //       import('./project-content/project-content.component').then(
  //         (m) => m.ProjectContentComponent
  //       ),
  //     children: [
  //       {
  //         path: 'bookstore-page',
  //         loadComponent: () =>
  //           import(
  //             './project-content/bookstore-page/bookstore-page.component'
  //           ).then((m) => m.BookstorePageComponent),
  //       },
  //     ],
  //   },
];
