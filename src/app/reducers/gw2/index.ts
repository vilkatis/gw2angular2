import { createSelector } from 'reselect';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

import { Gw2State } from '../../models/gw2/gw2-state.model';

import { accountReducer } from './account.reducer';
import { bankReducer } from './bank.reducer';
import { characterReducer } from './character.reducer';
import { itemsReducer } from './items.reducer';
import { treasuryReducer } from '../treasury.reducer';

const gw2Reducers = {
  account: accountReducer,
  bank: bankReducer,
  characters: characterReducer,
  items: itemsReducer,
  treasury: treasuryReducer
};

const developmentReducer: ActionReducer<Gw2State> = compose(combineReducers)(gw2Reducers);
const productionReducer: ActionReducer<Gw2State> = combineReducers(gw2Reducers);

export function gw2Reducer(state: any, action: any) {
  if (ENV === 'production') {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export const getBankState = (state: Gw2State) => state.bank;
