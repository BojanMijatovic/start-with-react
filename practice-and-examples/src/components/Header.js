import React from 'react';
import ReactDOM from 'react-dom';
import SearchInput from './SearchInput';
import main from './style/main.css'
class Header extends React.Component {
  state = {
    name: 'New Header',
    test: 'new Test'
  }

  textValue(inputValue) {
    console.log(inputValue);
  }



  render() {
    return (
      <div>
        <h1 className='header'>{this.state.name}</h1>
        <SearchInput test={this.textValue} />

      </div>
    )
  }
}

export default Header;