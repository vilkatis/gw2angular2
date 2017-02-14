import { Action } from '@ngrx/store';
import { Gw2Actions } from '../../actions';
import { Account, initialAccountState } from './../../models/account.model';

export function accountReducer(state = initialAccountState, action: Action): Account {
    switch (action.type) {

        case Gw2Actions.LOAD_ACCOUNT_SUCCESS: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
}
