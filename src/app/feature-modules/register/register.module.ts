import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/standalone-components/modal/modal.component';
import { CreateBusinessComponent } from './create-business/create-business.component';



@NgModule({
  declarations: [
    RegisterComponent,
    SignupComponent,
    CreateBusinessComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    ModalComponent
  ]
})
export class RegisterModule { }
