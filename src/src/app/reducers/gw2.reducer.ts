import { Action } from '@ngrx/store';
import { Gw2Actions } from '../actions';
import { Gw2State, initialGw2State } from './../store/gw2-state';

export function gw2Reducer(state = initialGw2State, action: Action): Gw2State {
    switch (action.type) {

        case Gw2Actions.LOAD_ACCOUNT_SUCCESS: {
            return Object.assign({}, state, { account: action.payload });
        }

        case Gw2Actions.LOAD_BANK_SUCCESS: {
            return Object.assign({}, state, { bankItems: action.payload });
        }

        default: {
            return state;
        }
    }
}
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