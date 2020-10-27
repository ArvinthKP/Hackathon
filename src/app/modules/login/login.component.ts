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
    console.log(this.userName+this.password)
    console.log("sub")
  }
}
