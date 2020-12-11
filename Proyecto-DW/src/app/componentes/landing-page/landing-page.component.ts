import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGooglePlusG, faInstagram, faLinkedinIn, faPagelines, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCircle, faLeaf, faTree } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  faLeaf = faLeaf;
  faPagelines = faPagelines;
  faTree = faTree;
  faCircle = faCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
