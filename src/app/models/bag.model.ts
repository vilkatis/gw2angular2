import { Item } from './item.model';
export interface Bag {
    id: number;
    size: number;
    inventory: Item[];
}
