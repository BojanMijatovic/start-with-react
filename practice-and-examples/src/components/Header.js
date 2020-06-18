import React from 'react';

class Header extends React.Component {
  state = {
    name: 'New Header',
  }


  render() {
    return (
      <div>{this.state.name}</div>
    )
  }
}

export default Header;