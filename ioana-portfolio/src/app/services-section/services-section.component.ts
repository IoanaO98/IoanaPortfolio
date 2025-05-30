import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  CarouselComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  CarouselControlComponent,
} from '@coreui/angular';

@Component({
  selector: 'app-services-section',
  imports: [
    CommonModule,
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselControlComponent,
  ],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
})
export class ServicesSectionComponent {
  activeIndex = 0;
  visibleCount = 3;

  cards = [
    {
      id: 1,
      title: 'UI/UX',
      description: 'Creating intuitive and visually appealing designs',
    },
    {
      id: 2,
      title: 'Web Design',
      description: 'Responsive and engaging websites',
    },
    { id: 3, title: 'App Design', description: 'Mobile-friendly interfaces' },
    { id: 4, title: 'Prototyping', description: 'Interactive design flows' },
    { id: 5, title: 'Wireframing', description: 'Design system creation' },
  ];

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.cards.length;
  }

  prevSlide() {
    this.activeIndex =
      (this.activeIndex - 1 + this.cards.length) % this.cards.length;
  }

  goToSlide(index: number) {
    this.activeIndex = index;
  }
}
