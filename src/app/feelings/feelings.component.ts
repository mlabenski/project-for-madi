import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feelings',
  templateUrl: './feelings.component.html',
  styleUrls: ['./feelings.component.css']
})
export class FeelingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showVar: boolean = false;
  showCompliment: boolean = false;
  showPhoto: boolean = true;
  toggleChild(){
    this.showVar = !this.showVar;
    this.showPhoto = !this.showPhoto;
  }
  compliment(){
    this.showCompliment = !this.showCompliment;
  }

}
