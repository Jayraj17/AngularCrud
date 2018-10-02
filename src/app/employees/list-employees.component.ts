import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({

  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  message: string = '';
  employees: Employee[] = [
    {
      id: 1,
      name: 'Jayraj Goswami',
      gender: 'Male',
      contactPreference: 'Jayraj@123.com',
      dateofBirth: new Date('04/24/1984'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/man.jpg',
      password:'123',
      confirmPassword:'123'
    }, {
      id: 2,
      name: 'Paresh Patel',
      gender: 'Male',
      contactPreference: 'Paresh@123.com',
      dateofBirth: new Date('10/25/1990'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/man2.jpeg',
      password:'123',
      confirmPassword:'123'
    }, {
      id: 3,
      name: 'Ajay Patel',
      gender: 'Male',
      contactPreference: 'Ajay@123',
      dateofBirth: new Date('10/25/1990'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/man3.jpeg',
      password:'123',
      confirmPassword:'123'
    },
    {
      id: 4,
      name: 'Vaibhav Desai123',
      gender: 'Male',
      contactPreference: 'Vaibhav@123',
      dateofBirth: new Date('10/25/1990'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/man4.jpeg',
      password:'123',
      confirmPassword:'123'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  public addnew(): void {
    debugger;
    let length = this.employees.length;
    length++;
    this.employees.push(
      {
        id: length,
        name: 'Vaibhav Desai  ' + length,
        gender: 'Male',
        contactPreference: 'Vaibhav@123',
        dateofBirth: new Date('10/25/1990'),
        department: 'IT',
        isActive: true,
        photoPath: 'assets/images/man.jpg',
        password:'123456',
        confirmPassword:'123456'
      }
    );
    this.message = 'Employee added successfully.'
  }
}
