import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../models/login.model';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../Services/employee.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error: {};
  loginError: string;

  login: Login = {
    username: null,
    password: null
  };
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private employee: EmployeeService
  ) { }

  ngOnInit() {

  }

  onSubmit() {

    this.employee.getLogin(this.login.username, this.login.password).subscribe(
      (data) => {
        if (data) {
          this.employee.isLogin = true;
          this.toastr.success('Login Successfully');
          this.router.navigate(['/create']);
        } else {
          this.toastr.warning('Login Fail');
        }

      }

    )
  }

}
