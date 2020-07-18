import React, { Component } from 'react';
import GalleryPhoto from '../GalleryPhoto/GalleryPhoto';
import styles from '../GalleryItem/GalleryItem.module.css';

class GalleryItem extends Component {
  render() {
    return (
      <div className={styles.galleryUnit}>
        <GalleryPhoto img={this.props.img} description={this.props.description} />
        <div className={styles.likeBox}>
          <p>{this.props.likes}</p>
          <i class="fas fa-heart" onClick={this.props.clickAddLike}></i>
          <i class="far fa-trash-alt" onClick={this.props.clickDelete}></i>
        </div>
      </div>
    );
  }
}

export default GalleryItem;
