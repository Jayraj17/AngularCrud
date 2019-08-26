import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from './Services/employee.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private employee: EmployeeService, private router: Router) { }
  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      this.employee.isLogin = true;
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}

