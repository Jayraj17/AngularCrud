import { Component, OnInit, ViewChild } from '@angular/core';
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


  }

  saveDepartment(): void {

    if (this.department.DepartmentName == "") {

    }
    this._department.save(this.department).subscribe(

      (data) => {
        console.log(data);
        if (data === -11) 
        {
          this.toastr.warning('Record Is Already Is Exist');
        }
        else 
        {
          this.toastr.success('Save Data Successfully');
          this.isUpdate = false;
          this.clearform(this.departmentsForm);
        }

      }
    );

  }

  getId(id) {
    this._department.getDepartment(id).subscribe(
      (data) => {
        this.department = data[0]
        this.isUpdate = true;
      }
    );
  }

  clearform(formName: NgForm) {
    formName.resetForm();
  }
}


