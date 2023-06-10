import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  editProfileForm: FormGroup;
  isSubmitted: boolean = false;
  successMessage: String = "Your profile details have been updated successfully.";

  iName: String = "Arun Prasath";
  iEmail: String = "arun@mail.com";
  iBio: String = "Highly motivated BSc (Hons) Computer Science in Software Engineering undergraduate with a passion for developing innovative software solutions.";

  ngOnInit(): void {
    this.editProfileForm = new FormGroup({
      name: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(3)
        ],
      ),
      email: new FormControl(
        null,
        [
          Validators.required,
          Validators.email
        ],
      ),
      bio: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(500)
        ]
      ),
    });

    this.editProfileForm.setValue({
      name: this.iName,
      email: this.iEmail,
      bio: this.iBio
    })
  }

  onSubmit() {
    this.isSubmitted = true;

    this.iName = this.editProfileForm.value.name;
    this.iEmail = this.editProfileForm.value.email;
    this.iBio = this.editProfileForm.value.bio;
  }
}
