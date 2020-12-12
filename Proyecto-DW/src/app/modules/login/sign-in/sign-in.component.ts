import { Component, OnInit } from '@angular/core';
import {  } from '@fortawesome/angular-fontawesome';
import { faEnvira } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  faEnvira = faEnvira;
  faGlobe = faGlobe;
  faQuestionCircle = faQuestionCircle;
  constructor() {

  }
  ngOnInit(): void {
  }

}
