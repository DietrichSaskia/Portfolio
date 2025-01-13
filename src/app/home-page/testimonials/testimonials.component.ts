import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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
    }
  ];
  
  testimonialIndex: number = 0;
  
  /**
 * Moves to the next feedback in the testimonials array.
 * If the current testimonial is the last one, it loops back to the first.
 */
  nextFeedback() {
    if (this.testimonialIndex === this.testimonials.length - 1) {
      this.testimonialIndex = 0;
    } else {
      this.testimonialIndex++;
    }
  }
  
  /**
 * Moves to the previous feedback in the testimonials array.
 * If the current testimonial is the first one, it loops back to the last.
 */
  prevFeedback() {
    if (this.testimonialIndex === 0) {
      this.testimonialIndex = this.testimonials.length - 1;
    } else {
      this.testimonialIndex--;
    }
  }
}
