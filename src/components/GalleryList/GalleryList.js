import React, { Component } from 'react';

class GalleryList extends Component {
  render() {
    const galleryItems = this.props.fullGallery.map((item, index) => {
      return (
        <div key={item.id}>
          <img src={item.path} alt={item.description} />
          <p>{item.description}</p>
          <p>{item.likes}</p>
          <button
            onClick={(event) => {
              this.props.addLike(item.id);
            }}
          >
            like
          </button>
        </div>
      );
    });

    return <div>{galleryItems}</div>;
  }
}

export default GalleryList;
