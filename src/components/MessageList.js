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
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const input = this.state.value;
    console.log(input);
    event.preventDefault();
      this.setState({value: ''})
  }

  



  render(){
    return(
      <div className="message-list">
        <div>
          {DUMMY_DATA.map((message, index) => {
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
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                type="text" 
                placeholder="message" 
                value={this.state.value} 
                onChange={this.handleChange}
                />
            </label>
          </form>
        </div>
      </div>
    )
  }
}

export default MessageList;