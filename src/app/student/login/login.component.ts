import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  actualUsername: string = "admin";
  actualPassword: string = "admin";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if(this.username === "" || this.password === "") {
      alert("Credentials empty");
      return;
    }

    if(this.username === this.actualUsername && this.password === this.actualPassword) {
      this.router.navigate(["/register"]);
      return;
    }

    alert("Login credentials invalid");
  }

}
