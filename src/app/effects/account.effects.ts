import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import 'rxjs/add/operator/switchMap';

import { AppState } from '../reducers';
import { AccountActions } from '../actions';
import { AccountService } from '../services';

@Injectable()
export class AccountEffects {
    constructor(
        private _update$: Actions,
        private _accountActions: AccountActions,
        private _accountService: AccountService
    ) {}

    @Effect() loadAccount$ = this._update$
        .ofType(AccountActions.LOAD_ACCOUNT)
        .map(action => action.payload)
        .switchMap(key => this._accountService.getAccount(key))
        .map(account => this._accountActions.loadAccountSuccess(account));
                                
}
