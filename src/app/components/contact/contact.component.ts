import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  isSubmitted: boolean = false;
  successMessage: String = "Your message has been sent successfully.";

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ),
      email: new FormControl(
        null,
        [
          Validators.required,
          Validators.email
        ],
      ),
      message: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(200)
        ]
      ),
    });
  }

  onSubmit() {
    this.contactService.sendData(this.contactForm.value);

    if (this.contactService.isDone) {
      this.isSubmitted = true;
      this.contactForm.reset()
    }
  }
}
