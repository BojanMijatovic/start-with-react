import React from 'react';
import ReactDOM from 'react-dom';

const IndecisionApp = () => {

  const template = {
    name: 'Indecision app',
    options: []
  }

  const submitForm = (event) => {
    event.preventDefault();
  }


  return (
    <div>{template.name}
      <form onSubmit={submitForm}>
        <label>Input</label>
        <input type='text' />
        <button>add option</button>
      </form>
    </div>
  )
}


ReactDOM.render(<IndecisionApp />, document.querySelector('#root'));