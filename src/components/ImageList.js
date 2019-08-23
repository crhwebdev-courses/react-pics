import React from 'react';

const showImages = images => {
  return images.map(image => (
    <img alt={image.description} key={image.id} src={image.urls.regular} />
  ));
};

const ImageList = props => {
  console.log(props.images);
  return <div>{showImages(props.images)}</div>;
};

export default ImageList;
