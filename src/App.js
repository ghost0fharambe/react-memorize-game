import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import WinFlash from "./components/WinFlash";
import LossFlash from "./components/LossFlash";
import images from "./pictures.json";
import './App.css';

let score;
let wins;
let losses;
let gameFlash;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images,
      guessedArray: [],
      score: 0,
      losses: 0,
      wins: 0,
      gameLoss: false,
      gameWin: false
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
      this.setState({
        gameLoss: true,
        gameWin: false
      });
      this.incrementLosses();
      //this.newRound();
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
      losses: 0,
      wins: 0,
      gameLoss: false,
      gameWin: false
    });
  };

  //Function to reset Score and increment losses
  newRound = () => {
    this.setState({
      images: images,
      guessedArray: [],
      score: 0,
      gameLoss: false,
      gameWin: false
    });
  }

  //Function to increment Score
  incrementScore = () => {
    this.checkWin();
    score = this.state.score;
    score++;
    this.setState({ score: score });
  };

  //Function to increment Losses
  incrementLosses = () => {
    losses = this.state.losses;
    losses++;
    this.setState({ losses: losses });
  };

  //Function to increment Wins
  incrementWins = () => {
    wins = this.state.wins;
    wins++;
    this.setState({ wins: wins })
  }

  //Function to check if game win
  checkWin = () => {
    if (this.state.score === 8) {
      this.incrementWins();
      this.setState({
        score: 0,
        gameWin: true,
        gameLoss: false
      })
    }
  }

  renderFlash = () => {
    const gameLoss = this.state.gameLoss;
    const gameWin = this.state.gameWin;
    if (gameLoss === true) {
      gameFlash = <LossFlash />
    } else if (gameWin === true) {
      gameFlash = <WinFlash />
    }
  }

  render() {
    // this.renderFlash();
    const gameLoss = this.state.gameLoss;
    const gameWin = this.state.gameWin;
    if (gameLoss === true) {
      gameFlash = <LossFlash />
    } else if (gameWin === true) {
      gameFlash = <WinFlash />
    }
    
    return (
      <>
        <Navbar
          score={this.state.score}
          wins={this.state.wins}
          losses={this.state.losses}
          resetGame={this.resetGame}
        />
        <Wrapper>
          <Title>
            Archer Memory Game!
            {gameFlash}
          </Title>
          {this.state.images.map(image => (
            <Image src={image.src} key={image.id} id={image.id} guess={this.makeGuess} />
          ))}
        </Wrapper>
      </>
    );
  };
};

export default App;
