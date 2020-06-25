import React from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'


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
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
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
          <Persons
            persons={this.state.persons}
            deleted={this.deletePersonHandler}
            changed={this.inputValueHandler}
          />
        </div>
      )
    }

    const classes = [];                             // dynamically add classes to css
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <p className={classes.join(' ')}> Its really work </p>
        <button onClick={this.togglePersonHandler}>Show  Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
