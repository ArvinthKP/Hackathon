import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,AfterViewInit  {

  constructor() { }

  ngAfterViewInit(): void {
    // setTimeout( function() {
    //   var elem = document.querySelector('.sidenav');
    //   var instance = M.Sidenav.init(elem,M.options);
    // }, 0)
  }

  ngOnInit(): void {
  }s

}
