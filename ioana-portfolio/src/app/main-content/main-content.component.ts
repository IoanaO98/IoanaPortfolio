import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProjectContentComponent } from '../project-content/project-content.component';
import { MatButtonModule } from '@angular/material/button';
import { TechSuitPageComponent } from '../tech-suit-page/tech-suit-page.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    ProjectContentComponent,
    MatButtonModule,
    TechSuitPageComponent,
    ContactSectionComponent,
    HeroSectionComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent implements OnInit {
  showTitle = false;
  showFinalLayout = false;
  title = 'Full Stack Developer.';
  titleLetters = this.title.split('');

  skills = [
    'Typescript',
    'Javascript',
    'Angular',
    '.Net',
    'Bootstrap',
    'Entity Framework',
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

    // Step 1: show animated title
    setTimeout(() => {
      this.showTitle = true;
    }, totalDelay * 1000);

    // Step 2: after title animates, hide all and show final layout
    setTimeout(() => {
      this.showTitle = false;
      this.showFinalLayout = true;
    }, totalDelay * 1000 + this.titleLetters.length * 150 + 1000);
  }
}
