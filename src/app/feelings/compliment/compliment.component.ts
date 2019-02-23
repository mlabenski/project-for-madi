import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-compliment',
  template: `
  <div *ngIf="showMessage">
  <div class="alert alert-primary" role="alert">
    {{complimentMessage}}
</div>
`,
  styleUrls: ['./compliment.component.css']
})
export class ComplimentComponent implements OnInit {
  @Input() showMessage: boolean;

  constructor() { }
  compliments: string[] =["I always think back to the summer nationals before we started dating, if I didnt get to go- my life would had be so much worse because i'd never had met you.",
"Hey, look around and take notice that your the baddest bitch in there.", "You make me a better person everyday, and i cant thank you enough for that.", "I'm so happy for your swimming acomplishments, and I want to be there for all of your life successes.",
"I really wish I was with you right now madi!!", "Your beautiful.", "Hey nice butt!", "Oh what i'd sacrifice to be able to kiss you right now... "];
  complimentMessage: string = this.compliments[Math.floor(Math.random() * this.compliments.length)];


  ngOnInit() {
    
  }
}
