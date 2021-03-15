import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/shared/models/item';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item:Item;
  @Output() xButton:EventEmitter<any>=new EventEmitter<any>();
  @Output() cardClick:EventEmitter<any>=new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onXClicked(){
    this.xButton.emit();
  }
  onCardClick(){
    this.cardClick.emit();
  }
}
