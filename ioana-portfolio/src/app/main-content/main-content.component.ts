import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent implements OnInit {
  showTitle = false;
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
  ].map((skill, index) => {
    const delayIn = index * 0.3;
    const delayOut = delayIn + 1.5;

    return {
      name: skill,
      style: {
        top: `${Math.random() * 80 + 5}%`,
        left: `${Math.random() * 80 + 5}%`,
        fontSize: `${Math.random() * 20 + 14}px`,
        '--delay-in': `${delayIn}s`,
        '--delay-out': `${delayOut}s`,
      },
    };
  });
  ngOnInit(): void {
    const totalDelay = this.skills.length * 0.3 + 2.5;

    setTimeout(() => {
      this.showTitle = true;
    }, totalDelay * 1000);
  }
}
