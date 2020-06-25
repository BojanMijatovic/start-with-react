import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {           // render single person with map 
  return (
    <Person
      name={person.name} deletePerson={() => props.deleted(index)}
      key={person.id}
      changedName={(event) => props.changed(event, person.id)} />
  );
});
export default persons 