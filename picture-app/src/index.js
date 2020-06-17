import React from 'react';
import ReactDOM from 'react-dom';
import NewPage from './NewPage';

class App extends React.Component {
  state = { name: 'React app' }

  render() {
    return (
      <div> <h1>{this.state.name}</h1>
        <NewPage namePage='Add com' />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));