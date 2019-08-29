import { Component, OnInit, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DepartmentService } from '../Services/department.service';
import { Department } from '../models/department.model';
import { EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listdepartment',
  templateUrl: './listdepartment.component.html',
  styleUrls: ['./listdepartment.component.css']
})
export class ListdepartmentComponent implements OnInit, OnChanges {

  @Output() public OutdeptId = new EventEmitter();
  @Output() public DeldeptId = new EventEmitter();
  @Input() departments: Department[];

  constructor(
    private _department: DepartmentService,
    private toastr: ToastrService

  ) { }


  ngOnInit() {
    // this.LoadDepatmentData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes != null) {
      // if(changes)
      console.log(changes);
    }
  }

  showForEdit(id: number) {
    this.OutdeptId.emit(id);
  }

  showForDelete(id: number) {
    this.DeldeptId.emit(id);
  }






}
