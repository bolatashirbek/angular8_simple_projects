import {Component} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  title = 'My Card Title';
  text = 'My sample text!';

  imgUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  getInfo(): string {
    return 'This is my info';
  }
}
