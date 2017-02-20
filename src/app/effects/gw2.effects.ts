import { Item } from '../models/item.model';
import { Gw2Account } from '../models/gw2-account.model';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import 'rxjs/add/operator/switchMap';

import { Gw2Actions } from '../actions';
import { Gw2Service } from '../services';
import { Character } from '../models/character.model';

@Injectable()
export class Gw2Effects {

  @Effect() private loadAccount$: Observable<Action> = this._actions$
    .ofType(Gw2Actions.LOAD_ACCOUNT)
    .map((action) => action.payload)
    .switchMap(() => this._gw2Service.getAccount())
    .map((account: Gw2Account) => this._gw2Actions.loadAccountSuccess(account));

  @Effect() private loadBank$: Observable<Action> = this._actions$
    .ofType(Gw2Actions.LOAD_BANK)
    .map((action) => action.payload)
    .switchMap(() => this._gw2Service.getBankItems())
    .map((bankItems: Item[]) => this._gw2Actions.loadBankSuccess(bankItems));

  @Effect() private loadCharacters$: Observable<Action> = this._actions$
    .ofType(Gw2Actions.LOAD_CHARACTER_NAMES)
    .map((action) => action.payload)
    .switchMap(() => this._gw2Service.getCharacterNames())
    .map((characterNames) => {
        let characters: Character[];
        characterNames.map((characterName) => {
          console.log(characterName);
        });
        return characters;
      }
    )
    .map((characters: Character[]) => this._gw2Actions.loadCharacterNamesSuccess(characters));

  constructor(private _actions$: Actions,
              private _gw2Actions: Gw2Actions,
              private _gw2Service: Gw2Service) {
  }

}
