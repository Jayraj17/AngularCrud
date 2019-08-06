import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../Services/employee.service'
import { Router } from '@angular/router';
import { CommonService } from '../Services/common.service';
import { ThrowStmt } from '@angular/compiler';

@Component({

  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  message: string = '';
  employees: Employee[];

  // employeeToDisplay: Employee;
  //private arrayIndex = 0;


  constructor(private _employeeService: EmployeeService,
    private router: Router,
    private _commonService: CommonService) {

  }

  ngOnInit() {
    // this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployees(0).subscribe(
      (data) => {
        console.log(data)
        this.employees = data;
      }, (error) => {
        alert('Error');
      }
    );
    //this.employeeToDisplay = this.employees[0];
  }

  gotoDashboard() {
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

  /////////////////////////////////////////Export to Xls
  //1) npm install file-saver -- save
  //2)npm install xlsx -- save
  //REf Side  https://medium.com/@madhavmahesh/exporting-an-excel-file-in-angular-927756ac9857

  public Generatexls() 
  {    
    this._commonService.Generate_XLS(this.employees, "test.xls");
  }

  ////////////////////////////////////Generate PDF
  //1) npm install jspdf
  //2) npm install html2canvas
  //Ref :- https://neelbhatt.com/2018/09/16/convert-html-to-pdf-using-angular-6/

public Generatepdf()
{
  var d = document.getElementById('ListContaint');
  this._commonService.Generate_PDF(d,'test');
}




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
        departmentName: "test",
        isActive: true,
        photoPath: 'assets/images/man.jpg',
        password: '123456',
        confirmPassword: '123456'
      }
    );
    this.message = 'Employee added successfully.'
  }
}
