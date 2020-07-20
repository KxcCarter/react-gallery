import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Paper from '@material-ui/core/Paper';

// ---
import GalleryPhoto from '../GalleryPhoto/GalleryPhoto';

class GalleryCard extends Component {
  render() {
    return (
      <Grid item xs={3}>
        <Paper elevation={3}>
          <Card variant="outlined" style={{ minHeight: '24vw' }}>
            <GalleryPhoto img={this.props.img} description={this.props.description} />

            <CardContent>
              <Typography variant="h6" color="textSecondary" component="h6">
                {this.props.likes} likes
              </Typography>
              <Typography variant="body1">{this.props.title}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to like" onClick={this.props.clickAddLike}>
                <FavoriteIcon color="secondary" />
              </IconButton>
              <IconButton aria-label="delete" onClick={this.props.clickDelete}>
                <DeleteForeverIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Paper>
      </Grid>
    );
  }
}

export default GalleryCard;
