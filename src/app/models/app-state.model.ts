import { Gw2State, initialGw2State } from './gw2-state.model';
import { UiState, initialUiState } from './ui-state.model';

export interface AppState {

    gw2State: Gw2State;
    uiState: UiState;
}

export const initialState: AppState = {
    uiState: initialUiState,
    gw2State: initialGw2State
};
