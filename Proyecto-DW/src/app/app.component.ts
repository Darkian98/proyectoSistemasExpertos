import { Component } from '@angular/core';
import { faFacebookF, faGooglePlusG, faInstagram, faLinkedinIn, faPagelines, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCircle, faLeaf, faTree } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidebar = true;
  title = 'Proyecto-DW';


  faLeaf = faLeaf;
  faPagelines = faPagelines;
  faTree = faTree;
  faCircle = faCircle;
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
