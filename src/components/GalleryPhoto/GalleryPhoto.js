import React, { Component } from 'react';
import styles from '../GalleryPhoto/GalleryPhoto.module.css';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

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
          <Typography variant="h5" style={{ minHeight: '10vw' }}>
            {' '}
            {this.props.description}
          </Typography>
        </Box>
      );
    }
    //
    return (
      <Container maxWidth="sm">
        <Paper elevation={1}>
          <Box borderRadius={10} m={1} onClick={this.showText} style={{ minHeight: '10vw' }}>
            {element}
          </Box>
        </Paper>
      </Container>
    );
  }
}

export default GalleryPhoto;
