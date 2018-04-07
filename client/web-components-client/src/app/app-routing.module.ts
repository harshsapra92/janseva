import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestExpandedViewComponent } from './request-expanded-view/request-expanded-view.component';

const routes: Routes = [
  { path:'register',  component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'newRequest', component: RequestFormComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'request/:id', component: RequestExpandedViewComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
