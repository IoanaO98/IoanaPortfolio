import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [SlickCarouselModule, CommonModule],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
})
export class ServicesSectionComponent {
  cards = [
    {
      title: 'UI/UX',
      description: 'Creating intuitive and visually appealing designs',
    },
    { title: 'Web Design', description: 'Responsive and engaging websites' },
    { title: 'App Design', description: 'Mobile-friendly interfaces' },
    { title: 'Prototyping', description: 'Interactive design flows' },
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };
}
