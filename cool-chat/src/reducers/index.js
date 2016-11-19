import { combineReducers } from 'redux';
import messagesReducer from './messages_reducer';
import {reduxReactFirebase, firebaseStateReducer} from 'redux-react-firebase'

const rootReducer = combineReducers({
    funMessages: messagesReducer,
    firebase: firebaseStateReducer
})

export default rootReducer