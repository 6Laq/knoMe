import React from 'react'

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

class MessageList extends React.Component {
  render(){
    return(
      <div className="message-list">
        {DUMMY_DATA.map((message, index) => {
          return (
            <div key={index} className="messages">
              <div className="message-sender">{message.senderId}</div>
              <div className="message-text">{message.text}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default MessageList;