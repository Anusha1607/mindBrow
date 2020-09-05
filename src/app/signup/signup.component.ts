import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppConstantsService } from '../constants/app-constants.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  managerData: any = { address: {} };
  address: any = {};
  tab: any;
  public pass3: string;
  public passIcon3: string;
  public pass4: string;
  public passIcon4: string;
  public showEnterPass: boolean = false;
  public correctOTP: boolean = false;
  constructor(public translate: TranslateService, public router: Router, public constant: AppConstantsService) {
    translate.addLangs(['en-us', 'mr']);
    translate.setDefaultLang('en-us');

    this.pass3 = 'password';
    this.passIcon3 = 'hide';
    this.pass4 = 'password';
    this.passIcon4 = 'hide';
  }

  ngOnInit() {
    this.tab = 'inform';
  }

  public hideShowPassword3(): void {
    this.pass3 = this.pass3 === 'password' ? 'mobile' : 'password';
    this.passIcon3 = this.passIcon3 === 'hide' ? 'show' : 'hide';
  }
  public hideShowPassword4(): void {
    this.pass4 = this.pass4 === 'password' ? 'mobile' : 'password';
    this.passIcon4 = this.passIcon4 === 'hide' ? 'show' : 'hide';
  }

  showTab(value) {
    this.tab = value;
  }

  goToSign() {
    this.router.navigate(['web/login']);
  }

  goToNext(mangform, managerData) {
    if (mangform.valid) {
      this.tab = 'addre';
    }

  }
  gobasic(tab) {
    this.tab = tab;
  }

  doSingUp(mangform, address) {
    if (mangform.valid) {
      this.managerData.address = address;
      console.log(JSON.stringify(this.managerData));
      mangform.resetForm();
      this.constant.successMsg("Registration Successfull.");
    }
    else {
      this.constant.errorMsg("Please All the fields.");
    }
  }


}
