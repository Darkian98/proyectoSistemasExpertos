import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private authService: AuthService, private router: Router) { }


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
existeUsuario(): boolean{
  return this.authService.loggedIn();
}

logout(): void{
    this.authService.logout();
}



}
