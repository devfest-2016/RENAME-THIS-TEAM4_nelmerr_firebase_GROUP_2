import { combineReducers, createStore, compose } from 'redux';
import {reduxReactFirebase, firebaseStateReducer} from 'redux-react-firebase'
import {fetchMessages} from '../actions'

import messagesReducer from './messages_reducer';

const rootReducer = combineReducers({
    messages: messagesReducer,
    firebase: firebaseStateReducer
})

// const config = {
//     apiKey: "AIzaSyB0QAJAnXUD3YlpqtSRMll5HpsQkWOc1-U",
//     authDomain: "cool-chat-app-ecf70.firebaseapp.com",
//     databaseURL: "https://cool-chat-app-ecf70.firebaseio.com/",
//     storageBucket: ""
// }

var config = {
  apiKey: "AIzaSyCWrpiO6iHUyvaB2rTM_6AHT_m6YncJTZE",
  authDomain: "voxpopuli-ff652.firebaseapp.com",
  databaseURL: "https://voxpopuli-ff652.firebaseio.com",
  storageBucket: "voxpopuli-ff652.appspot.com",
  messagingSenderId: "521160580286"
};

const createStoreWithFirebase = compose(
    reduxReactFirebase(config),
)(createStore)

let store = createStoreWithFirebase(rootReducer)

store.dispatch( fetchMessages() )
