import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  public translateService = inject(TranslateService);

  ngOnInit(): void {
  
  }

  projects = [
    {
      img: 'join.png',
      name: 'Join',
      skills: 'HTML | CSS | JavaScript | Firebase',
      description: 'portfolioDescriptionJoin' ,
      liveTest: 'Live test',
      github: 'Github'
    },
    {
      img: 'el Pollo Loco.png',
      name: 'El Polo Loco',
      skills: 'HTML | CSS | JavaScript',
      description: 'portfolioDescriptionEPL' ,
      liveTest: 'Live test',
      github: 'Github'
    }
  ]
}
