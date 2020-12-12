import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjemploComponent } from './ejemplo/ejemplo.component';



@NgModule({
  declarations: [EjemploComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EjemploComponent,
  ]
})
export class EmpresasModule {

}
