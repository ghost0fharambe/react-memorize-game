import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./pictures.json";
import './App.css';

let score;
let losses;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images,
      guessedArray: [],
      score: 0,
      losses: 0,
      highscore: 0,
      gameOver: false
    };
  };

  //Function to shuffle images
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

  //Function to handle guessing logic
  makeGuess = id => {
    let array = [];
    let guessed = this.state.guessedArray;
    if (guessed.includes(id)) {
      this.setState({ gameOver: true });
      this.incrementLosses();
      this.resetGame();
    } else {
      array.push(id);
      this.incrementScore();
      this.setState({ guessedArray: array })
      this.shuffleImages();
    };
  };

  //Function to reset state/game
  resetGame = () => {
    this.setState({
      images: images,
      guessedArray: [],
      score: 0,
      gameOver: false
    });
  };

  //Function to increment Score
  incrementScore = () => {
    this.setHighscore();
    score = this.state.score;
    score++;
    this.setState({ score: score })
  };

  //Function to increment Losses
  incrementLosses = () => {
    losses = this.state.losses;
    losses++;
    this.setState({ losses: losses })
  };

  //Function to set highscore
  setHighscore = () => {
    score = this.state.score;
    let highscore = this.state.highscore;
    if (score > highscore) {
      this.setState({ highscore: score });
    };
  };

  render() {
    return (
      <>
        <Navbar
          score={this.state.score}
          losses={this.state.losses}
          highscore={this.state.highscore}
          resetGame={this.resetGame}
        />
        <Wrapper>
          <Title>Archer Memory Game!</Title>
          {this.state.images.map(image => (
            <Image src={image.src} key={image.id} id={image.id} guess={this.makeGuess} />
          ))}
        </Wrapper>
      </>
    );
  };
};

export default App;
