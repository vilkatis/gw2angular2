import { ItemSlot } from './account/item-slot.model';
export interface Bag {
    id: number;
    size: number;
    inventory: ItemSlot[];
}
