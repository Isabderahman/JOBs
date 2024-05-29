import { parentReducers } from "../reducers/parentReducers";
import {legacy_createStore} from 'redux';

const store = legacy_createStore(parentReducers)
export default store ;