import { Component, Input } from '@angular/core';
import { ItemSlot } from '../models/gw2/account/item-slot.model';
import { Item } from '../models/gw2/items/item.model';

@Component({
    selector: 'bank',
    templateUrl: 'bank.component.html'
})
export class BankComponent {
  @Input() public bankSlots: ItemSlot[];
  @Input() public items: Item[];

}
