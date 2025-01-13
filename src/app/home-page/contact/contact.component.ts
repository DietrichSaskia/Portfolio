import { FormsModule, NgForm } from '@angular/forms';
import Aos from 'aos';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  isSending: boolean = false;
  messageSent: boolean = false;
  isChecked: boolean = false;
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

  /**
  * Checks if the contact form is valid.
  * Validates that the `name`, `email`, and `message` fields are non-empty
  * and ensures the checkbox (`isChecked`) is checked.
  *
  * @returns {boolean} - Returns `true` if the form is valid, otherwise `false`.
  */
  isFormValid(): boolean {
    return (
      (this.contactData.name?.trim() || '').length > 0 &&
      (this.contactData.email?.trim() || '').length > 0 &&
      (this.contactData.message?.trim() || '').length > 0 &&
      this.isChecked
    );
  }

  /**
  * Configuration for the HTTP POST request used to send form data.
  * @type {Object}
  * @property {string} endPoint - The endpoint URL to send the form data.
  * @property {Function} body - A function that formats the payload as a JSON string.
  * @property {Object} options - Additional options for the HTTP request, including headers.
  */
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

  /**
  * Submits the contact form data via an HTTP POST request.
  *
  * @param {NgForm} ngForm - The Angular form object containing form state and controls.
  */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.messageSent = true;
            ngForm.resetForm();
          },
        error: (error) => {
          console.error('Error:', error);
        },
        complete: () => {
          this.isSending = false;
        },
      });
    }
  }

  /**
  * Closes the overlay and resets the contact form.
  *
  * @param {NgForm} contactForm - The Angular form object to reset.
  */
  closeOverlay(contactForm: NgForm) {
    this.messageSent = false; 
    this.resetForm(contactForm);
  }

  /**
  * Resets the contact form to its initial state.
  *
  * @param {NgForm} contactForm - The Angular form object to reset.
  */
  resetForm(contactForm: NgForm) {
    this.contactData = { name: '', email: '', message: '' };
    contactForm.reset();
  }
}