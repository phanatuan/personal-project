import React from "react";
import moment from "moment";
import Markdown from "react-markdown";

class IssueIndividual extends React.Component {
  
    async componentDidMount() { 
      let resp = await fetch(this.props.issue.comments_url)
      let json = await resp.json();
      console.log(json);

    };

  render() {
    const {
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
    } = this.props.issue;
    return (
      <div>
        <h3>
          {title} #{number}
        </h3>
        <p>
          {state} {user.login} opened this issue {moment(created_at).fromNow()}{" "}
          {comments} comments{" "}
        </p>
        <div className='container'>
          <div className='row'>
            <div className='col-8'>
              <div className='card'>
                <div className='card-header'>
                  <p>
                    {user.login} commented {moment(created_at).fromNow()}
                  </p>
                </div>
                <div className='card-body'>
                  <Markdown source={body} />
                </div>
              </div>
            </div>
            <div className='col-4'>Sidebar</div>
          </div>
        </div>
      </div>
    );
  }
}

export default IssueIndividual;
