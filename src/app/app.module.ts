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

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { ToastrModule } from 'ngx-toastr'; 



import { } from 'devextreme-angular';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatedepartmentComponent } from './department/createdepartment.component';
import { ListdepartmentComponent } from './department/listdepartment.component';
import { DashboardviewComponent } from './dashboard/dashboardview.component';


const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent }, 
  { path: 'create/:id', component: CreateEmployeeComponent },  
  { path: 'Login', component: LoginComponent },
  { path: 'Dashboard', component: DashboardviewComponent },
  { path: 'CreateD', component: CreatedepartmentComponent },
  { path: '', redirectTo: '/Login', pathMatch: 'full' }
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
    DashboardviewComponent, 
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DevExtremeModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    // BrowserAnimationsModule,
    ToastrModule.forRoot()  
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
