import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName
  password
  constructor() { }

  ngOnInit(): void {
  }
  onLogin(){
    console.log(this.userName)
    if(this.userName == "admin" && this.password == "admin"){
      window.location.href ="/dashboard";
    } else {
      alert('Username and password should not be empty');
    }
    console.log("sub")
  }

  login(){

  }
}
