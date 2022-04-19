import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employeeList',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass'],
  encapsulation: ViewEncapsulation.None // Disable Unique Target Class
})
export class EmployeeListComponent implements OnInit {

  // Part Service in Angular
  public employees: any[] = [];
  public errorMsg: any;

  constructor(
    private _employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                  error => this.errorMsg = error);
  }

}
