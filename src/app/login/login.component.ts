import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/User';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  errorMessage!: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  checkIfLoggedIn() {
    this.loginService.checkLoginStatus().subscribe((res) => {
      if (res.status === 200){
        let body = <User> res.body;

        if(body.role === 'Member'){
          this.router.navigate(['/index']); // navigates to member route page
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
    this.loginService.login(this.email, this.password).subscribe((res) => {
      if (res.status === 200) {
        let body = <User> res.body;
        console.log(res);
        if (body.role === 'Member'){
          this.router.navigate(['index']); // navigates to member route page
        }

        if (body.role === 'Admin'){
          this.router.navigate(['admin']); // navigates to admin route page

        }
      }
    }, (err) => {
      this.errorMessage = err.error;

    });
  }

}
