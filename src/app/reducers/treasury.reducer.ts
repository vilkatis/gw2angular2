import { Action } from '@ngrx/store';
import { Gw2Actions } from '../actions/gw2.actions';
import { ItemSlot } from '../models/gw2/account/item-slot.model';

export interface State {
  ids: number[];
  data: { [id: number]: ItemSlot[] };
  loaded: boolean;
}

export const initialState: State = {
  ids: [],
  data: {},
  loaded: false
};

export function treasuryReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case Gw2Actions.LOAD_TREASURY_SUCCESS: {
      let mergedTreasury = {};
      let stateTreasury = state.data;
      let addedData = action.payload;
      addedData = addedData.reduce((previousValue, currentValue) => {
        if (currentValue !== null) {
          previousValue[currentValue.id] = currentValue;
        }
        return previousValue;
      }, {});
      for (let addedItem in addedData) {
        if (addedData.hasOwnProperty(addedItem)) {
          if (stateTreasury.hasOwnProperty(addedItem)) {
            mergedTreasury[addedItem] = Object.assign({}, stateTreasury[addedItem]);
            mergedTreasury[addedItem].count += addedData[addedItem].count;
              console.log(mergedTreasury[addedItem].count, 'merge Item');
              console.log(addedData[addedItem].count, 'added Item');
          } else {
            mergedTreasury[addedItem] = addedData[addedItem];
          }
        }
      }
      return Object.assign({}, state, { data: Object.assign({}, mergedTreasury), loaded: true });
    }
    default: {
      return state;
    }
  }
}
