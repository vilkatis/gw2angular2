import { ItemSlot } from './account/item-slot.model';
import { Gw2Account } from './account/gw2-account.model';

export interface Gw2State {
    account: Gw2Account;
    bank: ItemSlot[];
    characters: string[];
}
