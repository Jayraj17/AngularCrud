import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import { BaseServiceService } from "../shared/base-service.service";

@Injectable()
export class EmployeeService {

    constructor(private baseServiceService: BaseServiceService) {}
  


    getEmployees() 
    {        
        return this.baseServiceService.get('api/Employee/GetAllEmployee');
    }   

    save(employee: Employee) {
        return this.baseServiceService.post('api/Employee/SaveEmployee', employee);
    }

}