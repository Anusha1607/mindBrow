import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppConstantsService } from '../constants/app-constants.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logindata: any = {};
  emailCode: any;
  passCode: any;
  public pass: string;
  public passIcon: string;
  constructor(public translate: TranslateService, public router: Router, public constant: AppConstantsService
  ) {
    translate.addLangs(['en-us', 'mr']);
    translate.setDefaultLang('en-us');

    this.pass = 'password';
    this.passIcon = 'hide';
  }

  ngOnInit() {
  }

  public hideShowPassword(): void {
    this.pass = this.pass === 'password' ? 'mobile' : 'password';
    this.passIcon = this.passIcon === 'hide' ? 'show' : 'hide';
  }

  gotoregister() {
    this.router.navigate(['web/signup']);
  }

  login() {
    this.emailCode = "admin@gmail.com";
    this.passCode = "Admin@1234";
    if (this.logindata.email == this.emailCode && this.logindata.password == this.passCode) {
      this.constant.successMsg("Login Successfull.");
      this.router.navigate(['web/emp']);
    }
    else {
      this.constant.errorMsg("Username or Password incorrect.");
    }
  }
}
