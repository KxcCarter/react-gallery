import React, { Component } from 'react';

// --- Components ---
import GalleryList from '../GalleryList/GalleryList';

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
    console.log(`like me please`);
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>

        <GalleryList fullGallery={this.state.gallery} addLike={this.addLike} />
      </div>
    );
  }
}

export default App;
