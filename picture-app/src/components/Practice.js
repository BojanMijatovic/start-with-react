import React from 'react';


class InputValue extends React.Component {
  state = {
    input: ''
  }

  formTest = (e) => {
    e.preventDefault();
    this.props.test(this.state.input);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.formTest}>
          <input type='text' placeholder='test input' onChange={(e) => this.setState({ input: e.target.value })}
            value={this.state.input}></input>
        </form>

      </div>
    )
  }
}

export default InputValue;