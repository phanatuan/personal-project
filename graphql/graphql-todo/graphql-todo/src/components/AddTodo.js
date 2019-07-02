import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_TODO_MUTATION = gql`
  mutation AddTodoMutation($text: String!) {
    createTodo(data: { text: $text }) {
      id
      text
      isDone
    }
  }
`;

export default class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      textInput: ""
    };
  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.textInput}
          onChange={e => this.setState({ textInput: e.target.value })}
        />

        <Mutation
          mutation={ADD_TODO_MUTATION}
          variables={{ text: this.state.textInput }}
          onCompleted={() => this.setState({ textInput: "" })}>
          
          {AddTodoMutation => (
            <button onClick={AddTodoMutation}>Add Todo</button>
          )}
        </Mutation>
      </div>
    );
  }
}
