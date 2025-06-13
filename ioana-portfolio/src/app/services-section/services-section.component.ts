import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
interface Circle {
  top: number;
  left: number;
  size: number;
  color: string;
}

interface Card {
  title: string;
  description: string;
  circles: Circle[];
}

@Component({
  selector: 'app-services-section',
  imports: [CommonModule, MatIconModule, CarouselModule],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss',
})
export class ServicesSectionComponent {
  cards: Card[] = [
    {
      title: 'UI/UX',
      description: 'Creating intuitive and visually appealing designs',
      circles: [
        { top: 100, left: -40, size: 140, color: '#ec4899' },
        { top: -50, left: 100, size: 100, color: '#9333ea' },
        { top: 50, left: 120, size: 120, color: '#f472b6' },
      ],
    },
    {
      title: 'Web Design',
      description: 'Responsive and engaging websites',
      circles: [
        { top: 100, left: -40, size: 140, color: '#9333ea' },
        { top: -50, left: 100, size: 100, color: '#ec4899' },
        { top: 50, left: 120, size: 120, color: '#8b5cf6' },
      ],
    },
    {
      title: 'App Design',
      description: 'Mobile-friendly interfaces',
      circles: [
        { top: 100, left: -40, size: 140, color: '#8b5cf6' },
        { top: -50, left: 100, size: 100, color: '#f472b6' },
        { top: 50, left: 120, size: 120, color: '#9333ea' },
      ],
    },
    {
      title: 'Prototyping',
      description: 'Interactive design flows',
      circles: [
        { top: 100, left: -40, size: 140, color: '#f472b6' },
        { top: -50, left: 100, size: 100, color: '#ec4899' },
        { top: 50, left: 120, size: 120, color: '#8b5cf6' },
      ],
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    margin: 24,
    center: true,
    nav: true,
    dots: false,
    navText: ['‹', '›'],
    responsive: {
      0: { items: 1, center: false },
      640: { items: 2, center: false },
      768: { items: 3, center: false },
      1024: { items: 4, center: true },
    },
    smartSpeed: 600,
  };
}
