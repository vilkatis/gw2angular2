import { Action } from '@ngrx/store';
import { Gw2Actions } from '../../actions';
import { Gw2Account } from '../../models/gw2/account/gw2-account.model';

export interface State {
  data: Gw2Account;
  loaded: boolean;
}

export const initialState: State = {
  data: {
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
  loaded: false
};

export function accountReducer(state = initialState, action: Action): State {
  switch (action.type) {

    case Gw2Actions.LOAD_ACCOUNT_SUCCESS: {
      return {
        data: action.payload,
        loaded: true
      };
    }

    default: {
      return state;
    }
  }
}
