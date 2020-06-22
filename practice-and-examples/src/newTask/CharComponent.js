import React from 'react';

const CharComponent = (props) => {
  return (
    <div onClick={props.clicked}> {props.character}</div>
  )
}

export default CharComponent;