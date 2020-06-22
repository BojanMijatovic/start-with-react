import React from 'react';
import ValidationComponent from './newTask/ValidationComponent';

class NewTask extends React.Component {
  state = {
    charLength: ''
  }


  showLengthChar = (e) => {
    this.setState({ charLength: e.target.value })
  }


  render() {
    return (
      <div>
        <h1>Max task 02</h1>
        <input type='text'
          onChange={(e) => this.showLengthChar(e)}
          value={this.state.charLength} />
        <p>{this.state.charLength}</p>
        <ValidationComponent inputLength={this.state.charLength.length} />
      </div>
    )
  }
}

export default NewTask;