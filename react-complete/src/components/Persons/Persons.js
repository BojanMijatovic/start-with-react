import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {                            // render single person with map 
  return <Person
    name={person.name} deletePerson={() => this.deletePersonHandler(index)}
    key={person.id}
    changedName={(event) => this.inputValueHandler(event, person.id)}
  />
}
 
 


export default persons 