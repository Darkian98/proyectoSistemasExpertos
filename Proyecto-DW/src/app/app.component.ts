import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto-DW';
  @ViewChild('sidebar') sidebarComponent: SidebarComponent = new SidebarComponent();

  cerrarSidebar(): void{
    console.log('Se selecciono CONTENT (AppComponent)');
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
