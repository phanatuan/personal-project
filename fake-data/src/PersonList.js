import React from "react";
import Person from "./Person";

const PersonList = props => {
  return (
    <div className='row'>
      {props.persons &&
        props.persons.map(person => (
          <Person
            key={person.id}
            person={person}
          />
        ))}
    </div>
  );
};

export default PersonList;
