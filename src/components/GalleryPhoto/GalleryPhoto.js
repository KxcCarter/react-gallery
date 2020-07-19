import React, { Component } from 'react';
import styles from '../GalleryPhoto/GalleryPhoto.module.css';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

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
      element = (
        <Box pt={3} mx="auto">
          <Typography variant="h5"> {this.props.description}</Typography>
        </Box>
      );
    }
    //
    return (
      <Container maxWidth="sm">
        <Box
          bgcolor="text.secondary"
          borderRadius={10}
          m={1}
          onClick={this.showText}
          style={{ minHeight: '10vw' }}
        >
          {element}
        </Box>
      </Container>
    );
  }
}

export default GalleryPhoto;
