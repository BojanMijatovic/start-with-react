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

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person name={person.name} deletePerson={() => this.deletePersonHandler(index)} />   // render single person with map 
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <p> Its really work </p>
        <button onClick={this.togglePersonHandler}>Show  Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
