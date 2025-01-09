import { FormsModule, NgForm } from '@angular/forms';
import Aos from 'aos';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  isSending: boolean = false;
  messageSent: boolean = false;
  isChecked: boolean = false;
  mailTest = true;
  http = inject(HttpClient);

  public translateService = inject(TranslateService);
  
  constructor() {
    Aos.init();
        
    }
  
  contactData = {
    name: "",
    email: "",
    message: "",
  }

  isFormValid(): boolean {
    return (
      (this.contactData.name?.trim() || '').length > 0 &&
      (this.contactData.email?.trim() || '').length > 0 &&
      (this.contactData.message?.trim() || '').length > 0 &&
      this.isChecked
    );
  }

  post = {
    endPoint: 'https://saskia-dietrich.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (respone) => {
            this.messageSent = true;
            ngForm.resetForm();
          },
          error: (error) => {
            console.error('Error:', error);
          },
          complete: () => {
            this.isSending = false;
            console.info('send post complete');
          },
        });
      } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
          this.messageSent = true;
          ngForm.resetForm();
          console.info('send post complete');
      }
    }

  closeOverlay(contactForm: NgForm) {
    this.messageSent = false; 
    this.resetForm(contactForm);
  }
  
  resetForm(contactForm: NgForm) {
    this.contactData = { name: '', email: '', message: '' };
    contactForm.reset();
  }
}