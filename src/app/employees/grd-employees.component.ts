import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-grd-employees',
  templateUrl: './grd-employees.component.html',
  styleUrls: ['./grd-employees.component.css']
})
export class GrdEmployeesComponent implements OnInit {
  employees: Employee[];
  isLoading: boolean = true;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {

    this._employeeService.getEmployees(0).subscribe(
      (data) => {
        console.log(data)
        this.employees = data;
        this.isLoading = false;
      }, (error) => {
        alert('Error');
      }
    );


  }

}
