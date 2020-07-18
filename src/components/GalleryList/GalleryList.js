import React, { Component } from 'react';
import styles from '../GalleryList/GalleryList.module.css';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    const galleryItems = this.props.fullGallery.map((item, index) => {
      return (
        <GalleryItem
          key={item.id}
          img={item.path}
          description={item.description}
          likes={item.likes}
          clickAddLike={(event) => {
            this.props.addLike(item.id);
          }}
        />
      );
    });

    return <div className={styles.flexContainer}>{galleryItems}</div>;
  }
}

export default GalleryList;
