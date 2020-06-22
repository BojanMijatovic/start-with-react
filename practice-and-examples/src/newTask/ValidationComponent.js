import React from 'react';

const ValidationComponent = (props) => {
  return (
    <div>
      {props.inputLength > 5 ?
        'Good length off text'
        : 'To short length'
      }
    </div>
  )
}


export default ValidationComponent;