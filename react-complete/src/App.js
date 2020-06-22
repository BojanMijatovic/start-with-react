import React from 'react';
import './App.css';
import Person from '../src/Person/Person';

class App extends React.Component {

  state = {
    persons: [{
      name: 'Alex',
      id: '01'
    }, {
      name: 'Rex',
      id: '012'
    }, {
      name: 'Steven',
      id: '0123'
    }],
    showPersons: false
  }

  inputValueHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = { ...this.state.persons[personIndex] };

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
            return <Person
              name={person.name} deletePerson={() => this.deletePersonHandler(index)}
              key={person.id}
              changedName={(event) => this.inputValueHandler(event, person.id)}
            />   // render single person with map 
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
