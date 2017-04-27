import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'angular-backend';
import {
    _USER_CREATE, _USER_CREATE_RESPONSE
} from 'angular-backend/model/interface';
@Component({
    templateUrl: './register-page.html',
    styleUrls: [ './register-page.scss' ]
})
export class RegisterPage {
    formGroup: FormGroup;


    constructor( private fb: FormBuilder,
        public user: User
    ) {
        this.formGroup = fb.group({
            id: [ 'id' + Math.round( Math.random() * 10000 + 1 ) ],
            password: ['1234a'],
            name: [ 'myname' ]
        });
    }


    onClickRegister() {
        console.log("Going to register");

        let form: _USER_CREATE = this.formGroup.value;

        this.user.register( form ).subscribe( ( res: _USER_CREATE_RESPONSE ) => {
            console.log( res );
        }, err => this.user.alert( err ) );


        console.log(form);
    }
}