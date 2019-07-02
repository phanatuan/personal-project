import React from "react";

class AddIssueButton extends React.Component {

  handleAddIssue = () =>  {
    console.log('Addingggg');
  }

  render() {
    return <button onClick={this.handleAddIssue}>Add Issue</button>;
  }

}

export default AddIssueButton;
