import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicantMain',
  templateUrl: './applicantMain.component.html',
  styleUrls: ['./applicantMain.component.css']
})
export class ApplicantMainComponent implements OnInit {
loadedFeature = 'List';
  constructor() {}

  ngOnInit() {}

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
