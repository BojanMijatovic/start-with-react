import React from 'react';
import './App.css';
import Person from '../src/Person/Person';

class App extends React.Component {

  state = {
    persons: [{
      name: 'Alex'
    }, {
      name: 'Rex'
    }, {
      name: 'Steven'
    }]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [{
        name: newName
      }, {
        name: 'React'
      }, {
        name: newName
      }]
    })
  }

  inputValueHandler = (event) => {
    this.setState({
      persons: [{
        name: 'InputValue'
      }, {
        name: 'React'
      }, {
        name: event.target.value
      }]
    })
  }


  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <p> Its really work </p>
        <button onClick={this.switchNameHandler.bind(this, 'New name from bind')}>Switch Name</button>
        <Person name={this.state.persons[0].name} />
        <Person name={this.state.persons[1].name} click={(e) => this.switchNameHandler('Name from anonymous')}>Hobbies : Learn Js and Learn React</Person>
        <Person name={this.state.persons[2].name} changedName={this.inputValueHandler} />
      </div>
    );
  }
}

export default App;
