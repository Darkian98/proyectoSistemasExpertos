import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = environment.URL;

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: any): Observable<any>{
    return this.http.post<any>(this.URL + '/usuarios/signup', user);
  }

  signIn(user: any): Observable<any>{
    return this.http.post<any>(this.URL + '/usuarios/signin', user);
  }

  loggedIn(): boolean{
    // tslint:disable-next-line: no-unused-expression
     return !!localStorage.getItem('token');
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signIn'])
  }
}
