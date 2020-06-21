import React from 'react';
import ReactDOM from 'react-dom';

class IndecisionApp extends React.Component {

  template = {
    name: 'Indecision app',
    options: []
  }

  submitForm = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value;
    if (option) {
      this.template.options.push(option);
      event.target.elements.option.value = '';
      console.log(this.template.options);
    }
  }

  render() {
    return (
      <div>{this.template.name}
        <div>{this.template.options.length > 0 ? `Here is options: ${this.template.options}` : 'No options'}</div>
        <form onSubmit={this.submitForm}>
          <label>Input :</label>
          <input type='text' name='option' />
          <button>add option</button>
        </form>
        <p>{this.template.options.length}</p>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.querySelector('#root'));