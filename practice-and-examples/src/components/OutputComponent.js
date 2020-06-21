import React from 'react'

const Output = (props) => {
  return (
    <div>
      <p>Lorem1 </p>
      <p>Lorem 2  {props.fromState}</p>
      <p>Lorem 2  {props.userName}</p>
    </div>
  )
}

export default Output;
