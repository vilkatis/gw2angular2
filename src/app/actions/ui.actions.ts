import { Action } from '@ngrx/store';
import { type } from '../util';
import { UiState } from '../models/ui-state.model';

export class UiActions {

  public static LOAD_UI = type('[UI] Load UI');
  public static LOAD_UI_SUCCESS = type('[UI] Load UI Success');

  public loadUi(): Action {
    return {
      type: UiActions.LOAD_UI
    };
  }

  public loadUiSuccess(ui: UiState) {
    return {
      type: UiActions.LOAD_UI_SUCCESS,
      payload: ui
    };
  }

}
