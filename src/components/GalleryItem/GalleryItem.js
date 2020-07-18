import React, { Component } from 'react';
import GalleryPhoto from '../GalleryPhoto/GalleryPhoto';

class GalleryItem extends Component {
  render() {
    const galleryItems = this.props.fullGallery.map((item, index) => {
        return (
          <div className={styles.galleryUnit} >
            <GalleryPhoto img={item.path} description={item.description} />
            <div className={styles.likeBox}>
              <p>{item.likes}</p>
              <i
                class="fas fa-heart"
                
              ></i>
            </div>
          </div>
        );
}

export default GalleryItem;
