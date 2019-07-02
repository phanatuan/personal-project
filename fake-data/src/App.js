import React, { Component } from "react";
import PersonList from "./PersonList";
import AddRobot from "./AddRobot";
import Routes from "./Routes";
import ReactModal from "react-modal";

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>App</h1>
        <Routes />
      </div>
    );
  }
}

export default App;
