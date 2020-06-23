import React from 'react';
import SearchBar from './SearchBar'
import InputValue from './Practice';

class App extends React.Component {

  onSearchSubmit(term) {
    console.log(term);
  }


  testSubmit(val) {
    console.log(val);
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <InputValue test={this.testSubmit} />
      </div>
    )
  }
}

export default App;