import { Component } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
@Component({
  selector: 'app-tech-suit-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  templateUrl: './tech-suit-page.component.html',
  styleUrl: './tech-suit-page.component.scss',
})
export class TechSuitPageComponent {
  techStack: any[] = [];
  title: string = '';
  selected: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/tech-stack.json').subscribe((data) => {
      this.techStack = data.categories;
      this.title = data.title;
    });
  }
}
