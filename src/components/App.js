import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import config from './.config.js';

const rootAddress = 'https://api.unsplash.com/';

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get(`${rootAddress}/search/photos`, {
      params: {
        query: term
      },
      headers: {
        Authorization: `Client-ID ${config.unsplash_api_key}`
      }
    });

    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
