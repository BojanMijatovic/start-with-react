import React from 'react';
import SearchInput from './SearchInput';


class Header extends React.Component {
  state = {
    name: 'New Header',
  }

  textValue(inputValue) {
    console.log(inputValue);
  }


  render() {
    return (
      <div>{this.state.name}
        <SearchInput test={this.textValue} />
      </div>
    )
  }
}

export default Header;