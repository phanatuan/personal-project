import React from "react";
import TodoItem from "./TodoItem";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const TODO_LIST_QUERY = gql`
  {
    todos {
      id
      text
      isDone
    }
  }
`;

const TodoList = () => {
  return (
    <div>
      <Query query={TODO_LIST_QUERY}>
        {({ loading, error, data }) => {
            
          if (loading) return <p>Loadding .... </p>;
          if (error) return <p>Error: ${error.message}</p>;

          return (
            <>
              <h1>List of Todo here</h1>
              {data.todos &&
                data.todos.map((todo, index) => (
                  <TodoItem todo={todo} key={todo.id} index={index} />
                ))}
            </>
          );
        }}
      </Query>
    </div>
  );
};

export default TodoList;
