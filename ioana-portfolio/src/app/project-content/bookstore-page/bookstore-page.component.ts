import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bookstore-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './bookstore-page.component.html',
  styleUrl: './bookstore-page.component.scss',
})
export class BookstorePageComponent {
  title = `This is a fully responsive Bookstore web application developed using ASP.NET MVC, SQL Server Management Studio (SSMS), JavaScript, and CSS.<br>
  The main page showcases a dynamic list of books fetched from a backend database, styled with custom CSS for a clean and modern user interface.<br>
  Each book is displayed as a card component, featuring the title, author, pricing details (including discounts), and a call-to-action button for more details.<br>
  The layout is structured using a grid system that ensures responsiveness across different screen sizes.`;

  titleLetters: (string | { br: true })[] = [];

  constructor() {
    // Split characters but preserve <br> as a special object
    const splitByBr = this.title.split(/<br>/g);
    splitByBr.forEach((segment, i) => {
      segment.split('').forEach((char) => this.titleLetters.push(char));
      if (i < splitByBr.length - 1) {
        this.titleLetters.push({ br: true });
      }
    });
  }
  isBr(item: string | { br: true }): item is { br: true } {
    return typeof item !== 'string' && 'br' in item;
  }
}
