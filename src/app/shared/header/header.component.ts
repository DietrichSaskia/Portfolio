import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() languages: string[] = [];
  @Output() languageChange = new EventEmitter<string>();

  currentLanguage: string = 'en';

  /**
  * Changes the current language of the application.
  * Updates the `currentLanguage` property, emits the new language value,
  * and closes the mobile menu if it is open.
  *
  * @param {string} lang - The language code to switch to (e.g., 'en', 'de').
  */
  changeLanguage(lang: string) {
    this.currentLanguage = lang;
    this.languageChange.emit(lang);
    this.closeMobileMenu();
  }

  isMobileMenuOpen: boolean = false;

  /**
  * Toggles the mobile menu's open/close state.
  * If the menu is open, it will be closed; if it is closed, it will be opened.
  */
  openMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  /**
  * Closes the mobile menu by setting its state to `false`.
  */
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
