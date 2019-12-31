import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  title = 'My Card Title';
  text = 'My sample text!';

  disabled = false;

  imgUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  ngOnInit(): void {
    setTimeout(() => {
      this.imgUrl = 'https://vuejs.org/images/logo.png';
      this.disabled = true;
    }, 3000);
  }

  getInfo(): string {
    return 'This is my info';
  }
}
