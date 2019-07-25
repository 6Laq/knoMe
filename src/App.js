import React from 'react';
import './App.css';

import MessageList from './components/MessageList'
import ContactList from './components/ContactList';


export default class App extends React.Component {
  
  render(){

    return (
      <div className="App row between-xs">
        <ContactList className="col-xs-3" />
        <MessageList className="col-xs-5" />
      </div>
    );
  }
}


