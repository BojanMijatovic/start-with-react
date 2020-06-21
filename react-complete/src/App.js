import React, { useState } from 'react';
import './App.css';
import Person from '../src/Person/Person';

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [{
      name: 'Alex'
    }, {
      name: 'Rex'
    }, {
      name: 'Steven'
    }]
  })


  const switchNameHandler = () => {
    setPersonsState({
      persons: [{
        name: 'test'
      }, {
        name: 'zero'
      }, {
        name: 'React'
      }]
    })
  }

  return (
    <div className="App">
      <h1>React App</h1>
      <p> Its really work </p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} />
      <Person name={personsState.persons[1].name}>Hobbies : Learn Js and Learn React</Person>
      <Person name={personsState.persons[2].name} />
    </div>
  );

}

export default App;


/*
 state = {
persons: [{
  name: 'Alex'
}, {
  name: 'Rex'
}, {
  name: 'Steven'
}]
  }


*/