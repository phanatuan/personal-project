import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const TOGGLE_DONE_MUTATION = gql `
    mutation ToggleDoneMutation($isDone: Boolean!, $id: ID!) { 
        updateTodo(id: $id, data: {isDone: $isDone}) { 
            id
            text
            isDone
        }
    }
`;

const TodoItem = ({ todo, index }) => {
  return (
    <div>
      <p>{index+1}</p>
      <p>{todo.text}</p>
      <Mutation
        mutation={TOGGLE_DONE_MUTATION}
        variables={{ id: todo.id, isDone: !todo.isDone }}>
        
        {ToogleDoneMutation => (
          <p onClick={ToogleDoneMutation}>
            {todo.isDone ? "Mark Done" : "Mark Undone"}
          </p>
        )}
      </Mutation>
    </div>
  );
};

export default TodoItem;
