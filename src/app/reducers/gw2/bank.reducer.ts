import { Action } from '@ngrx/store';
import { Gw2Actions } from '../../actions';
import { Item, initialItemState } from '../../models/item.model';

export function bankReducer(state = [initialItemState], action: Action): Item[] {
  switch (action.type) {

    case Gw2Actions.LOAD_BANK_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
