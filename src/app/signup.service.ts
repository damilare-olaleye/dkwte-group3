import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signup(firstName: string, lastName: string, email: string, password: string, phoneNumber: string, role: string){
    return this.http.post('http://localhost:5050/signup', {
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "password": password,
      "phone_number": phoneNumber,
      "role": role
    }, {
      withCredentials: true,
      observe: 'response',
      responseType: 'text'
    })
  }

}
