import { Gw2State } from './store-data';
import { UiState } from './ui-state';

export interface ApplicationState {

    uiState: UiState;
    gw2Data: Gw2State;

}
