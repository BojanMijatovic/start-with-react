import React from 'react';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {

  state = {
    person: {
      name: 'Alex',
      lastName: 'Smith'
    }
  }

  render() {
    const helloWorld = `Welcome to React road map`;
    return (
      <div className='ui container'>
        <h2 className='ui huge header'>{helloWorld}</h2>
        <h3>This is {this.state.person.name} {this.state.person.lastName}</h3>

        <i className="rs flag"></i>
        <p>Greets from Serbia</p>

      </div>
    )
  }
}

export default App;
