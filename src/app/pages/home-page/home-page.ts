import { Component, OnInit } from '@angular/core';
import { User, File } from 'angular-backend';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.html'
})
export class HomePage {

        
    userData = this.user.data();
    primary_photo_idx;

  constructor(private user: User, private file: File, private router: Router) { 
    if (this.user.logged){
    this.getPic();
    }
  }

  onClickChange(){
    if(confirm("Want to change your profile picture?")){
      this.router.navigate(['/primary_photo']);
    }
  }

      getPic(){
        this.userData.subscribe((res)=>{
            this.primary_photo_idx = res.data.user.primary_photo.idx;
            console.log("pp:", this.primary_photo_idx);
        })
    }
}