import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Proyecto-DW';
  @ViewChild('sidebar')
  sidebarComponent!: SidebarComponent;

  constructor(private spinnerService: NgxSpinnerService, private authService: AuthService){}
  ngOnInit(): void {
  this.spinner();
  }

  spinner(): void{
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 5000);
  }
  cerrarSidebar(): void{
    // console.log('Se selecciono CONTENT (AppComponent)');
    this.sidebarComponent.cerrarSidebar();
  }

/*
  ejecutar(): void{
    if (this.sidebar){
      this.sidebar = false;
    }
    else {
      this.sidebar = true;
    }
  }*/
}
