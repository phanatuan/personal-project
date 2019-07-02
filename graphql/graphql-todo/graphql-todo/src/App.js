import './App.css';
import React, { Component } from 'react'
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends Component {
  constructor() { 
    super()
    this.state = { 
      selectedDog: null,
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <AddTodo/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
