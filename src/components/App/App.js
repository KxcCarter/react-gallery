import React, { Component } from 'react';

// --- Components ---
import GalleryList from '../GalleryList/GalleryList';

import './App.css';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    console.log(`READY`);
    this.getData();
  }

  getData() {
    console.log(`in getData`);
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(`GET Error! ${err}`);
      });
  }

  addLike() {
    axios({
      method: 'PUT',
      url: `/gallery/like/`,
      // data:
    })
      .then((response) => {
        this.getData();
      })
      .catch((err) => {
        console.log(`PUT Error! ${err}`);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg" alt="it's a goat" />
        <GalleryList />
      </div>
    );
  }
}

export default App;
