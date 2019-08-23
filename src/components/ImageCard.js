import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    //create a Ref to this component so we can access it as a DOM element as in regular
    // JavaScript
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    //NOTE: must get image height after image load event to ensure we are
    // getting the height after image actually loads
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    //get number of spans by dividing image height by fixed span height
    // and then rounding up
    const rowHeight = 10;
    const imageHeight = this.imageRef.current.clientHeight;
    const spans = Math.ceil(imageHeight / rowHeight);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
