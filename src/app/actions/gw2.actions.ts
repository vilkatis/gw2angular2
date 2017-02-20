import { Action } from '@ngrx/store';
import { Gw2Account, Item } from '../models';
import { type } from '../util';
import { Character } from '../models/character.model';

export class Gw2Actions {

  public static LOAD_ACCOUNT = type('[GW2] Load Gw2Account');
  public static LOAD_ACCOUNT_SUCCESS = type('[GW2] Load Gw2Account Success');
  public static LOAD_BANK = type('[GW2] Load Bank');
  public static LOAD_BANK_SUCCESS = type('[GW2] Load Bank Success');
  public static FILTER_BANK = type('[GW2] Filter Bank');
  public static FILTER_BANK_SUCCESS = type('[GW2] Filter Bank Success');
  public static LOAD_CHARACTER_NAMES = type('[GW2] Load Characters');
  public static LOAD_CHARACTER_NAMES_SUCCESS = type('[GW2] Load Characters Success');
  public static LOAD_CHARACTERS_INVENTORY = type('[GW2] Load Characters Inventory');
  public static LOAD_CHARACTERS_INVENTORY_SUCCESS = type('[GW2] Load Characters Inventory Success');

  public loadAccount(): Action {
    return {
      type: Gw2Actions.LOAD_ACCOUNT
    };
  }

  public loadAccountSuccess(account: Gw2Account) {
    return {
      type: Gw2Actions.LOAD_ACCOUNT_SUCCESS,
      payload: account
    };
  }

  public loadBank(): Action {
    return {
      type: Gw2Actions.LOAD_BANK
    };
  }

  public loadBankSuccess(items: Item[]) {
    return {
      type: Gw2Actions.LOAD_BANK_SUCCESS,
      payload: items
    };
  }

  public filterBank(): Action {
    return {
      type: Gw2Actions.FILTER_BANK
    };
  }

  public filterBankSuccess(items: Item[]) {
    return {
      type: Gw2Actions.FILTER_BANK_SUCCESS,
      payload: items
    };
  }

  public loadCharacterNames(): Action {
    return {
      type: Gw2Actions.LOAD_CHARACTER_NAMES,
    };
  }

  public loadCharacterNamesSuccess(characters: Character[]) {
    return {
      type: Gw2Actions.LOAD_CHARACTER_NAMES_SUCCESS,
      payload: characters
    };
  }

  public loadCharacterInventory(characterName: string) {
    return {
      type: Gw2Actions.LOAD_CHARACTERS_INVENTORY
    };
  }

  public loadCharactersInventorySuccess(characters: Character[]) {
    return {
      type: Gw2Actions.LOAD_CHARACTERS_INVENTORY_SUCCESS,
      payload: characters
    };
  }
}
