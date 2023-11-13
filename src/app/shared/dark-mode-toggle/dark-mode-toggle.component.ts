import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.css'],
  standalone: true,
})
export class DarkModeToggleComponent {
  isLightTheme: boolean = true;

  constructor(private themeService: ThemeService) {}

  setChecked(isLightTheme: boolean): void {
    this.isLightTheme = isLightTheme;
    this.themeService.toggleTheme();
  }
}
