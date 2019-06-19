import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


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

  constructor(
    private fb: FormBuilder,
    private router: Router
  
    ) { }

  ngOnInit() {
   

    
  }

  

  onSubmit() {

    this.router.navigate(['/Dashboard']);
   
    
  }

}
