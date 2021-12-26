import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/User';
import { LoginService } from '../login.service';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  phoneNumber!: string;
  role!: string;

  errorMessage!: string;
  successMessage!: string;

  constructor(private loginService: LoginService, private signupService: SignupService, private router: Router) { }

  ngOnInit(): void {
  }

  checkIfLoggedIn() {
    this.loginService.checkLoginStatus().subscribe((res) => {
      if (res.status === 200){
        let body = <User> res.body;

        if(body.role === 'Member'){
          this.router.navigate(['/login']); // navigates to member route page
        }

        if(body.role === 'Admin'){
          this.router.navigate(['/admin']); // navigates to admin route page
        }
      }
    },
    (err) => {

    });
  }

  onButtonClick() {
    this.signupService.signup(this.firstName, this.lastName, this.email, this.password, this.phoneNumber, this.role).subscribe((res) => {
      if (res.status === 200) {

        if(res.body){
          this.successMessage = res.body;
          setTimeout(() => window.location.reload(), 6800);
          this.checkIfLoggedIn();
        }
      }
    }, (err) => {
      this.errorMessage = err.error;
      this.errorMessage = "";
    });
  }

}
