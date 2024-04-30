import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateService } from '../../shared/services/translate-service/translate.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  http = inject(HttpClient);
  translateService = inject(TranslateService);

  mailSend = false;
  mailTest = false;

  post = {
    endPoint: 'https://tobias-roeske.ch/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  contactData = {
    name: '',
    email: '',
    message: '',
    checked: false
  }
 
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.mailSend = true;
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            console.info('send post complete')
            setTimeout(() => this.mailSend = false, 3000)
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.mailSend = true;
      ngForm.resetForm();
      setTimeout(() => this.mailSend = false, 3000)
    }
  }
}
