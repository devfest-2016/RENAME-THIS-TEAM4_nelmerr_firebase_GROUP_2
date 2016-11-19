import React from 'react';
import ReactDOM from 'react-dom';

import {Router, browserHistory} from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux';
import {store} from './reducers'

ReactDOM.render(
    <Provider store={store} >
        <Router history={browserHistory} routes={routes} />
    </Provider >, document.getElementById('root')
)

