import React from 'react';
import './Person.css'

let randomNum = () => {
  return Math.floor(Math.random() * 50 + 1);
}

const Person = (props) => {
  return (
    <div className='persons' onClick={props.deletePerson}>
      <h2 className='person_name'>Person {props.name} with {randomNum()} years old</h2>
      <h3 onClick={props.click}>{props.children}</h3>
      <input type='text' onChange={props.changedName} value={props.name} />
    </div>
  )
}

export default Person;