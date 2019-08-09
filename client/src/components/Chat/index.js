import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

class index extends Component {
  componentDidMount() {
    addResponseMessage('Start typing to contact your guide!');
  }

  handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`);
  };

  render() {
    return (
      <div className='App' id='gray'>
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar=''
          title='GuideFinder Chat'
          subtitle='Message your guide!'
        />
      </div>
    );
  }
}

export default index;
