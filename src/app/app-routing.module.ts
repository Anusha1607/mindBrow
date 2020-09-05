import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
  },
  {
    path: 'web/login',
    component: LoginComponent,
  },
  {
    path: 'web/signup',
    component: SignupComponent,
  },
  {
    path: 'web/emp',
    component: EmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
