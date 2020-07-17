import React, { Component } from 'react';

class GalleryList extends Component {
  render() {
    const galleryItems = this.props.fullGallery.map((item, index) => {
      return (
        <div key={item.id}>
          <img src={item.path} alt={item.description} />
          <p>{item.description}</p>
        </div>
      );
    });

    return <div>{galleryItems}</div>;
  }
}

export default GalleryList;
