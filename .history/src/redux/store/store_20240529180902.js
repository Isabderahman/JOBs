import { utilisateurReducer } from "../reducers/utilisateurReducer";
import {legacy_createStore} from 'redux';

const store = legacy_createStore(utilisateurReducer)
export default store ;