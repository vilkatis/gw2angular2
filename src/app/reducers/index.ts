import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import accountReducer, * as fromAccount from './account.reducer';

export interface AppState {
    account: fromAccount.AccountState;
};

export default compose(storeLogger(), storeFreeze, combineReducers)({
    account: accountReducer
})