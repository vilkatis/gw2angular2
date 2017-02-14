import { Gw2State, initialGw2State } from './gw2-state';
import { UiState, initialUiState } from './ui-state';

export interface State {

    uiState: UiState;
    gw2State: Gw2State;

}

export const initialState: State = {
    uiState: initialUiState,
    gw2State: initialGw2State
}
