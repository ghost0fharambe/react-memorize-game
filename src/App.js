import React, { Component } from 'react';
import Image from "./components/Image";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./pictures.json";
import './App.css';

var guessedArray = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images,
      guessedArray
    }
  }

  shuffleImages = () => {
    let array = [];
    let images = this.state.images;

    for (let i in images) {
      let randomIndex = Math.floor(Math.random() * images.length);
      while (array.includes(images[randomIndex])) {
        randomIndex = Math.floor(Math.random() * images.length);
      }
      array[i] = images[randomIndex];
      this.setState({ images: array });
    };
  };

  makeGuess = id => {
    this.shuffleImages();
    let guessed = this.state.guessedArray;
    console.log(this.state.guessedArray)
    for (let i = 0; i < guessed.length; i++) {
      if (guessed[i] === id) {
        console.log("lost");
      } else {
        console.log("test");
        this.shuffleImages();
      }
    }
  }

  render() {
    return (
      <Wrapper>
        <Title>Archer Memory Game!</Title>
        {this.state.images.map(image => (
          <Image src={image.src} key={image.id} id={image.id} guess={this.makeGuess} />
        ))}
      </Wrapper>
    );
  }
}

export default App;
