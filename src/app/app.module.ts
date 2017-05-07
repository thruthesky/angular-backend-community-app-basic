import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AngularBackendModule } from 'angular-backend';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ChangePasswordComponent } from './pages/change-password-page/change-password-page';


import { HomePage } from './pages/home-page/home-page';
import { RegisterPage } from './pages/register-page/register-page';
import { LoginPage } from './pages/login-page/login-page';
import { ForumPage } from './pages/forum-page/forum-page';

import { AngularBackendComponents } from './../angular-backend-components/angular-backend-components.module';


const appRoutes: Routes = [
  { path: 'forum/:post_config_id', component: ForumPage },
  { path: 'register', component: RegisterPage },
  { path: 'profile', component: RegisterPage },
  { path: 'login', component: LoginPage },
  { path: 'password', component: ChangePasswordComponent },
  { path: '', component: HomePage, pathMatch: 'full' },
  { path: '**', component: HomePage },
]

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HeaderComponent,
    RegisterPage,
    LoginPage,
    ChangePasswordComponent,
    ForumPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularBackendModule.forRoot(),
    AngularBackendComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
