import gql from "graphql-tag";
import { Query } from "react-apollo";
import React from 'react';

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

const Dogs = ({ onDogSelected }) => (
  <Query query={GET_DOGS}>
  
    {({ loading, error, data }) => {
      if (loading) return <p>Loading ...</p>;
      if (error) return <p>Error! ${error.message}</p>;

      return (
        <select name='dog' onChange={onDogSelected}>
          {data.dogs.map(dog => (
            <option key={dog.id} value={dog.breed}>
              {dog.breed}
            </option>
          ))}
        </select>
      );
    }}
  </Query>
);


export default Dogs;