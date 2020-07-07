import React from 'react';


const Transport = (props) => {
  return (
    <div className='ui grid'>
      <div className="ui card there column centered"  >
        <div className="image"  >
          <img src={props.picture} alt='car' />
        </div>
        <div className="content"  >
          <a href='/http://localhost:3000/' className="header">{props.name}</a>
          <div className="meta" >
            <span className="date" >{props.year}</span>
          </div>
          <div className="description" >
            {props.manufacturer}
          </div>
        </div>
        <div className="extra content" >
          <a href='/http://localhost:3000/'>
            <i className="user icon"></i>{props.engine}</a>
        </div>
      </div>
    </div>
  )
}

export default Transport;