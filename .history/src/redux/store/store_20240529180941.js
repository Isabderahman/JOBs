import { combineReducers } from '../reducers/combineReducers';
import {legacy_createStore} from 'redux';

const store = legacy_createStore(utilisateurReducer)
export default store ;