import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import gw2Reducer, * as fromGw2 from './gw2.reducer';

export interface AppState {
    account: fromGw2.Gw2State;
};

export default compose(storeLogger(), storeFreeze, combineReducers)({
    account: gw2Reducer
})