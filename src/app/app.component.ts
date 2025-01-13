import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, TranslateModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  languages = [ 'de', 'en'];
  public translateService = inject(TranslateService);

  /**
  * Initializes the component and sets the default language for translations.
  * Retrieves the language preference from localStorage if available,
  * otherwise defaults to 'en'. The default language is then set and used by
  * the translation service.
  *
  * @returns {void}
  */
  ngOnInit(): void {
    const defaultLanguage = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(defaultLanguage);
    this.translateService.use(defaultLanguage);
  }

  /**
  * Changes the application's current language.
  * Updates the language used by the translation service and saves the preference
  * in localStorage for future visits.
  *
  * @param {string} lang - The language code to switch to (e.g., 'en', 'de').
  */
  changeLanguage(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
  }
}