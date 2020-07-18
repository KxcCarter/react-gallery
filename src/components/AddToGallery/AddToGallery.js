import React, { Component } from 'react';
import styles from '../AddToGallery/AddToGallery.module.css';

class AddToGallery extends Component {
  state = {
    path: '',
    description: '',
  };

  handleInputChange = (event, fieldKey) => {
    this.setState({
      [fieldKey]: event.target.value,
    });
  };

  render() {
    return (
      <div className={styles.inputComponent}>
        <h3>Add a photo to the gallery</h3>
        <form onSubmit={(event) => this.props.addPhoto(this.state)}>
          <div className={styles.inputArea}>
            <label htmlFor="imgSource">Image Source: </label>
            <input
              type="text"
              id="imgSource"
              placeholder="images/memeCat_5.jpg"
              value={this.state.path}
              onChange={(event) => this.handleInputChange(event, 'path')}
            ></input>
          </div>
          <div className={styles.inputArea}>
            <label htmlFor="imgSource">Image Description: </label>
            <input
              type="text"
              id="imgDescription"
              placeholder="Behold... memeCat_5"
              value={this.state.description}
              onChange={(event) => this.handleInputChange(event, 'description')}
            ></input>
          </div>
          <button>Add to Gallery</button>
        </form>
      </div>
    );
  }
}
export default AddToGallery;
