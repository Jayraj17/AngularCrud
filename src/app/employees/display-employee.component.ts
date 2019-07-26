import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {
  @Input() employee: Employee;


  constructor(private route : Router ) { }

  ngOnInit() {
  }


  ngOnChanges(changes: SimpleChanges) 
  {

    const previousEmployee = <Employee>changes.employee.previousValue;
    const currentEmployee = <Employee>changes.employee.currentValue;

  }

  showForEdit(id : number)
  {
    this.route.navigate(['/create/' + id]);
  }





}
