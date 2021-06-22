import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
    //nice to meet you
export class AuthenticationService {
  logged = false;
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private router: Router, private httpClient: HttpClient) { }


  public register(username: string, email: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.apiServerUrl}` + '/register', {
      username,
      password
    });
  }

  public authenticate(username: string, password: string) {
    this.httpClient.post<any>(`${this.apiServerUrl}/authenticate`, { username, password }).subscribe(
      userData => {
        sessionStorage.setItem('username', username);
        let tokenStr = 'Bearer ' + userData.token;
        sessionStorage.setItem('token', tokenStr);
        sessionStorage.setItem('id', userData.id)
        sessionStorage.setItem('password', password)
        console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<" + sessionStorage.getItem('username'))
        this.logged = true

        this.router.navigate(['./theme'])
        return this.logged
      },
      error => {
        this.logged = false
        sessionStorage.setItem('username', "notLogged");
        return this.logged
      }
    );
  }

  public isUserLoggedIn() {
    let user = sessionStorage.getItem('username')

    return !(user === null)
  }

  public logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('id')
    sessionStorage.removeItem('password')
  }

  public isAdminLoggedIn() {

    let user = sessionStorage.getItem('username')
    if (user == "admin") {
      return true
    }
    return false  
  }
}