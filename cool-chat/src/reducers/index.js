import { combineReducers } from 'redux';
import messagesReducer from './messages_reducer';

const rootReducer = combineReducers({
    funMessages: messagesReducer
})

export default rootReducer