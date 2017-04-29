import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User, File } from 'angular-backend';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
    templateUrl: './profile-picture-page.html',
})

export class ProfilePicturePage{

    profileForm: FormGroup;
    
    userData = this.user.data();
    primary_photo_idx;

    name: string = this.user.info.name;
    email: string = this.user.info.email;

    constructor(private _fb : FormBuilder, private user: User, 
                private loc: Location, private router: Router,
                private file: File){

        if(!this.user.logged){
            this.router.navigate(['']);
        }

        this.createForm();
    
       this.getPic();
        
    }

    createForm(){
        this.profileForm = this._fb.group({
            id: [],
        })
    }

    onClickGoBack(){
        this.loc.back();
    }

    getPic(){
        this.userData.subscribe((res)=>{
            this.primary_photo_idx = res.data.user.primary_photo.idx;
            console.log("pp:", this.primary_photo_idx);
        })
    }

    onChangePic(userPic){
        let file = userPic.files[0];
        this.file.uploadPrimaryPhoto(file).subscribe((res)=>{
          this.primary_photo_idx = res.data.idx;
          alert("Profile picture changed!");
          this.onClickGoBack();
        },
        err => {
          this.file.alert(err);
        }
      )
  }

    onClickDeletePhoto(){
        if(confirm("Are you sure that you want to delete your primary photo?")){
            this.file.delete(this.primary_photo_idx)
            .subscribe(()=> {
            this.onClickGoBack();
            alert("Primary photo is deleted!");    
            },
            err =>{
            })
            
        }
    }
}