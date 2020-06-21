import React from 'react'

const Output = (props) => {
  return (
    <div>
      <p>{props.fromMethod}</p>
      <p> {props.fromState}</p>
      <p> {props.userName}</p>
    </div>
  )
}

export default Output;
