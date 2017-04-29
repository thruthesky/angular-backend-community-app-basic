import { Component, OnInit } from '@angular/core';
import { User, File } from 'angular-backend';
import { Router } from '@angular/router';
@Component({
  selector: 'header-component',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {


  constructor( private user: User, private router: Router, private file: File ) { 

  }
  ngOnInit() {
    
  }

  onClickLogOut(){
    if(confirm("Log-out?")){
      this.user.logout();
      this.router.navigate(['/login']);
    }
  }

  onClickRegister() {
    console.log("Going to register");
  }

}