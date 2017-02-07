import { Item } from './../models/item.model';
import { Account } from './../models/account.model';

export interface Gw2State {

    account: Account;
    bankItems: Item[];

}