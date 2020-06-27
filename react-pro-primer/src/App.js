import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    numFromState: 7,
  }

  calcNum() {
    return this.state.numFromState - 5 === 2 ? 'True' : 'False'
  }

  render() {

    const newText = 'Text from const';
    const num = 4;

    return (
      <div>
        <h4 className='bg-primary text-white text-center p-2 m-0'>Hello from React and bootstrap</h4>
        <h4 className='bg-primary text-white text-center p-2  mt-3'>{newText}</h4>
        <p>Result for num {num} is : {num % 2 === 0 ? 'Even' : 'Odd'}</p>
        <h4>This is from method result {this.calcNum()}</h4>
      </div>
    )
  }
}

export default App;
