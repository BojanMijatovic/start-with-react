import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Options from './components/Options';
class IndecisionApp extends React.Component {

  state = {
    title: 'Indecision app',
    subtitle: 'Put your life ih the hands off computer',
    options: ['option1', 'option2', 'option3']
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        <Options options={this.state.options.length} />
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.querySelector('#root'));