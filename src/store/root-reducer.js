import {combineReducers} from 'redux'
import { filterReducer } from './filters/filters-reducer';
import { positionReducer } from './positions/positions-reducer';

export const rootReducer = combineReducers({
    positions: positionReducer,
    filters: filterReducer,
});