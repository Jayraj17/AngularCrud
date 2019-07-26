import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service'
import { Router } from '@angular/router';

@Component({

  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  message: string = '';
  employees: Employee[];
  
  // employeeToDisplay: Employee;
  //private arrayIndex = 0;


  constructor(private _employeeService: EmployeeService,private router:Router) { 

  }

  ngOnInit() {
    // this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployees(0).subscribe(
      (data) => {
        this.employees = data;
      }, (error) => {
        alert('Error');
      }
    );
    //this.employeeToDisplay = this.employees[0];
  }

  gotoDashboard() 
  {
    this.router.navigate(['/Dashboard']);
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
