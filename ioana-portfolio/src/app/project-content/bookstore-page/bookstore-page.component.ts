import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-bookstore-page',
    imports: [RouterModule, CommonModule],
    templateUrl: './bookstore-page.component.html',
    styleUrl: './bookstore-page.component.scss'
})
export class BookstorePageComponent {
  title = `This is a fully responsive Bookstore web application developed using ASP.NET MVC, SQL Server Management Studio (SSMS), JavaScript, and CSS.`;

  titleLetters: (string | { br: true })[] = [];
  selectedCubeIndex = -1;
  phoneImages: string[] = [
    'assets/images/03.webp',
    'assets/images/02.webp',
    'assets/images/01.webp',
  ];

  currentIndex: number = 0;
  ngOnInit() {
    // Typing animation (already handled)
    const splitByBr = this.title.split(/<br>/g);
    splitByBr.forEach((segment, i) => {
      segment.split('').forEach((char) => this.titleLetters.push(char));
      if (i < splitByBr.length - 1) {
        this.titleLetters.push({ br: true });
      }
    });

    // Auto-scroll images
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.phoneImages.length;
    }, 3000); // Change every 3 seconds
  }

  isBr(item: string | { br: true }): item is { br: true } {
    return typeof item !== 'string' && 'br' in item;
  }
}
