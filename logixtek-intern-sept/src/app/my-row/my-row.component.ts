import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-row',
  templateUrl: './my-row.component.html',
  styleUrls: ['./my-row.component.css']
})
export class MyRowComponent implements OnInit {
  name = 'A';
  applyFor = 'A';
  Stage = 'A';
  Phone = 'A';
  psi = 'A';
  psd = 'A';

  constructor() { }

  ngOnInit() {
  }

}
