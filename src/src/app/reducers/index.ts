import { createSelector } from 'reselect';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from './../../environments/environment.prod';
import { State } from './../store/state';


import {gw2Reducer } from './gw2.reducer';

const reducers = {
    gw2State: gw2Reducer
};

const developmentReducer: ActionReducer<State> = compose(storeLogger(), storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}

export const getGw2State = (state: State) => state.gw2State;
