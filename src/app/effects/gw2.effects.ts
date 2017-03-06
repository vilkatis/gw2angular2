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
      return [this._gw2Actions.loadBankSuccess(bankItems),
        this._gw2Actions.loadTreasury(bankItems)];
    });

  @Effect() private loadCharacters$: Observable<Action> = this._actions$
    .ofType(Gw2Actions.LOAD_CHARACTERS)
    .map((action) => action.payload)
    .switchMap(() => this._gw2Service.getCharacters())
    .mergeMap((characters: Character[]) => {
      let characterAction = [];
      characters.map((character) => {
        character.bags.map((bag) => {
          if (bag !== null) {
            characterAction.push(...bag.inventory);
          }
        });
      });
      return [this._gw2Actions.loadCharactersSuccess(characters),
        this._gw2Actions.loadTreasury(characterAction)];
    });

  @Effect() private loadItems$: Observable<Action> = this._actions$
    .ofType(Gw2Actions.LOAD_ITEMS)
    .map((action) => action.payload)
    .switchMap((ids) => this._gw2Service.getItems(ids))
    .map((items: Item[]) => this._gw2Actions.loadItemsSuccess(items));

  @Effect() private loadTreasury$: Observable<Action> = this._actions$
    .ofType(Gw2Actions.LOAD_TREASURY)
    .map((action) => action.payload)
    .map((inventory) => inventory)
    .map((inventory: ItemSlot[]) => this._gw2Actions.loadTreasurySuccess(inventory));

  constructor(private _actions$: Actions,
              private _gw2Actions: Gw2Actions,
              private _gw2Service: Gw2Service) {
  }
}

/*
 @Effect() private loadCharacterInventory$: Observable<Action> = this._actions$
 .ofType(Gw2Actions.LOAD_CHARACTER_INVENTORY)
 .map((action) => action.payload)
 .mergeMap((characterName) => this._gw2Service.getCharacterInventory(characterName))
 .mergeMap((character: Character) => {
 let arrMap = [];
 character.bags.bags.map((bag) => {
 if (bag !== null) {
 arrMap.push(this._gw2Actions.loadTreasurySuccess(bag.inventory));
 }
 });
 return [...arrMap, this._gw2Actions.loadCharacterInventorySuccess(character)];
 });
 */
