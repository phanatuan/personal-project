import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessNumber: 0, 
      randomNumber: Math.floor(Math.random() * 10) + 1, //Generate No from 1 - 10
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    this.setState({ 
      guessNumber: e.target.value, 
    })
  };

  render() {
    const results = compareGuessVsRandom(this.state.guessNumber, this.state.randomNumber);
    return (
      <div className="container">
        <div className="d-flex flex-row justify-content-center">
          <button className="w-100">Easy</button>
          <button className="w-100">Medium</button>
          <button className="w-100">Hard</button>
        </div>

        
        <div className="d-flex">
          <form onSubmit = {(e) => this.handleSubmit(e)}>
          <input className="w-100" placeholder="0" value={this.state.inputValue} onChange={(e) => this.handleChange(e)} />
          <button
            className="btn btn-primary w-100"
            onClick={(e) => this.handleClick(e)}
          >
            Guess
          </button>
          </form>
        </div>
        <div id="results">{results}</div>
      </div>
    );
  }
}

export default App;

function compareGuessVsRandom(guess, randomNumber) {
  switch (true) { 
    case guess === randomNumber:
      return 'Correct';
    case guess > randomNumber: 
      return 'Please guess lower number';
    case guess < randomNumber: 
      return 'Please guess higher number'; 
    default: 
      return '';
  }
}
