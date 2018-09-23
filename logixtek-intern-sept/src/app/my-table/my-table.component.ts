import { Component, OnInit } from '@angular/core';
import { Applicant } from '../applicant_data/applicant.model';


@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {
  applicants: Applicant[] = [];

  applicantTest= new Applicant(1,"Test 1","Something","Interviewing","Testsubject@logixtek.com","0111001100","Mr A","Mr B");
  
  constructor() { }

  ngOnInit() {
  }

  onCreateApplicant(){
    this.applicants.push(this.applicantTest);
  }
}
