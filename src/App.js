import React from 'react';
import './App.css';

import MessageList from './components/MessageList'
import ContactList from './components/ContactList';
import InputBar from './components/Input';


export default class App extends React.Component {
  
  render(){

    return (
      <div className="App">
        <ContactList />
        <MessageList />
        <InputBar />
      </div>
    );
  }
}


