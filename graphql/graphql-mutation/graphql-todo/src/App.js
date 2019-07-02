import './App.css';
import React, { Component } from 'react'
import AddTodo from './AddTodo';
import Todos from './Todos';

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
        <AddTodo/>
        <Todos/>
      </div>
    );
  }
}

export default App;
