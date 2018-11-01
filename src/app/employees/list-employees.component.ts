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


  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() 
  {
    this.employees = this._employeeService.getEmployees();
  }

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
        department: 'IT',
        isActive: true,
        photoPath: 'assets/images/man.jpg',
        password: '123456',
        confirmPassword: '123456'
      }
    );
    this.message = 'Employee added successfully.'
  }
}
