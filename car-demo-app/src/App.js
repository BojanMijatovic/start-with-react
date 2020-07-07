import React from 'react';

import './style/mainApp.css';

class App extends React.Component {
  state = {
    title: 'Welcome to React'
  }

  render() {
    return (
      <div>
        <h1 className='main-title'>{this.state.title}</h1>
        <div className='car-app'>
          <label htmlFor='car'>Add Car: </label>
          <input type='text' placeholder='add car' id='car' />
          <button>submit</button>
        </div>
      </div>
    )
  }
}

export default App;
