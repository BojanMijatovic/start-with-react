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


  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <p> Its really work </p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} />
        <Person name={this.state.persons[1].name}>Hobbies : Learn Js and Learn React</Person>
        <Person name={this.state.persons[2].name} />
      </div>
    );
  }
}

export default App;
