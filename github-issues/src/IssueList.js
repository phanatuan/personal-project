import React from 'react'
import IssueItem from './IssueItem';

const IssueList = ({issues}) => {
    console.log(issues.length);
    const renderIssues = issues.map(issue => 
        <IssueItem issue={issue} key={issue.id}/> 
    )
    return (
    <div>
      <h1>Issue List</h1>
      <table className='table table-hover'>
      <thead><tr>Count Open + Sorting</tr></thead>
        <tbody>
            {renderIssues}
        </tbody>
      </table>
    </div>
  )
}

export default IssueList
