import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { LandingPageComponent } from './componentes/landing-page/landing-page.component';
import { EmpresasModule } from './modules/empresas/empresas.module';
import { LoginModule } from './modules/login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    SidebarComponent,
    FooterComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule,
    EmpresasModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {}
