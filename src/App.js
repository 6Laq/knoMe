import React from 'react';
import './App.css';

import MessageList from './components/MessageList'
import ContactList from './components/ContactList';
import InputBar from './components/Input';

const DUMMY_DATA = [
  {
      senderId: 'Josuke',
      text: 'Hey, how is it going?'
  },
  {
      senderId: 'DraeMun',
      text: 'Great! How about you?'
  },
  {
      senderId: 'Josuke',
      text: 'Good to hear! I am great as well'
  }
]

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '', messages: DUMMY_DATA}
    this.handleMessage = this.handleMessage.bind(this)
  }

  sendMessage(value) {
    this.input.sendMessage({value})
  }

  handleMessage(message) {
    this.setState({messages: [
      ...this.state.messages,
      {text: message, senderId: 'Joske'}
    ]})
  }
  
  render(){

    return (
      <div className="App row around-xs">
        <ContactList className="col-xs" />
        <MessageList sendMessage={this.sendMessage} className="col-xs" messages={this.state.messages}/>
        <InputBar  className="col-xs" message={this.handleMessage}/>
      </div>
    );
  }
}


