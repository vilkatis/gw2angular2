import { Gw2State } from './gw2/gw2-state.model';
import { UiState } from './ui-state.model';

export interface AppState {

    gw2State: Gw2State;
    uiState: UiState;
}
