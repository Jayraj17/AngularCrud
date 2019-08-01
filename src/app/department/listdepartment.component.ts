import { Component, OnInit, Output } from '@angular/core';
import { DepartmentService } from '../Services/department.service';
import { Department } from '../models/department.model';
import { EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listdepartment',
  templateUrl: './listdepartment.component.html',
  styleUrls: ['./listdepartment.component.css']
})
export class ListdepartmentComponent implements OnInit {

  @Output() public OutdeptId = new EventEmitter();

  constructor(
    private _department: DepartmentService,
    private toastr: ToastrService

  ) { }

  departments: Department[];

  ngOnInit() {
    this.LoadDepatmentData();
  }

  showForEdit(id: number) {
    this.OutdeptId.emit(id);
  }

  showForDelete(id: number) {
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


  LoadDepatmentData() {

    this._department.getDepartment(0).subscribe(
      (data) => {
        this.departments = data
      }
    );

  }



}
