import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './componentes/landing-page/landing-page.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: '\hola', component: PruebaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
