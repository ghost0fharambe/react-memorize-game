import React, { Component } from 'react';
import Image from "./components/Image";
import Wrapper from "./components/Wrapper";
import images from "./pictures.json";
import './App.css';

class App extends Component {

  state = {
    images
  }

  render() {
    return (
      <Wrapper>
        {this.state.images.map(image => (
          <Image src={image.src} key={image.id} id={image.id} />
        ))}
      </Wrapper>
    );
  }
}

export default App;
