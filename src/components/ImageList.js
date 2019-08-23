import './ImageList.css';
import React from 'react';

const showImages = images => {
  return images.map(({ description, id, urls }) => (
    <img alt={description} key={id} src={urls.regular} />
  ));
};

const ImageList = props => {
  console.log(props.images);
  return <div className="image-list">{showImages(props.images)}</div>;
};

export default ImageList;
