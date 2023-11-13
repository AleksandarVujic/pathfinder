import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink, RouterModule } from '@angular/router';

import { DarkModeToggleComponent } from '../../shared/dark-mode-toggle/dark-mode-toggle.component';

@Component({
  selector: 'pathfinder-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  standalone: true,
  imports: [
    RouterLink,
    DarkModeToggleComponent,
    BrowserAnimationsModule,
    RouterModule,
  ],
})
export class NavigationComponent {
  isHamburgerMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
  }

  closeMenu(): void {
    this.isHamburgerMenuOpen = false;
  }
}
