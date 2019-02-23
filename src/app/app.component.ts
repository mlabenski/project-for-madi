import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'im-with-you';
  @Input() showMePartially: boolean;
  display: boolean = false;
  image: string;

  displayImage() {
    this.display = !this.display;
    this.image = this.imageSource[Math.floor(Math.random() * this.imageSource.length)];
  }

  imageSource: string[] = [
   'assets/front-page-images/eagles-game.png',
   'assets/front-page-images/first-instagram-post.png', 
   'assets/front-page-images/grandma-grenoble.png', 
   'assets/front-page-images/madi-prom.png',
   'assets/front-page-images/madi-at-dorm.png', 
   'assets/front-page-images/mitchell-dinner.png',
   'assets/front-page-images/new-years.png',
   'assets/front-page-images/new-years-2015.png',
  'assets/front-page-images/all-started-with-a-swim.png']
}
