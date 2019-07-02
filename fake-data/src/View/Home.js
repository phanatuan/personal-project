import React from "react";
import AddRobot from "../AddRobot";
import PersonList from "../PersonList";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      id: null,
      
    };
  }

  componentDidMount = async () => {
    console.log('Does DID MOUNT run');
    let response = await fetch("http://localhost:3001/" + "person");
    let json = await response.json();
    this.setState({ persons: json });
  };

  render() {
    return (
      <div>
        {this.state.persons && (
          <PersonList
            persons={this.state.persons}
          />
        )}p
      </div>
    );
  }
}

export default Home;
