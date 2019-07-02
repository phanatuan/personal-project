import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const IssueItem = ({ issue }) => {
  let {
    title,
    id,
    url,
    repository_url,
    user,
    labels,
    number,
    state,
    locked,
    assignee,
    assignees,
    created_at,
    updated_at,
    body,
    comments
  } = issue;

  const renderAssignees = assignees.map(assignee => (
    <img src={assignee.avatar_url} alt={assignee.login} with={20} height={20} />
  ));

  return (
    <tr>
      <th>{state === "open" ? "Open" : "Close"}</th>
      <th>
        
          <p><Link
          to={{
            pathname:`/view/issue/${id}`, 
            state: issue,
          }}>{title}
        </Link></p>
        <p>
          #{number} open {moment(created_at).fromNow()} by {user.login}{" "}
        </p>
      </th>
      <th>{assignees && renderAssignees}</th>
      <th>{comments}</th>
    </tr>
  );
};

export default IssueItem;
