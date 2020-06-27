import React from 'react';
import './App.css';
class App extends React.Component {

  state = {
    numFromState: 7,
  }

  calcNum() {
    return this.state.numFromState - 5 === 2 ? 'True' : 'False'
  }

  isEvenNum() {
    return this.state.numFromState % 2 === 0 ? <label className='bg-primary text-white'>Even</label> :
      <label className='bg-danger text-white'>Odd</label>
  }

  handleClick = () => {
    this.setState({ numFromState: this.state.numFromState + 1 })
  }

  removeNum = () => {
    this.setState({ numFromState: this.state.numFromState - 1 })
  }


  render() {
    const newText = 'Text from const';
    const num = 4;

    return (
      <div>
        <h4 className='bg-primary text-white text-center p-2 m-0'>Hello from React and bootstrap</h4>
        <h4 className='bg-primary text-white text-center p-2  mt-3'>{newText}</h4>
        <p>Result for num {num} is : {num % 2 === 0 ? 'Even' : 'Odd'}</p>
        <h4> {this.state.numFromState} is: {this.isEvenNum()}</h4>
        <button className='btn btn-default' onClick={this.handleClick}>add</button>
        <button className='btn btn-default' onClick={this.removeNum}>remove</button>

        <div className='container-fluid'>
          <h2 className='text-center'>Work with Bootstrap</h2>
          <div className='row text-center'>
            <div className='col-6'>First half</div>
            <div className='col-6'>Second half</div>
          </div>
          <div className='row text-center'>
            <div className='col-3 bg-info text-white'>text lorem14</div>
            <div className='col-6  bg-warning'> text lorem14</div>
            <div className='col-3 bg-secondary text-white'> text lorem14</div>
          </div>
        </div>
        <div className='container-fluid'>
          <h3 className='bg-primary text-white text-center mt-4 p-0'>Form Control</h3>
          <div className='form-group'>
            <label>Name :</label>
            <input className='form-control' type='text'></input>
          </div>
          <div className='form-group'>
            <label>City:</label>
            <input className='form-control' type='text'></input>
          </div>
          <div className='form-group'><button className='btn bg-primary text-white'>submit</button> </div>
        </div>
      </div>
    )
  }
}

export default App;
