import { Item } from './../models/item.model';
import { Account } from './../models/account.model';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import 'rxjs/add/operator/switchMap';

import { Gw2Actions } from '../actions';
import { Gw2Service } from '../services';

@Injectable()
export class Gw2Effects {

@Effect() loadAccount$: Observable<Action> = this._actions$
        .ofType(Gw2Actions.LOAD_ACCOUNT)
        .map(action => action.payload)
        .switchMap(key => this._gw2Service.getAccount(key))
        .map((account: Account) => this._gw2Actions.loadAccountSuccess(account));

@Effect() loadBank$: Observable<Action> = this._actions$
        .ofType(Gw2Actions.LOAD_BANK)
        .map(action => action.payload)
        .switchMap(key => this._gw2Service.getBankItems(key))
        .map((bankItems: Item[]) => this._gw2Actions.loadBankSuccess(bankItems));


    constructor(
        private _actions$: Actions,
        private _gw2Actions: Gw2Actions,
        private _gw2Service: Gw2Service
    ) {}

}
