import React from 'react';
import {Route} from 'react-router';

import App from './App'
import ChatRoom from './components/chatroom'

export default (
    <Route path="/" component={App}>
        <Route path="fun" component={ChatRoom}/>
    </Route>
)
