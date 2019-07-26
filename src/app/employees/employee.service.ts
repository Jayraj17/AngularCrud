import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import { BaseServiceService } from "../shared/base-service.service";

@Injectable()
export class EmployeeService {

    constructor(private baseServiceService: BaseServiceService) { }



    getEmployees(id: number) {
        return this.baseServiceService.get('api/Employee/GetAllEmployee/' + id);
    }

    save(employee: Employee) {
        return this.baseServiceService.post('api/Employee/SaveEmployee', employee);
    }


    getLogin(username: string, password: string) {        

        return this.baseServiceService.get('api/Employee/GetLogin?username=' + username + '&password=' + password);
    }

}