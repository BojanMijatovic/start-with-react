import React from 'react';
class SearchInput extends React.Component {
  state = {
    inputValue: ''
  }

  onFormS = (e) => {
    e.preventDefault();
    this.props.test(this.state.inputValue)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormS}>
          <label>Test input :</label>
          <input type='text' onChange={(e) => this.setState({ inputValue: e.target.value })} value={this.state.inputValue} />
        </form>
      </div>
    )
  }
}

export default SearchInput;
