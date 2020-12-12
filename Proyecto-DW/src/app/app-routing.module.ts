import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './componentes/landing-page/landing-page.component';
import { EjemploComponent } from './modules/empresas/ejemplo/ejemplo.component';
import { SignInComponent } from './modules/login/sign-in/sign-in.component'

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: '\prueba', component: EjemploComponent},
  { path: '\login', component: SignInComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
