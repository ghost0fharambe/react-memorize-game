import React, { Component } from 'react';
import Image from "./components/Image";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./pictures.json";
import './App.css';

class App extends Component {

  state = {
    images
  }

  

  render() {
    return (
      <Wrapper>
        <Title>Archer Memory Game!</Title>
        {this.state.images.map(image => (
          <Image src={image.src} key={image.id} id={image.id} />
        ))}
      </Wrapper>
    );
  }
}

export default App;
