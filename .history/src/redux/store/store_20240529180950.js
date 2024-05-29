import { combineReducers } from '../reducers/combineReducers';
import {legacy_createStore} from 'redux';

const store = legacy_createStore(combineReducers)
export default store ;