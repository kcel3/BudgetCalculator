import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Item } from 'src/shared/models/item';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

export interface UpdateEvent{
  old:Item;
  new:Item;
}
@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems:Item[];  
  @Output() delete:EventEmitter<Item>=new EventEmitter<Item>();
  @Output() update:EventEmitter<UpdateEvent>=new EventEmitter<UpdateEvent>();
  constructor(public dia:MatDialog) { }

  ngOnInit(): void {
  }
  deleteClicked(item:Item){
    this.delete.emit(item);
  }
  onCardClicked(item:Item){
    const diaRef=this.dia.open(EditItemModalComponent,{width:'580px',data:item});
    diaRef.afterClosed().subscribe(result=>{
      if(result){
        this.update.emit({
          old:item,
          new:result
        })
      }
    })
  }
}
