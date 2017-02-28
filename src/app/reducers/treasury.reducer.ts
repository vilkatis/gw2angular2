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
  console.log(action);
  switch (action.type) {
    case Gw2Actions.LOAD_TREASURY_SUCCESS: {
      return Object.assign([], state, {data: [action.payload , ...state.data], loaded: true});
    }
    default: {
      return state;
    }
  }
}
