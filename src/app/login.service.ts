import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    return this.http.post('http://localhost:5050/login', {
      "email": email,
      "password": password
    }, {
      withCredentials: true,
      observe: 'response'
    })
  }

  checkLoginStatus() {
    return this.http.get('http://localhost:5050/loginstatus', {
      observe: 'response',
      withCredentials: true
    })
  }

  logout() {
    return this.http.post('http://localhost:5050/logout', {}, {
      observe: 'response',
      withCredentials: true,
      responseType: 'text'
    })
  }

}
