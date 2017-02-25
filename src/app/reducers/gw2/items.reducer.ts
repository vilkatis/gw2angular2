import { Action } from '@ngrx/store';
import { Gw2Actions } from '../../actions';
import { Item } from '../../models/gw2/items/item.model';

export interface State {
  ids: number[];
  data: Item[];
  loaded: boolean;
}

export const initialState: State = {
  ids: [],
  data: [],
  loaded: false
};

export function itemsReducer(state = initialState, action: Action): State {
  switch (action.type) {

    case Gw2Actions.LOAD_ITEMS_SUCCESS: {
      const itemData = action.payload;
      const itemIds = itemData.reduce((previousValue: number, currentValue: number) => {
        previousValue = currentValue['id'];
      });
      return {
        ids: itemIds,
        data: itemData,
        loaded: true
      };
    }

    default: {
      return state;
    }
  }
}
