import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { type } from '../util';

import { Account, Item } from '../models';

@Injectable()

export class Gw2Actions {

    static LOAD_ACCOUNT = type('[GW2] Load Account');
    static LOAD_ACCOUNT_SUCCESS = type('[GW2] Load Account Success');
    static LOAD_BANK = type('[GW2] Bank Account');
    static LOAD_BANK_SUCCESS = type('[GW2] Load Bank Success');

    loadAccount(key): Action {
        return {
            type: Gw2Actions.LOAD_ACCOUNT,
            payload: key
        };
    }

    loadAccountSuccess(account: Account) {
        return {
            type: Gw2Actions.LOAD_ACCOUNT_SUCCESS,
            payload: account
        };
    }
    loadBank(key): Action {
        return {
            type: Gw2Actions.LOAD_BANK,
            payload: key
        };
    }

    loadBankSuccess(items: Item[]) {
        return {
            type: Gw2Actions.LOAD_BANK_SUCCESS,
            payload: items
        };
    }
}