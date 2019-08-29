import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../Services/employee.service'
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from '../Services/department.service';
import { ThrowStmt } from '@angular/compiler';
import { Education } from '../models/education.model';
import { EducationService } from '../Services/education.service';

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

  dropdownList = [];
  selectedItems = [];  
  dropdownSettings = {};
  

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateofBirth: null,
    department: "select",
    departmentName: "select",
    eduId: 'select',
    education: 'select',
    citys: null,
    isActive: null,
    photoPath: null,
    password: null,
    confirmPassword: null
  };

  departments: Department[];
  educations: Education[];
  city: number[] = [];

  // departments: Department[] = [
  //   { deptId: 1, DepartmentName: 'Help Desk' },
  //   { id: 2, name: 'HR' },
  //   { id: 3, name: 'IT' },
  //   { id: 4, name: 'Paroll' },
  //   { id: 5, name: 'Admin' }
  // ];


  constructor(
    private _employeeService: EmployeeService,
    private _router: Router,
    private aroute: ActivatedRoute,
    private toastr: ToastrService,
    private _department: DepartmentService,
    private _education: EducationService

  ) {

  }
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {

    //Load Department
    this._department.getDepartment(0).subscribe(
      (data) => {
        this.departments = data

      }
    );

    //Load Educaton 
    this._education.getEducation(0).subscribe(
      (data) => {
        this.educations = data
        console.log(data);
      }
    );


    this.aroute.paramMap.subscribe(
      paramMap => {
        const id = +paramMap.get('id');
        if (id === 0) {

        } else {
          this.getEmployeeDetails(id);
        }
      }
    );


    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Ahmedabad', isDisabled: true },
      { item_id: 5, item_text: 'New Delhi' }
    ];

    // this.dropdownList = ['Mumbai', 'Amd', 'Mehsana', 'Delhi'];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any)
  {
    this.city.push(item.textField);
  }
  onSelectAll(items: any) 
  {
    this.city.push(items.textField);
    //console.log(items);
  }

  getEmployeeDetails(id: number): void {
    this._employeeService.getEmployees(id).subscribe(
      (data) => {
        this.employee = data[0];
      }
    );
  }

  gotoDashboard() {
    this._router.navigate(['/Dashboard']);
  }
  saveEmployee(): void {
   this.employee.citys = this.city.toString();   
    this._employeeService.save(this.employee).subscribe(
      (data) => {
        this.toastr.success('Save Data Successfully');
        this.getEmployeeDetails(0);
        this._router.navigate(['list']);
      }
    );

  }

  // gotoDepartment(): void {
  //   this._router.navigate(['CreateD']);
  // }


}
