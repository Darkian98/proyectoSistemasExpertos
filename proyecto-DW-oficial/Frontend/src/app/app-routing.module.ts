import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './componentes/landing-page/landing-page.component';
import { EjemploComponent } from './modules/empresas/ejemplo/ejemplo.component';
import { SignInComponent } from './modules/login/sign-in/sign-in.component'
import { SignUpComponent } from './modules/login/sign-up/sign-up.component';
import { AllpagesComponent} from './modules/empresas/allpages/allpages.component'
import { AuthGuard} from './auth.guard';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'ejemplo', component: EjemploComponent, canActivate: [AuthGuard]},
  { path: 'signIn', component: SignInComponent},
  { path: 'signUp', component: SignUpComponent},
  { path: 'admin-companies', component: AllpagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
