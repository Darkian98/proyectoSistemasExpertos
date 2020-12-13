import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faEnvira } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faQuestionCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formularioLogin = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/)]),
    contrasenia: new FormControl('', [Validators.required])
  });

  faEnvira = faEnvira;
  faGlobe = faGlobe;
  faQuestionCircle = faQuestionCircle;
  faShoppingCart = faShoppingCart;
  sesion = true;

  constructor() {  }

  ngOnInit(): void {
    localStorage.removeItem('usuario');
  }

  get correo(): any{
    return this.formularioLogin.get('correo');
  }

  get contrasenia(): any{
    return this.formularioLogin.get('contrasenia');
  }
  iniciarSesion(): void{
    console.log(this.formularioLogin.value);
    if (this.formularioLogin.valid){
        localStorage.setItem('usuario', JSON.stringify(this.formularioLogin.value));
    } else{
      console.log('noo');
    }
  }

  existeUsuario(): void{
    const a = localStorage.getItem('usuario');
    if (a){
      console.log('Existe Usuario Activo');
    }else{
      console.log('Ya no quiero');
    }
  }
}
