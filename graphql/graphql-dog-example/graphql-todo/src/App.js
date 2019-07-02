import './App.css';
import Dogs from './Dogs';
import DogPhoto from './DogPhotos';
import React, { Component } from 'react'

class App extends Component {
  constructor() { 
    super()
    this.state = { 
      selectedDog: null,
    }
  }

  onDogSelected = ({ target }) => {
    this.setState(() => ({ selectedDog: target.value }));
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Dogs onDogSelected={this.onDogSelected}/>
        <DogPhoto breed={this.state.selectedDog}/>
      </div>
    );
  }
}

export default App;
