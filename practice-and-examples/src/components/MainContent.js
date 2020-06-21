import React from 'react';


const MainContent = (props) => {
  return (
    <div>
      <p className='main'>This is main content</p>
      <p>{props.subtitle}</p>
    </div>
  )
}


export default MainContent;