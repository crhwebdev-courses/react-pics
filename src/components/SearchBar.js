import React from 'react';

class SearchBar extends React.Component {
  state = { input: '' };

  onInputChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={this.onInputChange.bind(this)}
              value={this.state.input}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
