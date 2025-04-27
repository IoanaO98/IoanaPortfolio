import { Component } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tech-suit-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tech-suit-page.component.html',
  styleUrl: './tech-suit-page.component.scss',
})
export class TechSuitPageComponent {
  techStack: any[] = [];
  title: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/tech-stack.json').subscribe((data) => {
      this.techStack = data.categories;
      this.title = data.title;
    });
  }
}
