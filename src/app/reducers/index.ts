import { createSelector } from 'reselect';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
// import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';

import { AppState } from '../models/app-state.model';

import { gw2Reducer } from './gw2';
import { uiReducer } from './ui.reducer';

const reducers = {
    gw2State: gw2Reducer,
    uiState: uiReducer
};

const developmentReducer: ActionReducer<AppState> = compose(
  // storeLogger(),
  storeFreeze,
  combineReducers
)(reducers);
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (ENV === 'production') {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}

export const getGw2State = (state: AppState) => state.gw2State;

/*

 temp2.forEach(function (item, itemIndex) {
 if (item != null) {
 if (merged.length == 0) {
 merged.push(item);

 } else {
 if (!merged.some(function (mergedItem, mergedIndex) {
 console.log(mergedItem);

 })) {
 merged.push(item);
 } else {
 let targetItem = merged.filter(function (targetItem) { return targetItem.id === item.id; })[0];
 targetItem.count += item.count;
 }
 }
 }

 });

 */
