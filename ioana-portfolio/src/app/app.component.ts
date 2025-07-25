import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, MatIconModule, CommonModule],
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
    iconRegistry.addSvgIcon(
      'Reporting',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/Reporting.svg')
    );
    iconRegistry.addSvgIcon(
      'schedule',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/schedule.svg')
    );
    iconRegistry.addSvgIcon(
      'roles',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/roles.svg')
    );
    iconRegistry.addSvgIcon(
      'laptop',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/laptop.svg')
    );
  }
}
