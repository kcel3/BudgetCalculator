import { Component, OnInit } from '@angular/core';
import { Item } from 'src/shared/models/item';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  items:Item[]=new Array<Item>();
  totalAmount:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  addItem(newItem:Item){
    this.items.push(newItem);
    this.totalAmount+=newItem.amount;
  }
  deleteItem(item:Item){
    let index=this.items.indexOf(item);
    this.items.splice(index,1);
    this.totalAmount-=item.amount;
  }
  updateItem(updateEvent:UpdateEvent){
    this.items[this.items.indexOf(updateEvent.old)]=updateEvent.new;
    this.totalAmount-=updateEvent.old.amount;
    this.totalAmount+=updateEvent.new.amount;
  }
}
