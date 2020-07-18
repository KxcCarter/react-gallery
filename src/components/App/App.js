import React, { Component } from 'react';

// --- Components ---
import GalleryList from '../GalleryList/GalleryList';
import AddToGallery from '../AddToGallery/AddToGallery';

import './App.css';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    console.log(`READY`);
    this.getGallery();
  }

  state = {
    gallery: [],
  };

  getGallery() {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        this.setState({
          gallery: response.data,
        });
      })
      .catch((err) => {
        console.log(`GET Error! ${err}`);
      });
  }

  addLike = (id) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`,
      // data:
    })
      .then((response) => {
        this.getGallery();
      })
      .catch((err) => {
        console.log(`PUT Error! ${err}`);
      });
  };

  addPhoto = (newImg) => {
    axios({
      method: 'POST',
      url: `/gallery`,
      data: newImg,
    })
      .then((response) => {
        this.getGallery();
      })
      .catch((err) => {
        console.log(`PUT Error! ${err}`);
      });
  };

  deletePhoto = (id) => {
    axios({
      method: 'DELETE',
      url: `/gallery/${id}`,
    })
      .then((response) => {
        this.getGallery();
      })
      .catch((err) => {
        console.log('DELETE error!', err);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>New picture form goes here</p>
        <AddToGallery addPhoto={this.addPhoto} />

        <GalleryList fullGallery={this.state.gallery} addLike={this.addLike} />
      </div>
    );
  }
}

export default App;
