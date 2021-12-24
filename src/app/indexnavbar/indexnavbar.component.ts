import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/User';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-indexnavbar',
  templateUrl: './indexnavbar.component.html',
  styleUrls: ['./indexnavbar.component.css']
})
export class IndexnavbarComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  checkIfLoggedIn() {
    this.loginService.checkLoginStatus().subscribe((res) => {
      if (res.status === 200){
        let body = <User> res.body;

        if(body.role === 'Member'){
          this.router.navigate(['']); // navigates to member route page
        }

        if(body.role === 'Admin'){
          this.router.navigate(['admin']); // navigates to admin route page
        }
      }
    },
    (err) => {

    });
  }

  onLogoutClick() {
    console.log("here")
    this.loginService.logout().subscribe((res) => {
      if(res.status === 200){
        this.router.navigate(['']);
      }
    }, (err) => {

    });
  }

}
