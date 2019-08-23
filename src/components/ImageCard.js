import React from 'react';

class ImageCard extends React.Component {
  render() {
    return (
      <div>
        <img
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
          key={this.props.image.id}
        />
      </div>
    );
  }
}

export default ImageCard;
