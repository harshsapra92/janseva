import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserRegistrationService } from './user-registration.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    UserRegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
