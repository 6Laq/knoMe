import React from 'react'



// class MessageList extends React.Component {
//   constructor(props) {
//     super()
//   },
//   render(){
//     return(
//       <
//     )
//   }
// }

// export default MessageList;

export default ({messages}) => (
    <div className="message-list">
        <div>
          {messages.map((message, index) => {
            return (
              <div key={index} className="messages">
                <div className="message-sender">{message.senderId}</div>
                <div className="message-text">{message.text}</div>
              </div>
            )
          })}
        </div>
        <div  className="inputMessages" >
          
          {/* this where the real messages go */}

        </div>
    </div>
  )
