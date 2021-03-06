import { Action } from '@ngrx/store';
import { Gw2Account, ItemSlot } from '../models';
import { type } from '../util';
import { Character } from '../models/gw2/characters/character.model';
import { Item } from '../models/gw2/items/item.model';

export class Gw2Actions {

  public static LOAD_ACCOUNT = type('[GW2] Load Gw2Account');
  public static LOAD_ACCOUNT_SUCCESS = type('[GW2] Load Gw2Account Success');
  public static LOAD_BANK = type('[GW2] Load Bank');
  public static LOAD_BANK_SUCCESS = type('[GW2] Load Bank Success');
  public static FILTER_BANK = type('[GW2] Filter Bank');
  public static FILTER_BANK_SUCCESS = type('[GW2] Filter Bank Success');
  public static LOAD_CHARACTER_INVENTORY = type('[GW2] Load Characters Inventory');
  public static LOAD_CHARACTER_INVENTORY_SUCCESS = type('[GW2] Load Characters Inventory Success');
  public static LOAD_ITEMS = type('[GW2] Load Items');
  public static LOAD_ITEMS_SUCCESS = type('[GW2] Load Items Success');
  public static LOAD_CHARACTERS = type('[GW2] Load Characters');
  public static LOAD_CHARACTERS_SUCCESS = type('[GW2] Load Characters Success');
  public static LOAD_TREASURY = type('[GW2] Load Treasury');
  public static LOAD_TREASURY_SUCCESS = type('[GW2] Load Treasury Success');

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

  public loadBankSuccess(items: ItemSlot[]) {
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

  public filterBankSuccess(items: ItemSlot[]) {
    return {
      type: Gw2Actions.FILTER_BANK_SUCCESS,
      payload: items
    };
  }

  public loadCharacters(): Action {
    return {
      type: Gw2Actions.LOAD_CHARACTERS
    };
  }

  public loadCharactersSuccess(characters: Character[]) {
    return {
      type: Gw2Actions.LOAD_CHARACTERS_SUCCESS,
      payload: characters
    };
  }

  public loadCharactersInventory(characterName: string): Action {
    return {
      type: Gw2Actions.LOAD_CHARACTER_INVENTORY,
      payload: characterName
    };
  }

  public loadCharacterInventorySuccess(character: Character) {
    return {
      type: Gw2Actions.LOAD_CHARACTER_INVENTORY_SUCCESS,
      payload: character
    };
  }

  public loadItems(ids: number[]): Action {
    return {
      type: Gw2Actions.LOAD_ITEMS,
      payload: ids
    };
  }

  public loadItemsSuccess(items: { [id: number]: Item }) {
    return {
      type: Gw2Actions.LOAD_ITEMS_SUCCESS,
      payload: items
    };
  }

  public loadTreasury(inventory: ItemSlot[]): Action {
    return {
      type: Gw2Actions.LOAD_TREASURY,
      payload: inventory
    };
  }

  public loadTreasurySuccess(inventory: ItemSlot[]) {
    return {
      type: Gw2Actions.LOAD_TREASURY_SUCCESS,
      payload: inventory
    };
  }
}
