import React, { Component } from 'react';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Widget />
      </div>
    );
  }
}

export default App;
