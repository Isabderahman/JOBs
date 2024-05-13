import { utilisateurReducer } from "./utilisateurReducer";
import {combineReducers} from 'redux'; 

const parentReducers = combineReducers({
    utilisateurState: utilisateurReducer,
})
export default parentReducers;