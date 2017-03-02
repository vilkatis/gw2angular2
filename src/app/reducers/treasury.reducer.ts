import { Action } from '@ngrx/store';
import { Gw2Actions } from '../actions/gw2.actions';
import { ItemSlot } from '../models/gw2/account/item-slot.model';

export interface State {
  ids: number[];
  data: ItemSlot[];
  loaded: boolean;
}

export const initialState: State = {
  ids: [],
  data: [],
  loaded: false
};

export function treasuryReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case Gw2Actions.LOAD_TREASURY_SUCCESS: {
      let mergedTreasury = [];
      let stateTreasury = state.data;
      stateTreasury = stateTreasury.concat(action.payload);
      stateTreasury.forEach((slot) => {
        if (slot !== null) {
        }
      });
      return Object.assign({}, state, { data: mergedTreasury, loaded: true });
    }
    default: {
      return state;
    }
  }
}
