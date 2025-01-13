import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() languages: string[] = [];
  @Output() languageChange = new EventEmitter<string>();

  currentLanguage: string = 'en';

  /**
  * Changes the current language of the application.
  * Updates the `currentLanguage` property and emits the new language value
  * using the `languageChange` event emitter.
  *
  * @param {string} lang - The language code to switch to (e.g., 'en', 'de').
  */
  changeLanguage(lang: string) {
    this.currentLanguage = lang;
    this.languageChange.emit(lang);
  } 
}
