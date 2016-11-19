import React, { Component } from 'react';
import './App.css';

import NavBar from './components/navbar'
import ChatRoom from './components/chatroom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ChatRoom />
      </div>
    );
  }
}

export default App;
