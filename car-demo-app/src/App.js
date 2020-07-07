import React from 'react';
import faker from 'faker';
import Transport from './components/Transport';

class App extends React.Component {
  state = {
    title: 'Welcome to React Transport demo app'
  }

  render() {
    return ( // same property name but other value
      <div className='ui container'>
        <h1 className='ui header centered'>{this.state.title}</h1>
        <Transport name='Audi'
          year='2005' manufacturer='General Motors'
          engine='L4, 2.4L; DOHC; 16V'
          picture={faker.image.transport()} />

        <Transport name='Volvo' year='2020'
          manufacturer='Volvo Sweden'
          engine='L8, 3.2L; DOHC; 8V'
          picture={faker.image.transport()} />

        <Transport name='Mercedes' year='2010'
          manufacturer='Mercedes Benz'
          engine='L6, 3.6L; DOHC; 12V'
          picture={faker.image.transport()} />
      </div>
    )
  }
}

export default App;
