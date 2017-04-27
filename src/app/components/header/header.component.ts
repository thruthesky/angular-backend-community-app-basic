import { Component, OnInit } from '@angular/core';
import { User } from 'angular-backend';
@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public user: User ) { }

  ngOnInit() {
    
  }


  onClickRegister() {
    console.log("Going to register");
  }
}
