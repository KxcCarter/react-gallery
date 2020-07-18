import React, { Component } from 'react';
import styles from '../GalleryPhoto/GalleryPhoto.module.css';

class GalleryPhoto extends Component {
  state = {
    clicked: false,
  };

  showText = () => {
    if (!this.state.clicked) {
      this.setState(
        {
          clicked: true,
        },
        () => {
          console.log(this.state.clicked);
        }
      );
    } else {
      this.setState(
        {
          clicked: false,
        },
        () => {
          console.log(this.state.clicked);
        }
      );
    }
  };

  render() {
    let element = <img src={this.props.img} alt={this.props.description} />;
    if (this.state.clicked === true) {
      element = <p className={styles.description}>{this.props.description}</p>;
    }
    //
    return (
      <div className={styles.photoBox} onClick={this.showText}>
        {element}
      </div>
    );
  }
}

export default GalleryPhoto;
