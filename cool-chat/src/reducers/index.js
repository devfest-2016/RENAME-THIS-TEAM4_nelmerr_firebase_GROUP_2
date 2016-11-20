// import { combineReducers, createStore, compose } from 'redux';
// import {reduxReactFirebase, firebaseStateReducer} from 'redux-react-firebase'
// import {fetchMessages} from '../actions'
import { combineReducers } from 'redux';
import messagesReducer from './messages_reducer';

const rootReducer = combineReducers({
    messages: messagesReducer//,
    // firebase: firebaseStateReducer
})

export default rootReducer;

// const config = {
//     apiKey: "AIzaSyB0QAJAnXUD3YlpqtSRMll5HpsQkWOc1-U",
//     authDomain: "cool-chat-app-ecf70.firebaseapp.com",
//     databaseURL: "https://cool-chat-app-ecf70.firebaseio.com/",
//     storageBucket: ""
// }

// const createStoreWithFirebase = compose(
//     reduxReactFirebase(config),
// )(createStore)
//
// let store = createStoreWithFirebase(rootReducer)

// store.dispatch( fetchMessages() )
