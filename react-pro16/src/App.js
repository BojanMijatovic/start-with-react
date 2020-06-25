import React from 'react';
import './App.css';


class App extends React.Component {

  state = {
    userName: 'Omega'
  }

  render() {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName} To do list
        </h4>
      </div>
    )
  }
}

export default App;
