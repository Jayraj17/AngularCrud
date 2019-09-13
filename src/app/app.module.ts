import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DevExtremeModule } from "devextreme-angular";
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { EmployeeService } from './Services/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown-angular7';



import { } from 'devextreme-angular';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatedepartmentComponent } from './department/createdepartment.component';
import { ListdepartmentComponent } from './department/listdepartment.component';
import { DashboardviewComponent } from './dashboard/dashboardview.component';
import { AuthGuard } from './auth.guard';
import { CreateEducationComponent } from './education/create-education.component';
import { ListEducationComponent } from './education/list-education.component';
import { GrdEmployeesComponent } from './employees/grd-employees.component';









const appRoutes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'list', component: ListEmployeesComponent, canActivate: [AuthGuard] },
  { path: 'create', component: CreateEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'create/:id', component: CreateEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'Login', component: LoginComponent },
  { path: 'Dashboard', component: DashboardviewComponent, canActivate: [AuthGuard] },
  { path: 'CreateDepartment', component: CreatedepartmentComponent, canActivate: [AuthGuard] },
  { path: 'CreateEducation', component: CreateEducationComponent, canActivate: [AuthGuard] },
  { path: 'grdList', component: GrdEmployeesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    CreatedepartmentComponent,
    ListdepartmentComponent,
    DashboardviewComponent, CreateEducationComponent, ListEducationComponent,GrdEmployeesComponent 

  ],
  imports: [
    BrowserModule,
    FormsModule,
    DevExtremeModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
