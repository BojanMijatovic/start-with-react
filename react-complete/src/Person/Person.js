import React from 'react';

let randomNum = () => {
  return Math.floor(Math.random() * 50 + 1);
}


const Person = () => {
  return <h2>Return Person with {randomNum()} years old</h2>
}


export default Person;