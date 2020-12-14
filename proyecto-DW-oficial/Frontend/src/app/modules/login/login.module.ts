import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class LoginModule {

}
