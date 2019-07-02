import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import React from 'react';

const ADD_TODO = gql `
    mutation AddTodo($type: String!) { 
        addTodo(type: $type) { 
            id
            type
        }
    }
`

const GET_TODOS = gql`
  query GetTodos {
    todos { 
        id
        type
    }
  }
`;



const AddTodo = () => { 
    let input; 
    return (
        <Mutation mutation={ADD_TODO}
                  update = {(cache, {data: { addTodo }}) => { 
                      const {todos} = cache.readQuery({ query: GET_TODOS});
                      console.log(todos)
                      cache.writeQuery({ 
                          query: GET_TODOS,
                          data: {todos: todos.concat([addTodo])},
                      })
                  }}
            >
        
        {(addTodo, { data } ) => (
            <div>
                <form onSubmit={e => {
                    e.preventDefault();
                    addTodo({variables: {type: input.value}});
                    input.value = '';
                }}>

                <input ref={node => {input = node}}/>
                <button type='submit'>Add Todo</button>

                </form>
            </div>
        )}

        </Mutation>
    )
}

export default AddTodo