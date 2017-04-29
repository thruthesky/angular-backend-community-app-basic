import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AngularBackendModule } from 'angular-backend';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ChangePasswordComponent } from './pages/change-password-page/change-password-page';

import { ProfilePicturePage } from './pages/profile-picture-page/profile-picture-page';
import { HomePage } from './pages/home-page/home-page';
import { RegisterPage } from './pages/register-page/register-page';
import { LoginPage } from './pages/login-page/login-page';
import { UserPage } from './pages/user-page/user-page';

const appRoutes : Routes = [
  {
    path: '', component: HomePage, pathMatch: 'full'
  },
  {
    path: 'register', component: RegisterPage
  },
  {
    path: 'login', component: LoginPage
  },
  {
    path: 'editUser', component: UserPage
  },
  {
    path: 'primary_photo', component: ProfilePicturePage
  },
  {
    path: 'change_password', component: ChangePasswordComponent
  },



  {
    path: '**', component: HomePage
  },
 
]

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HeaderComponent,
    RegisterPage,
    LoginPage,
    UserPage,
    ProfilePicturePage,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularBackendModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
