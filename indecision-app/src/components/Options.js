import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div>
      <h3>We have {props.options} options here</h3>
      <Option />
    </div>
  )
}

export default Options;
