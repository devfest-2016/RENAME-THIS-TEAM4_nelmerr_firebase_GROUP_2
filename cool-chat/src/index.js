import React from 'react';
import ReactDOM from 'react-dom';

import {Router, browserHistory} from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers';

import { fetchMessages } from './actions'

const store = createStore(rootReducer, applyMiddleware(ReduxPromise))
store.dispatch(fetchMessages())

ReactDOM.render(
    <Provider store={store} >
        <Router history={browserHistory} routes={routes} />
    </Provider >, document.getElementById('root')
)
