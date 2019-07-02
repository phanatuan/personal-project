import React from "react";
import { Link } from "react-router-dom";

class Person extends React.Component {
  handleDelete = async id => {
    let response = await fetch(`http://localhost:3001/person/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response;
  };

  render() {
    let { person } = this.props;
    return (
      <div className='col-4'>
        <div className='card'>
          <img
            src={person.avatar}
            alt={person.first_name}
            height={300}
            width={200}
          />
          <div className='card-body'>
            <h5 className='card-title'>
              {person.first_name + " " + person.last_name}
            </h5>
            <Link
              to={{
                pathname: `/view/${person.id}`,
                state: person
              }}>
              View       
            </Link>

            <Link
              to={{
                pathname: `/edit/${person.id}`,
                state: person
              }}>
              Edit    
            </Link>

            <a href='' onClick={() => this.handleDelete(person.id)}>
              Delete
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Person;
