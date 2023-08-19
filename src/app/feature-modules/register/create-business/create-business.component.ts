import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.component.html',
  styleUrls: ['./create-business.component.scss']
})
export class CreateBusinessComponent {
  businessForm: FormGroup;
  constructor(){
    this.businessForm = new FormGroup({
          businessType: new FormControl(null, [Validators.required]),
          governorate: new FormControl(null, [Validators.required]),
          district: new FormControl(null, [Validators.required]),
          inquiry: new FormControl(null, [Validators.required]),
          curentlyUser: new FormControl(null, [Validators.required]),
        });
  }
  onSubmit() {
  }
  get businessType() {
    return this.businessForm.controls.businessType;
  }

  get governorate() {
    return this.businessForm.controls.governorate;
  }
  get district() {
    return this.businessForm.controls.district;
  }
  get inquiry() {
    return this.businessForm.controls.inquiry;
  }
  get currentlyUser() {
    return this.businessForm.controls.curentlyUser;
  }

}
