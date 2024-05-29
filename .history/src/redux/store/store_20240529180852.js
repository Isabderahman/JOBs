import { parentReducers } from "../reducers/combineReducers";
import {legacy_createStore} from 'redux';

const store = legacy_createStore(ParentReducers)
export default store ;