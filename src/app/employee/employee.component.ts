import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppConstantsService } from '../constants/app-constants.service';
declare var $: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  empData: any = {};
  address: any = {};
  flag: boolean = false;
  listCount: number;
  candidateData = [
    { id: 1, firstname: "Nick", lastname: "John", mobile: "8974102312", dateofbirth: "13 Jul,1998", address: { city: "Pune" } },
    { id: 2, firstname: "Zuri", lastname: "Park", mobile: "7845123015", dateofbirth: "24 Aug,1994", address: { city: "Mumbai" } },
    { id: 3, firstname: "Harsh", lastname: "Sathe", mobile: "8854123041", dateofbirth: "14 Jul,1998", address: { city: "Latur" } },
    { id: 4, firstname: "sunil", lastname: "Pal", mobile: "9451203120", dateofbirth: "24 Dec,1987", address: { city: "pune" } },
  ];

  constructor(public translate: TranslateService, public constant: AppConstantsService) {
  }


  ngOnInit() {
    this.listCount = this.candidateData.length;
  }
  public validatePattern(event): void {
    if (!/[0-9]/.test(String.fromCharCode(event.charCode))) {
      event.preventDefault();
    }
  }
  openEmp() {
    $('#employeeModel').modal('show');
    this.flag = false;
  }
  goToedit() {
    $('#employeeModel').modal('show');
    this.flag = true;
  }
  cancelForm(empform) {
    $('#employeeModel').modal('hide');
    empform.resetForm();
  }
  addquickEmp(empform) {
    if (empform.valid && this.flag == false) {
      this.empData.address = this.address;
      $('#employeeModel').modal('hide');
      console.log(JSON.stringify(this.empData));
      empform.resetForm();
      this.constant.successMsg("Employee added Successfully.");
    }
    else if (empform.valid && this.flag == true) {
      this.empData.address = this.address;
      $('#employeeModel').modal('hide');
      console.log(JSON.stringify(this.empData));
      empform.resetForm();
      this.constant.successMsg("Employee updated Successfully.");
    }
    else {
      this.constant.errorMsg("Please All the fields.");
    }
  }
}
