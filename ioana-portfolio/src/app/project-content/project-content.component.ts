import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { projectsRoutes } from './project-content.routing';

@Component({
  selector: 'app-project-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './project-content.component.html',
  styleUrl: './project-content.component.scss',
})
export class ProjectContentComponent {}
