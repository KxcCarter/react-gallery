import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    const galleryItems = this.props.fullGallery.map((item, index) => {
      return (
        <div key={item.id}>
          <GalleryItem img={item.path} description={item.description} />
          <div>
            <p>{item.likes}</p>
            <button
              onClick={(event) => {
                this.props.addLike(item.id);
              }}
            >
              like
            </button>
          </div>
        </div>
      );
    });

    return <div>{galleryItems}</div>;
  }
}

export default GalleryList;
