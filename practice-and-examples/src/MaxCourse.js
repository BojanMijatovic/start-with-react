import React from 'react';
import Output from './components/OutputComponent';
import InputComponent from './components/InputComponent';

class MaxCourse extends React.Component {
  state = {
    userName: 'name from State',
    input: ''
  }

  showNewInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }


  render() {
    return (
      <div>
        <h2>First App Practice</h2>
        <InputComponent showInput={this.showNewInput} />
        <Output userName='Name from props' fromState={this.state.userName} />
        <Output fromMethod={this.state.input} />
      </div>
    )
  }
}

export default MaxCourse;