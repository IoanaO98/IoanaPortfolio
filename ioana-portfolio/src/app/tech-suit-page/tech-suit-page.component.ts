import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
} from '@angular/core';
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
export class TechSuitPageComponent implements AfterViewInit {
  techStack: any[] = [];
  title: string = '';
  selected: string = '';
  animateStack: boolean = false;
  currentIndex: number = 0;

  constructor(private el: ElementRef, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('assets/tech-stack.json').subscribe((data) => {
      this.techStack = data.categories;
      this.title = data.title;
    });

    setInterval(() => {
      if (this.animateStack && this.techStack.length > 0) {
        this.currentIndex = (this.currentIndex + 1) % this.techStack.length;
        this.selected = this.techStack[this.currentIndex].name;
      }
    }, 4000);
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.animateStack) {
          this.animateStack = true;
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(this.el.nativeElement);
  }
}
