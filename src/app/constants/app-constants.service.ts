import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AppConstantsService {

  constructor(public translate: TranslateService) { }

  public version = 1.0;

  // pattern
  public mobileNoPattern = '^[6-9][0-9]{9}$';

  public translateMessage(key, callback) {
    return this.translate.get('messages.' + key).subscribe((res: string) => {
      callback(res);
    });
  }

  /**
     * Success Message Method
     */
  public successMsg(statusCode) {
    this.translateMessage(statusCode, (message) => {
      var x = document.getElementById("success-snackbar");
      document.getElementById('success-snackbar').style.animation = 'bounceInDown faster'
      x.innerHTML = '<span class="successhead">' + 'Success' +
        '</span>' + '<br>' + '<span class="successmsg">' + statusCode + '</span>';
      x.className = "show";
      setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    });
  }

  /**
   * Error Message Method
   */
  public errorMsg(statusCode) {
    this.translateMessage(statusCode, (message) => {
      var x = document.getElementById("error-snackbar");
      x.innerHTML = '<span class="successhead">' + 'Error' +
        '</span>' + '<br>' + '<span class="successmsg">' + statusCode + '</span>';
      x.className = "show";
      setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
    });
  }



}
