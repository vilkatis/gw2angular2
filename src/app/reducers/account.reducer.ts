import { Action } from '@ngrx/store';

import { Account } from '../models';
import { AccountActions } from '../actions';

export type AccountState = Account;

const initialState: AccountState = {
    id: '',
    name: '',
    age: 0,
    world: 0,
    guilds: [''],
    guild_leader: [''],
    created: new Date(Date.now()),
    access: '',
    commander: true,
    fractal_level: 0,
    daily_ap: 0,
    monthly_ap: 0,
    wvw_rank: 0
}

export default function (state = initialState, action: Action): AccountState {
    switch (action.type) {

        case AccountActions.LOAD_ACCOUNT_SUCCESS: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
}