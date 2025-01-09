import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  public translateService = inject(TranslateService);

  ngOnInit(): void {
  
  }

  skills = [
    {
      img: 'html.png',
      description: 'HTML'
    },
    {
      img: 'css.png',
      description: 'CSS'
    },
    {
      img: 'javaScript.png',
      description: 'JavaScipt'
    },
    {
      img: 'Typescript.png',
      description: 'TypeScript'
    },
    {
      img: 'angular.png',
      description: 'Angular'
    },
    {
      img: 'firebase.png',
      description: 'Firebase'
    },
    {
      img: 'git.png',
      description: 'Git'
    },
    {
      img: 'Api.png',
      description: 'Rest Api'
    },
    {
      img: 'scrum.png',
      description: 'Scrum'
    },
    {
      img: 'material Design.png',
      description: 'Material Design'
    },
    {
      img: 'continually learning.png',
      description: 'continually learning'
    }
  ]
}
