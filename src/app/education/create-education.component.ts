import { Component, OnInit, ViewChild } from '@angular/core';
import { Education } from '../models/education.model';
import { EducationService } from '../Services/education.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-education',
  templateUrl: './create-education.component.html',
  styleUrls: ['./create-education.component.css']
})
export class CreateEducationComponent implements OnInit {
  @ViewChild('educationForm') public educationForm: NgForm;
  isUpdate: boolean;

  educations: Education[] = [];

  education: Education = {
    EduId: null,
    Education: null,
    Description: null,
    IsActive: null
  };


  constructor(private _education: EducationService, private toastr: ToastrService) { }

  ngOnInit() {
    this.LoadEducationData();
  }




  saveEducation(): void {
    if (this.education.Education == "") {

    }
    this._education.save(this.education).subscribe(
      (data) => {
        console.log(data);
        if (data === -11) {
          this.toastr.warning('Record Is Already Is Exist');
        }
        else
        {

          this.toastr.success('Save Data Successfully');
          this.education.EduId = 0;
          this.isUpdate = false;         
          this.clearform(this.educationForm);
          if (this.education.EduId) {
            this.education = {
              EduId: null,
              Education: null,
              Description: null,
              IsActive: null
            };
          }
          this.LoadEducationData();
        }

      }

    );


  }

  //Clear
  clearform(formName: NgForm) {
    formName.resetForm();
    this.education.EduId = 0;
  }

  //Load Education 

  LoadEducationData() {

    this._education.getEducation(0).subscribe(
      (data) => {
        this.educations = data
      }
    );
  }


  EduEdit(id) {
    if (id !== 0) {
      this._education.getEducation(id).subscribe(
        (data) => {
          this.education = data[0]
          this.isUpdate = true;
        }
      );
    }
    else {
      this._education.getEducation(0).subscribe(
        (data) => {
          this.education = data
        });

    }
  }
  EduRemove(id) {
    this._education.remove(id).subscribe(
      (data) => {
        if (data.ResponseCode === 200) {
          this.toastr.success("Remove data successfully");
          this.LoadEducationData();
        }
        else {
          this.toastr.warning("Record not remove");
        }
      }
    );


  }


}
///ng g c  create-education --spec=false --flat=true