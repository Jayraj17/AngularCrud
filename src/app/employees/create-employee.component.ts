import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  //By default Set 
  //gender='male';
  //isActive=true;
  //department='3';
  previewPhoto = false;
  //employee: Employee = new Employee();

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateofBirth: null,
    department: "select",
    isActive: null,
    photoPath: null,
    password: null,
    confirmPassword: null
  };



  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Paroll' },
    { id: 5, name: 'Admin' }
  ];


  constructor(private _employeeService: EmployeeService,
    private _router: Router) {

  }
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
  }

  gotoDashboard() 
  {
    this._router.navigate(['/Dashboard']);
  }

  // saveEmployee(empForm : NgForm): void 
  saveEmployee(): void {
    // console.log(empForm.value);
    // console.log(empForm);
    //console.log(newEmployee);
    console.log(this.employee);
    this._employeeService.save(this.employee).subscribe(
      (data) => {
         alert('sUCCESS');
      }
    );
    this._router.navigate(['list']);
  }

}
