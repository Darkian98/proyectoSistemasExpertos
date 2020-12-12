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
  buttonBar = false;
  sidebar = false;
  faBars = faBars;

  constructor() { }

  ngOnInit(): void {
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

}
