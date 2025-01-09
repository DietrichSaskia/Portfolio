import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() languages: string[] = [];
  @Output() languageChange = new EventEmitter<string>();

  currentLanguage: string = 'en';

  changeLanguage(lang: string) {
    this.currentLanguage = lang;
    this.languageChange.emit(lang);
  }
}
