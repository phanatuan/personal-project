import React, { Component } from "react";

export default class EditRobotForm extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: ""
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state));
  };

  componentWillMount() {
      this.setState({...this.props.initialState})
  }

  handleEdit = async (e) => {
    e.preventDefault();
    let resp = await fetch(
      "http://localhost:3001/person/" + this.props.id,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      }
    );
    this.props.history.push('/');
    // return resp;
    
  };

  render() {
      console.log(this.props);
    return (
      <div>
        <h1>Edit Robot Form</h1>
        <form className='m-auto' onSubmit={this.handleEdit}>
          First Name:{" "}
          <input
            name='first_name'
            placeholder='First Name'
            value={this.state.first_name}
            onChange={this.handleInput}
          />
          Last Name:{" "}
          <input
            name='last_name'
            placeholder='Last Name'
            value={this.state.last_name}
            onChange={this.handleInput}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
