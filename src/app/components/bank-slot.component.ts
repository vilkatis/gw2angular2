import { Component, Input } from '@angular/core';
import { ItemSlot } from '../models/gw2/account/item-slot.model';
import { Item } from '../models/gw2/items/item.model';

@Component({
  selector: 'bank-slot',
  templateUrl: 'bank-slot.component.html',
  styleUrls: ['bank-slot.component.scss']
})
export class BankSlotComponent {
  @Input() private slot: ItemSlot;
  @Input() private item: Item;
}
