import {Component} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  title = 'My Card Title';
  text = 'My sample text!';

  number = 42;
  array = [1, 1, 2, 3, 5, 8, 13];
  obj = {name: 'Vladilen', info: {age: 25, job: 'Frontend developer'}};

  getInfo() {
    return 'This is my info';
  }
}
