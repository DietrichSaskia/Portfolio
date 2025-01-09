import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  public translateService = inject(TranslateService);

  testimonials = [
    {
      feedback: "feedbackText1",
      from: "A. Hardtke - Team Partner",
      img: "Hardtke_Alexander.jpg",
    },
    {
      feedback: "feedbackText2",
      from: "E. Eichinger - Team Partner",
      img: "1pic.png",
    },
    {
      feedback: "feedbackText3",
      from: "I. Nuber - Team Partner",
      img: "2pic.png",
    }
  ];
  
  testimonialIndex: number = 0;
  
  nextFeedback() {
    if (this.testimonialIndex === this.testimonials.length - 1) {
      this.testimonialIndex = 0;
    } else {
      this.testimonialIndex++;
    }
  }
  
  prevFeedback() {
    if (this.testimonialIndex === 0) {
      this.testimonialIndex = this.testimonials.length - 1;
    } else {
      this.testimonialIndex--;
    }
  }
}
