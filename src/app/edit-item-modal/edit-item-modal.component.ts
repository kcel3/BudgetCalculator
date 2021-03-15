import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from 'src/shared/models/item';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {
  @Input() item:Item;
  constructor(public dia:MatDialogRef<EditItemModalComponent>,@Inject(MAT_DIALOG_DATA) item:Item) {
    this.item=item;
   }

  ngOnInit(): void {
  }
  onSubmitted(updatedItem:Item){
    this.dia.close(updatedItem);
  }
}
