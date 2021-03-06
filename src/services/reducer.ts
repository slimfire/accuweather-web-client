import { StoreState } from '../interfaces';
import { ACTION_TYPE } from "../services/action-types";
import { Action } from './interfaces';

let initialState: StoreState = {
    countries: [],
    regions: [],
};

export let reducer = (state: StoreState = initialState, action: Action) => {
    switch(action.type) {
        case ACTION_TYPE.FETCH_DATA_SUCCESS:
            let newState: any = { ...state };
            newState[`${action.feature}`] = action.body;

            return newState;
            case ACTION_TYPE.FETCH_DATA_ERROR:
            return state;
        default: {
            return state;
        }
    }
}