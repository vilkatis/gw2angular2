import { Action } from '@ngrx/store';
import { UiActions } from '../actions/ui.actions';
import { UiState, initialUiState } from '../models/ui-state.model';

export function uiReducer(state = initialUiState, action: Action): UiState {
  switch (action.type) {

    case UiActions.LOAD_UI_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
