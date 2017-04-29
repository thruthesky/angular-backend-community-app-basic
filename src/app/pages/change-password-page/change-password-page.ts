import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'angular-backend';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
    templateUrl: './change-password-page.html'
})

export class ChangePasswordComponent{

    changePasswordForm: FormGroup;
    chances: number = 0;

    constructor(
        private router: Router,
        private user : User,
        private _fb : FormBuilder,
        private loc: Location
    )
    
    {
        this.createForm();
        if(!this.user.logged){
            this.router.navigate(['']);
        }
    }

    createForm(){
        this.changePasswordForm = this._fb.group({
            old_password: '',
            new_password: ''
        })        
    }

    goBack(){
        this.loc.back();
    }

    changePass(){
        this.user.changePassword(this.changePasswordForm.value)
        .subscribe((res) => {
            alert("Successfully changed password! Logging out");
            this.router.navigate(['/login']);
        },
        err => 
        {
            alert("Invalid old password!");
            this.chances++;
            if(this.chances > 5){
            alert("Reached maximum tries, Logging-out");
            this.user.logout();
            this.chances = 0;
            this.router.navigate(['./login']);
        }
            
        }
        )
        //console.log(this.changePasswordForm);
    }
}