import React from 'react';

class App extends React.Component {

  state = {
    person: {
      name: 'Alex',
      lastName: 'Smith'
    }
  }

  render() {
    return (
      <div>
        <h2>Welcome to React road map</h2>
        <h3>This is {this.state.person.name} {this.state.person.lastName}</h3>
      </div>
    )
  }
}

export default App;
