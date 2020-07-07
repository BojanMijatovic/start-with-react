import React from 'react';
import Transport from './components/Transport';


class App extends React.Component {
  state = {
    title: 'Welcome to React Transport demo app'
  }

  render() {
    return (
      <div className='ui container'>
        <h1 className='ui header centered'>{this.state.title}</h1>
        <Transport name='Audi' year='2005' manufacturer='GENERAL MOTORS' engine='L4, 2.4L; DOHC; 16V' />
        <Transport name='Volvo' year='2020' manufacturer='Volvo Sweden' engine='L8, 3.2L; DOHC; 8V' />
        <Transport name='Mercedes' year='2010' manufacturer='Mercedes Benz' engine='L6, 3.6L; DOHC; 12V' />
      </div>
    )
  }
}

export default App;
