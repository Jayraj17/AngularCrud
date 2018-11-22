import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service'

@Component({

  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  message: string = '';
  employees: Employee[];
 // employeeToDisplay: Employee;
  //private arrayIndex = 0;


  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    //this.employeeToDisplay = this.employees[0];
  }


  // nextEmployee(): void {

  //   if (this.arrayIndex <= 2) {
  //     this.employeeToDisplay = this.employees[this.arrayIndex];
  //     this.arrayIndex++;
  //   }
  //   else {
  //     this.employeeToDisplay = this.employees[0];
  //     this.arrayIndex = 1;
  //   }

  // }


  public addnew(): void {
    debugger;
    let length = this.employees.length;
    length++;
    this.employees.push(
      {
        id: length,
        name: 'Jayraj Goswami00  ' + length,
        gender: 'Male',
        contactPreference: 'Vaibhav@123',
        dateofBirth: new Date('10/25/1990'),
        department: '3',
        isActive: true,
        photoPath: 'assets/images/man.jpg',
        password: '123456',
        confirmPassword: '123456'
      }
    );
    this.message = 'Employee added successfully.'
  }
}
