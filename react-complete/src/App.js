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
    }],
    showPersons: false
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

  togglePersonHandler = () => {
    const doesShowPersons = this.state.showPersons;
    this.setState({ showPersons: !doesShowPersons })
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <p> Its really work </p>
        <button onClick={this.togglePersonHandler}>Show  Persons</button>
        {
          this.state.showPersons ?  // toggle show or hide div with ternary operator if its true
            <div>
              <Person name={this.state.persons[0].name} />
              <Person name={this.state.persons[1].name} click={(e) => this.switchNameHandler('Name from anonymous')}>Hobbies : Learn Js and Learn React</Person>
              <Person name={this.state.persons[2].name} changedName={this.inputValueHandler} />
            </div>
            : null                                //  if its false
        }
      </div>
    );
  }
}

export default App;
