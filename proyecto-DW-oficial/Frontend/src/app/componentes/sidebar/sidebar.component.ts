import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  // tslint:disable-next-line: no-host-metadata-property
  host: {class: 'wrapper d-flex align-items-stretch'},
})
export class SidebarComponent implements OnInit {
  sesion!: boolean;
  buttonBar = false;
  sidebar = false;
  faBars = faBars;

  constructor() { }

  ngOnInit(): void {
    this.existeUsuario();
  }

  cambiarSidebar(): void{
    if (this.sidebar){
      this.sidebar = false;
      this.buttonBar = false;
    }
    else {
      this.sidebar = true;
      this.buttonBar = true;
    }
  }

  cerrarSidebar(): void{
    if (this.sidebar){
      this.sidebar = false;
      this.buttonBar = false;
    }
}
existeUsuario(): void{
  localStorage.getItem('usuario');
  if (this.sesion){
    console.log('yep');
    this.sesion = true;
  }else{
    console.log('nop');
    this.sesion = false;
  }
}
}
