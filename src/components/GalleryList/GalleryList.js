import React, { Component } from 'react';
import GalleryItem from '../GalleryPhoto/GalleryPhoto';
import styles from '../GalleryList/GalleryList.module.css';

class GalleryList extends Component {
  render() {
    const galleryItems = this.props.fullGallery.map((item, index) => {
      return (
        <div className={styles.galleryUnit} key={item.id}>
          <GalleryItem img={item.path} description={item.description} />
          <div className={styles.likeBox}>
            <p>{item.likes}</p>
            <i
              class="fas fa-heart"
              onClick={(event) => {
                this.props.addLike(item.id);
              }}
            ></i>
          </div>
        </div>
      );
    });

    return <div className={styles.flexContainer}>{galleryItems}</div>;
  }
}

export default GalleryList;
