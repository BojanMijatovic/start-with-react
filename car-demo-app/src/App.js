import React from 'react';
import faker from 'faker';
import Car from './components/Car';


class App extends React.Component {
  state = {
    title: 'Welcome to React Car demo app'
  }

  render() {
    return (
      <div className='ui container'>
        <h1 className='ui header'>{this.state.title}</h1>
        <div className="ui card"  >
          <div className="image"  >
            <img src={faker.image.transport()} alt='car' />
          </div>
          <div className="content"  >
            <a href='/http://localhost:3000/' className="header">CHEVROLET</a>
            <div className="meta" >
              <span className="date" >year 2015</span>
            </div>
            <div className="description" >
              manufacturer: GENERAL MOTORS
          </div>
          </div>
          <div className="extra content" >
            <a href='/http://localhost:3000/'>
              <i className="user icon"></i>"engine":L4, 2.4L; DOHC; 16V</a>
          </div>
        </div>
        <Car />
      </div>
    )
  }
}

export default App;
