import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import config from './.config.js';

const rootAddress = 'https://api.unsplash.com/';

class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    const response = await axios.get(`${rootAddress}/search/photos`, {
      params: {
        query: term
      },
      headers: {
        Authorization: `Client-ID ${config.unsplash_api_key}`
      }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
