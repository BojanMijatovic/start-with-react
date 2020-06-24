import React from 'react';
class SearchBar extends React.Component {
  state = {
    term: '',
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);                   // this.props are obj  --- onSearchSubmit from parent component
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Image search</label>
            <input type='text' placeholder='please insert text' onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
