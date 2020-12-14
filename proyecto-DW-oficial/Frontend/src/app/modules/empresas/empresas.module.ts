import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { AuthService } from 'src/app/services/auth.service';
import { AuthGuard } from 'src/app/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/app/services/token-interceptor.service';
import { AllpagesComponent } from './allpages/allpages.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [EjemploComponent, AllpagesComponent, NavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EjemploComponent,
  ],
  providers: [AuthService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
})
export class EmpresasModule {

}
