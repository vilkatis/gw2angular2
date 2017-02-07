import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import 'rxjs/add/operator/switchMap';

import { AppState } from '../reducers';
import { Gw2Actions } from '../actions';
import { Gw2Service } from '../services';

@Injectable()
export class Gw2Effects {

@Effect() loadAccount$ = this._update$
        .ofType(Gw2Actions.LOAD_ACCOUNT)
        .map(action => action.payload)
        .switchMap(key => this._gw2Service.getAccount(key))
        .map(account => this._gw2Actions.loadAccountSuccess(account));

    constructor(
        private _update$: Actions,
        private _gw2Actions: Gw2Actions,
        private _gw2Service: Gw2Service
    ) {}

}
