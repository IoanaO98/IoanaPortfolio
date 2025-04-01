import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  title = 'Full Stack Developer.';
  titleLetters = this.title.split('');

  skills = [
    'Typescript',
    'Javascript',
    'Angular',
    '.Net',
    'Bootstrap',
    'EntityFramework',
    'Azure',
    'Tailwind',
    'C#',
    'HTML',
    'CSS',
    'GitHub',
  ].map((skill) => ({
    name: skill,
    style: {
      top: `${Math.random() * 80 + 5}%`,
      left: `${Math.random() * 80 + 5}%`,
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${Math.random() * 20 + 14}px`,
    },
  }));
}
