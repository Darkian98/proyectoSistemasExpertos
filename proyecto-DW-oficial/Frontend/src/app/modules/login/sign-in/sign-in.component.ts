import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEnvira } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faQuestionCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AuthService} from '../../../services/auth.service';




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

  constructor(private authService: AuthService, private router: Router) {  }

  ngOnInit(): void {
   // localStorage.removeItem('usuario');
  }

  get correo(): any{
    return this.formularioLogin.get('correo');
  }

  get contrasenia(): any{
    return this.formularioLogin.get('contrasenia');
  }
  iniciarSesion(): void{
    this.authService.signIn(this.formularioLogin.value)
    .subscribe(res => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/ejemplo']);
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

}
