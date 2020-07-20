import React, { Component } from 'react';
import GalleryCard from '../GalleryCard/GalleryCard';
import Grid from '@material-ui/core/Grid';

class GalleryList extends Component {
  render() {
    const galleryItems = this.props.fullGallery.map((item, index) => {
      return (
        <GalleryCard
          key={item.id}
          img={item.path}
          title={item.title}
          description={item.description}
          likes={item.likes}
          clickAddLike={(event) => {
            this.props.addLike(item.id);
          }}
          clickDelete={(event) => {
            this.props.deletePhoto(item.id);
          }}
        />
      );
    });

    return (
      <Grid container spacing={3}>
        {galleryItems}
      </Grid>
    );
  }
}

export default GalleryList;
