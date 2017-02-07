import { Action } from '@ngrx/store';
import { Gw2Actions } from '../actions';

import { Gw2State } from './../store/store-data';

export type Gw2State = Gw2State;

const initialState: Gw2State = {
    account: {
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
    },
    bankItems: [{id: 12345,count: 1}]
};

export default function (state = initialState, action: Action): Gw2State {
    switch (action.type) {

        case Gw2Actions.LOAD_ACCOUNT_SUCCESS: {
            return action.payload;
        }

        case Gw2Actions.LOAD_BANK_SUCCESS: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
}
