import { Action } from '@ngrx/store';
import { Gw2Actions } from '../../actions';
import { ItemSlot } from '../../models/gw2/account/item-slot.model';

export interface State {
  ids: number[];
  bankSlots: ItemSlot[];
  loaded: boolean;
}

export const initialState: State = {
  ids: [],
  bankSlots: [],
  loaded: false
};

export function bankReducer(state = initialState, action: Action): State {
  switch (action.type) {

    case Gw2Actions.LOAD_BANK_SUCCESS: {
      const itemSlots = action.payload;
      const itemIds = itemSlots.reduce((previousValue: number, currentValue: number) => {
        if (currentValue !== null) {
          previousValue = currentValue['id'];
          return previousValue;
        }
      });
      return {
        ids: itemIds,
        bankSlots: itemSlots,
        loaded: true
      };
    }

    default: {
      return state;
    }
  }
}
