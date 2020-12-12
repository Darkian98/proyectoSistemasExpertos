import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class LoginModule {

}
