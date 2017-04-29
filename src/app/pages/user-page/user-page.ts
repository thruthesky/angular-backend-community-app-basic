import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'angular-backend';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
    templateUrl: './user-page.html',
})

export class UserPage{

    profileForm: FormGroup;

    name: string = this.user.info.name;
    email: string = this.user.info.email;

    name2: string = this.user.info.name;
    email2: string = this.user.info.email;

    constructor(private _fb : FormBuilder, private user: User, 
                private loc: Location, private router: Router){
        if(!this.user.logged){
            this.router.navigate(['']);
        }            

        this.createForm();
        console.log(this.user.logged);
    }

    createForm(){
        this.profileForm = this._fb.group({
            id: [],
            name: [this.name, Validators.required],
            email: [this.email, Validators.required],
        })
    }

    onClickGoBack(){
        this.loc.back();
    }

    onClickUpdate(){
        this.user.edit(this.profileForm.value)
        .subscribe((res) => {
            this.name = res.data.name;
            this.email = res.data.email;

            if(this.name == this.name2 && this.email == this.email2){
                alert("Nothing was changed");
                this.onClickGoBack();
            }
            else{

        alert("Succesfully updated!");
        this.onClickGoBack();
            }
        })
    } 
}