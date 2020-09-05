import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DatePipe]
})
export class HeaderComponent implements OnInit {

  constructor(public translate: TranslateService, public datePipe: DatePipe,
    public router: Router, ) {
    translate.addLangs(['en-us', 'mr']);
    translate.setDefaultLang('en-us');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en-us|mr/) ? browserLang : 'en-us');
  }

  ngOnInit() {
  }
  outOfPage() {
    this.router.navigate(['web/login']);
  }

}