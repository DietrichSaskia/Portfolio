import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() languages: string[] = [];
  @Output() languageChange = new EventEmitter<string>();

  currentLanguage: string = 'en';

  changeLanguage(lang: string) {
    this.currentLanguage = lang;
    this.languageChange.emit(lang);
  }

  isMobileMenuOpen: boolean = false;

  openMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
