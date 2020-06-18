import React from 'react';
import SearchInput from './SearchInput';


class Header extends React.Component {
  state = {
    name: 'New Header',
  }


  render() {
    return (
      <div>{this.state.name}
        <SearchInput />
      </div>
    )
  }
}

export default Header;