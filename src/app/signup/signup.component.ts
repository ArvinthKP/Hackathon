import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  regFee:any = "1$";
  userName: any;
  password: any;
  constructor() { }

  ngOnInit(): void {
  }

  onLogin(){
    console.log(this.userName+this.password)
    console.log("sub")
    alert("Thanks for your registration, we will send you the tournament details via Email");
  }

}
