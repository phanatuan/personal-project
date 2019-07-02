import React from "react";
import EditRobotForm from "../EditRobotForm";

class EditRobotView extends React.Component {

  render() {
    return (
      <div>
        <EditRobotForm initialState={this.props.location.state} id={this.props.match.params.id} history={this.props.history}/>
      </div>
    );
  }
}

export default EditRobotView;
