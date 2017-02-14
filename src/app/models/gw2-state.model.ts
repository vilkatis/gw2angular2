import { Item, initialItemState } from './item.model';
import { Account, initialAccountState } from './account.model';

export interface Gw2State {
    account: Account;
    bank: Item[];
    characters: string[];
}

export const initialGw2State: Gw2State = {
    account: initialAccountState,
    bank: [initialItemState],
    characters: ['']
};
