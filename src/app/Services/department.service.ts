import { Injectable } from '@angular/core';
import { BaseServiceService } from '../shared/base-service.service';
import { Department } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private baseServiceService: BaseServiceService) { }

  getDepartment(id: number) {
    return this.baseServiceService.get('api/Department/GetAllDepartment/' + id);
  }

  save(department: Department) {
    return this.baseServiceService.post('/api/Department/SaveDepartment/', department);
  }

  remove(id: number)
  {
    return this.baseServiceService.delete('api/Department/RemoveDepartment',id);
  }


}
