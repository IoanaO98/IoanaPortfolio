import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ioana-portfolio';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'contact',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/contact.svg')
    );
    iconRegistry.addSvgIcon(
      'chip-network',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/chip-network.svg')
    );
    iconRegistry.addSvgIcon(
      'connected-dot',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/connected-dot.svg')
    );
  }
}
