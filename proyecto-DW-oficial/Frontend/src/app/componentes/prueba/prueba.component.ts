import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
  // tslint:disable-next-line: no-host-metadata-property
  host: {class: 'align-items-stretch wrapper'}
})
export class PruebaComponent implements OnInit {
  hola = 'Juan';

  constructor() { }

  ngOnInit(): void {
  }

}
