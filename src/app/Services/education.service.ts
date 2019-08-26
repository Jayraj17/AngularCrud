import { Injectable } from '@angular/core';
import { BaseServiceService } from '../shared/base-service.service';
import { Education } from '../models/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private baseService : BaseServiceService) { }



  getEducation(id: number) {
    return this.baseService.get('api/Education/GetAllEducation/' + id);
  }

  save(education: Education) {
    return this.baseService.post('/api/Education/SaveEducation/', education);
  }

   remove(id: number)
  {
    return this.baseService.delete('api/Education/RemoveEducation',id);
  }


}



//  ng g s education --spec=false