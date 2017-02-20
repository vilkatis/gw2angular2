import { Action } from '@ngrx/store';
import { Gw2Actions } from '../../actions';
import { Gw2Account, initialGw2AccountState } from '../../models/gw2-account.model';

export function accountReducer(state = initialGw2AccountState, action: Action): Gw2Account {
    switch (action.type) {

        case Gw2Actions.LOAD_ACCOUNT_SUCCESS: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
}
