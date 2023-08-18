import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  SignupForm: FormGroup ;
  ngOnInit() {
    this.SignupForm = new FormGroup({
      'userData': new FormGroup({
        'firstName': new FormControl(null, [Validators.required]),
        'lastName': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'phoneNumber': new FormControl(null, [Validators.required, Validators.min(6)]),
        'password': new FormControl(null, [Validators.required, Validators.min(6)]),
      })
    });
  } 

  onSubmit() {
    console.log(this.SignupForm);
  }
}

