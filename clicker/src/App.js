import React, { Component } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  increment = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  decrement = () => {
    this.setState({
      value: this.state.value - 1
    });
  };

  refresh = () => {
    this.setState({
      value: 0
    });
  };

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h2>React Clicker</h2>
        </div>
        <div className="container py-3 align-items-center clicker-display">
          <div className="text-center bg-light">
            <div className="mx-auto my-auto display-1">{this.state.value}</div>
          </div>
          <div className="d-flex flex-row justify-content-center">
            <button
              className="btn btn-danger w-100"
              onClick={() => this.increment()}
            >
              <i className="fa fa-plus" />
            </button>

            <button
              className="btn btn-info w-100"
              onClick={() => this.refresh()}
            >
              <span className="fa fa-refresh" />
            </button>

            <button
              className="btn btn-primary w-100"
              onClick={() => this.decrement()}
            >
              <i className="fa fa-minus" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
