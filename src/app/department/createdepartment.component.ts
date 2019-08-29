import { Component, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { Department } from '../models/department.model';
import { DepartmentService } from '../Services/department.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-createdepartment',
  templateUrl: './createdepartment.component.html',
  styleUrls: ['./createdepartment.component.css']
})
export class CreatedepartmentComponent implements OnInit {

  @ViewChild('departmentForm') public departmentsForm: NgForm;
  isUpdate: boolean;
  departments: Department[] = [];


  department: Department = {
    deptId: null,
    DepartmentName: null,
    Description: null,
    IsActive: null
  };

  constructor(
    private _department: DepartmentService,
    private _router: Router,
    private toastr: ToastrService
  ) {

  }



  ngOnInit() {
    this.LoadDepatmentData();

  }


  saveDepartment(): void {

    if (this.department.DepartmentName == "") {

    }

    this._department.save(this.department).subscribe(


      (data) => {

        console.log(data);
        if (data === -11) {
          this.toastr.warning('Record Is Already Is Exist');
        }
        else {

          this.toastr.success('Save Data Successfully');
          this.isUpdate = false;
          this.department.deptId = 0;

          this.clearform(this.departmentsForm);
          if (this.department.deptId) {
            this.department = {
              deptId: null,
              DepartmentName: null,
              Description: null,
              IsActive: null
            };
          } else {
            this.department = {
              deptId: null,
              DepartmentName: null,
              Description: null,
              IsActive: null
            };
          }
          this.LoadDepatmentData();
        }

      }
    );

  }

  EditDept(id) {
    if (id !== 0) {
      this._department.getDepartment(id).subscribe(
        (data) => {
          this.department = data[0]
          this.isUpdate = true;
        }
      );
    }
    else {
      this._department.getDepartment(0).subscribe(
        (data) => {
          this.department = data
        });

    }
  }

  RemoveDept(id) {

    this._department.remove(id).subscribe(
      (data) => {
        if (data.ResponseCode === 200) {
          this.toastr.success("Remove data successfully");
          this.LoadDepatmentData();
        }
        else {
          this.toastr.warning("Record not remove");
        }
      }
    );



  }






  clearform(formName: NgForm) {
    formName.resetForm();
    this.isUpdate = false;
    this.department.deptId = 0;
  }

  LoadDepatmentData() {

    this._department.getDepartment(0).subscribe(
      (data) => {
        this.departments = data
      }
    );

  }
}


