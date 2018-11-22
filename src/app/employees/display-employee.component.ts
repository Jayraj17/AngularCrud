import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee.model';
@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  // private _employeeId: number;

  // @Input()
  // set employeeId(val: number) {
  //   console.log('employeeId change from  ' + JSON.stringify(this.employeeId) + '  to  ' + JSON.stringify(val));
  //   this._employeeId = val;
  // }

  // get employeeId(): number {
  //   return this._employeeId;
  // }

  // private _employee: Employee;
  // @Input()
  // set employee(val: Employee) {
  //   // console.log('Previouse :' + (this.employee ? this.employee.name : 'NULL'));
  //   //console.log('Current : ' + val.name);
  //   console.log('employee change from  ' + JSON.stringify(this.employee) + '  to  ' + JSON.stringify(val));
  //   this._employee = val;
  // }
  // get employee(): Employee {

  //   return this._employee;
  // }



  constructor() { }

  ngOnInit() {
  }

}
