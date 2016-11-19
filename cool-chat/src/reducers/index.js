import { combineReducers } from 'redux';
import funReducer from './fun_reducer';

const rootReducer = combineReducers({
    funMessages: funReducer
})

export default rootReducer