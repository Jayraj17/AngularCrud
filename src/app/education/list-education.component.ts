import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Education } from '../models/education.model';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-list-education',
  templateUrl: './list-education.component.html',
  styleUrls: ['./list-education.component.css']
})
export class ListEducationComponent implements OnInit {
  @Input() public educations: Education[];
  
  @Output() public editEducId = new EventEmitter();
  @Output() public delEducId = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  showForEdit(id: any): void {
     this.editEducId.emit(id);
  }
showForDelete(id: any) { 
  this.delEducId.emit(id);
}
        


  
}
