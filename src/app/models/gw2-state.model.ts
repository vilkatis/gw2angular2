import { Item, initialItemState } from './item.model';
import { Gw2Account, initialGw2AccountState } from './gw2-account.model';

export interface Gw2State {
    account: Gw2Account;
    bank: Item[];
    characters: string[];
}

export const initialGw2State: Gw2State = {
    account: initialGw2AccountState,
    bank: [initialItemState],
    characters: ['']
};
