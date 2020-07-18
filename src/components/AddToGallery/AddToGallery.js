import React, { Component } from 'react';
import styles from '../AddToGallery/AddToGallery.module.css';

class AddToGallery extends Component {
  render() {
    return (
      <div className={styles.inputComponent}>
        <h3>Add a photo to the gallery</h3>
        <form>
          <div className={styles.inputArea}>
            <label htmlFor="imgSource">Image Source: </label>
            <input type="text" id="imgSource"></input>
          </div>
          <div className={styles.inputArea}>
            <label htmlFor="imgSource">Image Description: </label>
            <input type="text" id="imgDescription"></input>
          </div>
          <button>Add to Gallery</button>
        </form>
      </div>
    );
  }
}
export default AddToGallery;
