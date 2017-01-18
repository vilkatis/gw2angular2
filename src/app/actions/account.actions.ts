import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { type } from '../util';

import { Account } from '../models';

@Injectable()

export class AccountActions {
    
    static LOAD_ACCOUNT = type('[Account] Load Account');
    static LOAD_ACCOUNT_SUCCESS = type('[Account] Load Account Success');

    loadAccount(): Action {
        return {
            type: AccountActions.LOAD_ACCOUNT
        }
    }

    loadAccountSuccess(account: Account) {
        return {
            type: AccountActions.LOAD_ACCOUNT_SUCCESS,
            payload: account
        }
    }
}