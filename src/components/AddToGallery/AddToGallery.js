import React, { Component } from 'react';
import styles from '../AddToGallery/AddToGallery.module.css';
import TextField from '@material-ui/core/TextField';

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
            <TextField
              id="filled-helperText"
              label="Image URL"
              defaultValue={this.state.path}
              helperText="images/memeCat_5.jpg"
              variant="filled"
              onChange={(event) => this.handleInputChange(event, 'path')}
            />
            <TextField
              id="filled-helperText"
              label="Description"
              defaultValue={this.state.description}
              helperText="cat meme text goes here"
              variant="filled"
              onChange={(event) => this.handleInputChange(event, 'description')}
            />
          </div>
          <button>Add to Gallery</button>
        </form>
      </div>
    );
  }
}
export default AddToGallery;
