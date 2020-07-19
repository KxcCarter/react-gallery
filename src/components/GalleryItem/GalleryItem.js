import React, { Component } from 'react';
import GalleryPhoto from '../GalleryPhoto/GalleryPhoto';
import styles from '../GalleryItem/GalleryItem.module.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class GalleryItem extends Component {
  render() {
    return (
      <Grid item xs={3}>
        <Box bgcolor="text.secondary" color="background.paper" m={1} pt={3}>
          <GalleryPhoto img={this.props.img} description={this.props.description} />

          <div className={styles.likeBox}>
            <p>{this.props.likes} likes</p>
            <Box>
              <Button color="secondary" onClick={this.props.clickAddLike}>
                <FavoriteIcon />
              </Button>
              <DeleteForeverIcon onClick={this.props.clickDelete} />
            </Box>
          </div>
        </Box>
      </Grid>
    );
  }
}

export default GalleryItem;
