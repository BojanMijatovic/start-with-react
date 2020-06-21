import React from 'react';

const InputComponent = (props) => {
  return (
    <div>
      <input type='text' onChange={props.showInput} />
    </div>
  )
}


export default InputComponent;