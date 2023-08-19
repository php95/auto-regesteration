import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  SignupForm: FormGroup;
  verifyForm: FormGroup;
  openModal: boolean = false;
  @Output() verifyEvent = new EventEmitter()
  constructor(private modalService: NgbModal) {
    this.SignupForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      agreement: new FormControl(null, [Validators.requiredTrue]),
    });
    this.verifyForm = new FormGroup({
      firstNum: new FormControl(null, [Validators.required, Validators.maxLength(1), Validators.minLength(1)]),
      secondNum: new FormControl(null, [Validators.required, Validators.maxLength(1), Validators.minLength(1)]),
      thirdNum: new FormControl(null, [Validators.required, Validators.maxLength(1), Validators.minLength(1)]),
      fourthNum: new FormControl(null, [Validators.required, Validators.maxLength(1), Validators.minLength(1)]),

    });
  }

  onSubmit() {
    this.openModal = true;
  }

  onVerify() {
    this.verifyEvent.emit();
    this.modalService.dismissAll();
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

}

