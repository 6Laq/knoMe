import React from 'react'

class InputBar extends React.Component {
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
    event.preventDefault();
    const input = this.state.value;
    this.props.message(input)
    this.setState({value: ''})
  }
  

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <label>

          <input
            onChange={this.handleChange}
            value={this.state.value}
            placeholder="Type your message"
            type="text" 
          />
          </label>
        </form>
      </div>
    );
  }

}

export default InputBar;