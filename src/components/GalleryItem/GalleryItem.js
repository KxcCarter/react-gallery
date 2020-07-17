import React, { Component } from 'react';

class GalleryItem extends Component {
  state = {
    element: null,
  };

  showText = () => {
    if (this.state.element !== null) {
      this.setState({
        element: null,
      });
    } else {
      this.setState({
        element: <p>{this.props.description}</p>,
      });
    }
  };

  render() {
    return (
      <div>
        <img src={this.props.img} alt={this.props.description} onClick={this.showText} />

        {this.state.element}
      </div>
    );
  }
}

export default GalleryItem;
