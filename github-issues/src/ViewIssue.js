import React from "react";
import IssueIndividual from "./IssueIndividual";

const ViewIssue = props => {
  console.log(props);
  return (
    <div>
      <h1>View Issue</h1>
      <button onClick={() => props.history.goBack()}>Go Back</button>
      <IssueIndividual issue={props.location.state} />
    </div>
  );
};

export default ViewIssue;
