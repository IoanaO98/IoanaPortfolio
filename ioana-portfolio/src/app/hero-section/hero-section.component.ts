import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-hero-section',
    imports: [MatIconModule],
    templateUrl: './hero-section.component.html',
    styleUrl: './hero-section.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class HeroSectionComponent {}
