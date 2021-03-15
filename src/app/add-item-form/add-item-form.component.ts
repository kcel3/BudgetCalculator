import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Item } from 'src/shared/models/item';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item:Item=new Item('',null);
  @Output() formSubmit:EventEmitter<Item>=new EventEmitter<Item>();
  isNewItem:boolean;

  constructor() { }

  ngOnInit(): void {
    if(this.item){
      this.isNewItem=false;
    }else{
      this.isNewItem=true
      this.item=new Item('',null);
    }
  }
  onSubmit(form:NgForm){
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
