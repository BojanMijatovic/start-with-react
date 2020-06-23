import React from 'react';
import ValidationComponent from './newTask/ValidationComponent';
import CharComponent from './newTask/CharComponent';
class NewTask extends React.Component {
  state = {
    charLength: ''
  }

  showLengthChar = (e) => {
    this.setState({ charLength: e.target.value })
  }

  removeSingleEl = (id) => {
    const single = this.state.charLength.split(' ');
    single.splice(id, 1);
    const updateText = single.join(' ');
    this.setState({ charLength: updateText })
  }

  render() {
    const charList = this.state.charLength.split(' ').map((char, id) => {
      return <CharComponent character={char} key={id} clicked={() => this.removeSingleEl(id)} />
    })

    return (
      <div>
        <h1>Max task 02</h1>
        <input type='text'
          onChange={(e) => this.showLengthChar(e)}
          value={this.state.charLength} />
        <p>{this.state.charLength}</p>
        <ValidationComponent inputLength={this.state.charLength.length} />
        {charList}
      </div>
    )
  }
}

export default NewTask;