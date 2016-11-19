import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {Router, browserHistory} from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import {reduxReactFirebase, firebaseStateReducer} from 'redux-react-firebase'

import ReduxPromise from 'redux-promise';
import rootReducer from './reducers';

import { fetchMessages } from './actions'

const store = createStore(rootReducer, applyMiddleware(ReduxPromise))

const config = {
    apiKey: "AIzaSyB0QAJAnXUD3YlpqtSRMll5HpsQkWOc1-U",
    authDomain: "cool-chat-app-ecf70.firebaseapp.com",
    databaseURL: "https://cool-chat-app-ecf70.firebaseio.com/",
    storageBucket: ""
}

const createStoreWithFirebase = compose(
    reduxReactFirebase(config),
    applyMiddleware(ReduxPromise)
)(store)

store.dispatch(fetchMessages())



ReactDOM.render(
    <Provider store={store} >
        <Router history={browserHistory} routes={routes} />
    </Provider >, document.getElementById('root')
)

