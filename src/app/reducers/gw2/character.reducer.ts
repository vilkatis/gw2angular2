import { Action } from '@ngrx/store';
import { Gw2Actions } from '../../actions';

export function characterReducer(state = [''], action: Action): string[] {
    switch (action.type) {

        case Gw2Actions.LOAD_CHARACTERS_SUCCESS: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
}
