import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page7',
  templateUrl: './page7.component.html',
  styleUrls: ['./page7.component.css']
})
export class Page7Component implements OnInit {

  data:any;

  constructor() { }

  ngOnInit() {
    this.data = {
      '1' : 1,
      '2' : 2,
      '3' : 3,
      '4' : 4,
      '5' : 5,
      '6' : 6,
      '7' : 6,
      '8' : 6,
      '9' : 6,
      '10' : 6,
      '11' : 6,
      '12' : 6,
    };
  }

}
