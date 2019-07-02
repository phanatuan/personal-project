import React from 'react';
import { Link } from 'react-router-dom';

const ViewRobotView = ({match, location}) => {
  console.log(location);
  return (
    <div>
      <Link to='/'>Back</Link>
      <img src={location.state.avatar} alt={location.state.first_name} />
      <p>First Name: {location.state.first_name} </p>
      <p>Last Name: {location.state.last_name}</p>
    </div>
  )
}

export default ViewRobotView;
