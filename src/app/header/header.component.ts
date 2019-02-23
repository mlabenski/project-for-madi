import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  template: `<h1>Hey {{this.specialName}} , do you need some loving?</h1>`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  specialNameArray: any[];
  specialName: string;
  headingName: string;
  Math: any;

  constructor() { 
    this.specialNameArray = ['babe', 'madi', 'girl'];
    // Going to need to fix this array with a random index
    this.specialName = this.specialNameArray[1];
    this.specialName = this.specialNameArray[Math.floor(Math.random() * this.specialNameArray.length)];
    this.headingName = "Hey "+ this.specialName + ", do you need some loving?";
    console.log(this.headingName);
  }

  ngOnInit() {
  }

}
