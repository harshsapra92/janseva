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
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestMiniViewComponent } from './request-mini-view/request-mini-view.component';
import { RequestExpandedViewComponent } from './request-expanded-view/request-expanded-view.component';
import { ShareWidgetComponent } from './share-widget/share-widget.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SectionComponent } from './section/section.component';
import { CommentsComponent } from './comments/comments.component';
import { DashboardFiltersComponent } from './dashboard-filters/dashboard-filters.component';
import { DashboardService } from './dashboard.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserRegistrationComponent,
    RequestFormComponent,
    RequestMiniViewComponent,
    RequestExpandedViewComponent,
    ShareWidgetComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SectionComponent,
    CommentsComponent,
    DashboardFiltersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    UserRegistrationService,
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
