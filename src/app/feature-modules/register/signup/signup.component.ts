import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  SignupForm: FormGroup;
  openModal: boolean = true;
  constructor() {
    this.SignupForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      agreement: new FormControl(null, [Validators.requiredTrue]),
    });
  }

  onSubmit() {
    this.openModal = true;
    console.log(this.openModal);
    
  }
  get firstName() {
    return this.SignupForm.controls.firstName;
  }
  get lastName() {
    return this.SignupForm.controls.lastName;
  }
  get email() {
    return this.SignupForm.controls.email;
  }
  get phoneNumber() {
    return this.SignupForm.controls.phoneNumber;
  }
  get password() {
    return this.SignupForm.controls.password;
  }
  get agreement() {
    return this.SignupForm.controls.agreement;
  }
  quitModal(){
    this.openModal=false;
  }
}

