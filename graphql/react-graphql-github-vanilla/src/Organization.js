import React from "react";
import Repository from './Repository';

const Organization = ({ organization, errors, onFetchMoreIssues, onStarRepository }) => {
  if (errors) {
    return (
      <p>
        Something went wrong:
        {errors.map(error => error.message).join(" ")}
      </p>
    );
  }

  return (
    <div>
      <p>
        <strong>Issues from Organization: </strong>
        <a href={organization.url}>{organization.name}</a>
      </p>
      <Repository repository={organization.repository}
                  onFetchMoreIssues={onFetchMoreIssues}
                  onStarRepository={onStarRepository}
                  />
    </div>
  );
};

export default Organization;
