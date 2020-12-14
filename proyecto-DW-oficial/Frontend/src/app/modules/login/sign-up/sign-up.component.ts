import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService} from '../../../services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  usuarioEmpresarial = false;

  formularioRegister = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/)]),
    contrasenia: new FormControl('', [Validators.required]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    rol: new FormControl(),
    plan: new FormControl(),
    tarjeta: new FormControl(),
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

registrarCliente(): void{
      console.log(this.formularioRegister.value);
      if (!this.usuarioEmpresarial){
        this.formularioRegister.patchValue({
          rol: 'cliente'
        });
      }else{
        this.formularioRegister.patchValue({
          rol: 'empresarial'
        });
      }
      this.authService.signUp(this.formularioRegister.value)
      .subscribe(res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/signIn']);
      }, error => {
      console.log(error);
       }
      );
  }



changeUsuario(): void{
    if (this.usuarioEmpresarial){
      this.usuarioEmpresarial = false;
    }
      else{
      this.usuarioEmpresarial = true;
    }
    
  }


}
