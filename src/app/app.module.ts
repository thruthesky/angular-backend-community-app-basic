import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePage } from './pages/home-page/home-page';
import { RegisterPage } from './pages/register-page/register-page';


import { AngularBackendModule } from 'angular-backend';


const appRoutes: Routes = [
  { path: 'register', component: RegisterPage },
  { path: '', component: HomePage, pathMatch: 'full' },
  { path: '**', component: HomePage }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot( appRoutes ),
    AngularBackendModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
