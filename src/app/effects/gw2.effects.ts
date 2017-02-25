import { ItemSlot } from '../models/gw2/account/item-slot.model';
import { Gw2Account } from '../models/gw2/account/gw2-account.model';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';

import { Gw2Actions } from '../actions';
import { Gw2Service } from '../services';
import { Character } from '../models/gw2/characters/character.model';
import { Item } from '../models/gw2/items/item.model';

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
    .mergeMap((bankItems: ItemSlot[]) => {
      let test = bankItems.map((bankItem: ItemSlot) => {
        if (bankItem !== null) {
          return bankItem.id;
        }
      });
      return [this._gw2Actions.loadItems(test),
      this._gw2Actions.loadBankSuccess(bankItems)];
    });

  @Effect() private loadCharacterNames$: Observable<Action> = this._actions$
    .ofType(Gw2Actions.LOAD_CHARACTER_NAMES)
    .map((action) => action.payload)
    .switchMap(() => this._gw2Service.getCharacterNames())
    .map((characterNames: string[]) => this._gw2Actions.loadCharacterNamesSuccess(characterNames));

  @Effect() private loadCharacterInventory$: Observable<Action> = this._actions$
    .ofType(Gw2Actions.LOAD_CHARACTER_INVENTORY)
    .map((action) => action.payload)
    .switchMap((characterName) => this._gw2Service.getCharacterInventory(characterName))
    .map((character: Character) => this._gw2Actions.loadCharactersInventorySuccess(character));

  @Effect() private loadItems: Observable<Action> = this._actions$
    .ofType(Gw2Actions.LOAD_ITEMS)
    .map((action) => action.payload)
    .switchMap((ids) => this._gw2Service.getItems(ids))
    .map((items: Item[]) => {
      let itemArray = items.reduce((previousValue, currentValue) => {
        previousValue[currentValue.id] = currentValue;
        return previousValue;
      }, {});
      return this._gw2Actions.loadItemsSuccess(itemArray);
    });

  constructor(private _actions$: Actions,
              private _gw2Actions: Gw2Actions,
              private _gw2Service: Gw2Service) {
  }

}
