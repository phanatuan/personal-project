import React, { Component } from "react";
import axios from "axios";
import Organization from "./Organization";

const axiosGithubGraphQL = axios.create({
  baseURL: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`
  }
});

const resolveIssuesQuery = (queryResult, cursor) => state => {
  const { data, errors } = queryResult.data;

  if (!cursor) {
    return {
      organization: data.organization,
      errors
    };
  }

  const { edges: oldIssues } = state.organization.repository.issues;
  const { edges: newIssues } = data.organization.repository.issues;
  const updatedIssues = [...oldIssues, ...newIssues];

  return {
    organization: {
      ...data.organization,
      repository: {
        ...data.organization.repository,
        issues: {
          ...data.organization.repository.issues,
          edges: updatedIssues,
        },
      },
    },
    errors,
  };

};

const resolveAddStarMutation = mutationResult => state => { 
  console.log(mutationResult)
  const {viewerHasStarred} = mutationResult.data.data.addStar.starrable
  const { totalCount } = state.organization.repository.stargazers
  return { 
    ...state, 
    organization: { 
      ...state.organization, 
      repository: { 
        ...state.organization.repository, 
        viewerHasStarred,
        stargazers: { 
          totalCount: totalCount + 1 
        }
      },
    },
  }
}

const ADD_STAR = `
  mutation($repositoryId: ID!) { 
    addStar(input: { starrableId: $repositoryId}) { 
      starrable { 
        viewerHasStarred
      }
    }
  }
  `

const GET_ISSUES_OF_REPOSITORY = `
  query ($organization: String!, 
         $repository: String!, 
         $cursor: String) { 
    organization(login: $organization) { 
      name
      url
      repository(name: $repository) {
        id
        name
        url
        stargazers {
          totalCount
        }
        viewerHasStarred
        issues(first:5, after: $cursor, states: [OPEN]) {
          totalCount
          pageInfo {
            endCursor
            hasNextPage
          }
          edges {
            node {
              id
              title
              url
              reactions(first: 3) { 
                edges { 
                  node {
                    id 
                    content
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const getIssuesOfRepositoryQuery = (organization, repository) => `{ 
  organization(login: "${organization}") { 
    name
    url
    repository(name: "${repository}") { 
      name
      url
      issues(last:5) { 
        edges { 
          node { 
            id
            title
            url 
          }
        }
      }
    }
  }
}`;

const TITLE = "React GraphQL GitHub Client";
const addStarToRepository = repositoryId => { 
  return axiosGithubGraphQL.post('', { 
    query: ADD_STAR, 
    variables: { repositoryId},
  })
}

class App extends Component {
  state = {
    path: "the-road-to-learn-react/the-road-to-learn-react",
    organization: null,
    errors: null, 
    viewerHasStarred: null,
  };

  onStarRepository = (repositoryId, viewerHasStarred) => { 
    addStarToRepository(repositoryId).then(mutationResult => 
      this.setState(resolveAddStarMutation(mutationResult))
      )
  }

  componentDidMount() {
    this.onFetchFromGithub(this.state.path);
  }

  onFetchFromGithub = (path, cursor) => {
    const [organization, repository] = path.split("/");

    axiosGithubGraphQL
      .post("", {
        query: GET_ISSUES_OF_REPOSITORY,
        variables: { organization, repository, cursor }
      })
      .then(result => this.setState(resolveIssuesQuery(result, cursor)));
  };

  onFetchMoreIssues = () => {
    const { endCursor } = this.state.organization.repository.issues.pageInfo;
    this.onFetchFromGithub(this.state.path, endCursor);
  };

  onChange = event => {
    this.setState({
      path: event.target.value
    });
  };

  onSubmit = event => {
    this.onFetchFromGithub(this.state.path);
    event.preventDefault();
  };

  render() {
    const { path, organization, errors } = this.state;
    return (
      <div>
        <h1>{TITLE}</h1>

        <form onSubmit={this.onSubmit}>
          <label htmlFor='url'>Show open issues for https://github.com/</label>
          <input
            id='url'
            type='text'
            onChange={this.onChange}
            style={{ width: "300px" }}
            value={path}
          />
          <button type='submit'>Search</button>
        </form>

        <hr />

        {organization ? (
          <Organization
            organization={organization}
            errors={errors}
            onFetchMoreIssues={this.onFetchMoreIssues}
            onStarRepository={this.onStarRepository}
          />
        ) : (
          <p>No Info Yet</p>
        )}

        {/* Here comes the result! */}
      </div>
    );
  }
}

export default App;
