import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'angular-backend';
import { Router } from '@angular/router'

@Component({
    selector: 'login-form',
    templateUrl: './login-page.html',
})

export class LoginPage
{

    loginForm: FormGroup;

    constructor(private _fb : FormBuilder, private user: User, private router: Router){
        this.createForm();

        if(this.user.logged){
            this.router.navigate(['/home']);
        }
    }

    createForm()
    {
        this.loginForm = this._fb.group({
            id: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    login(){

       this.user.login(this.loginForm.value)
       .subscribe((res)=> {
            alert("Logged-in");
            this.router.navigate(['/home']);
            
       },
       err => {
          // let error = this.user.errorResponse(err).message;
         alert(err.message);
       }
       )
    
    }

    register(){
        this.router.navigate(['/register']);
    }
}