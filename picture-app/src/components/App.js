import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {

  async onSearchSubmit(term) {
    console.log(term);
    const response =
      await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization: 'Client-ID 7OGXnn7U2rK3KeHmxXVf2yJpkoPWuMo51LdGRgNL3JQ'
        }
      });
    console.log(response.data.results);
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App;