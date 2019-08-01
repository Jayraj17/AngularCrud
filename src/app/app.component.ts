import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './models/employee.model';
import { EmployeeService } from './Services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app'; 
  constructor(private router: Router, private employee: EmployeeService) {
    
  }
  ngOnInit() {    
  }

}
