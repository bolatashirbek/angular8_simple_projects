import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  @Input() index: number;

  cardDate: Date = new Date();

  textColor: string;

  ngOnInit() {
  }

  changeTitle() {
    this.card.title = 'Title has been changed!';
  }
}
