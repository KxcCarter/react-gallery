import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Container, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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
      <Container maxWidth="md">
        <Box p={3}>
          <Typography variant="h4">Add a photo to the gallery</Typography>
          <form onSubmit={(event) => this.props.addPhoto(this.state)}>
            <Box p={2}>
              <TextField
                id="filled-helperText"
                label="Image URL"
                defaultValue={this.state.path}
                helperText="images/memeCat_5.jpg"
                variant="filled"
                required
                onChange={(event) => this.handleInputChange(event, 'path')}
              />
              <TextField
                id="filled-helperText"
                label="Description"
                defaultValue={this.state.description}
                helperText="cat meme text goes here"
                variant="filled"
                required
                onChange={(event) => this.handleInputChange(event, 'description')}
              />
            </Box>
            <Button type="submit" variant="contained">
              Add to Gallery
            </Button>
          </form>
        </Box>
      </Container>
    );
  }
}
export default AddToGallery;
