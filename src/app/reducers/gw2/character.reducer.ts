import { Action } from '@ngrx/store';
import { Gw2Actions } from '../../actions';
import { Character } from '../../models/gw2/characters/character.model';

export interface State {
  names: string[];
  data: Character[];
  loaded: boolean;
}

export const initialState: State = {
  names: [],
  data: [],
  loaded: false
};

export function characterReducer(state = initialState, action: Action): State {
  switch (action.type) {

    case Gw2Actions.LOAD_CHARACTER_NAMES_SUCCESS: {
      return Object.assign({}, state, {names: action.payload});
    }

    case Gw2Actions.LOAD_CHARACTER_INVENTORY_SUCCESS: {
      return Object.assign({}, state, {data: action.payload, loaded: true});
    }

    default: {
      return state;
    }
  }
}
