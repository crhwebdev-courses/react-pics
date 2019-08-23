import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const showImages = images => {
  return images.map(image => <ImageCard key={image.id} image={image} />);
};

const ImageList = props => {
  return <div className="image-list">{showImages(props.images)}</div>;
};

export default ImageList;
