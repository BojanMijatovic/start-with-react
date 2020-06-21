import React from 'react';

let randomNum = () => {
  return Math.floor(Math.random() * 50 + 1);
}

const Person = (props) => {
  return (
    <div>
      <h2>Person {props.name} with {randomNum()} years old</h2>
      <h3>{props.children}</h3>
    </div>
  )
}

export default Person;