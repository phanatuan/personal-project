import React, { Component } from "react";

export default class AddRobot extends Component {
  render() {
    return (
      <div className='container'>
        <form className='m-auto'>
          First Name:{" "}
          <input
            name='first_name'
            placeholder='First Name'
            value={this.props.first_name}
            onChange={this.props.handleInput}
          />
          Last Name:{" "}
          <input
            name='last_name'
            placeholder='Last Name'
            value={this.props.last_name}
            onChange={this.props.handleInput}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
