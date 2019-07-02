import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import RepositoryList, { REPOSITORY_FRAGMENT } from '../Repository';
import ErrorMessage from '../Error';
import Loading from '../Loading';

const GET_REPOSITORIES_OF_ORGANIZATION = gql`
  query($organizationName: String!, $cursor: String) {
    organization(login: $organizationName) {
        repositories(first: 5, after: $cursor) {
        pageInfo { 
            endCursor
            hasNextPage
        }
        edges {
          node {
            ...repository
          }
        }
      }
    }
  }
  ${REPOSITORY_FRAGMENT}
`;

const Organization = ({ organizationName }) => (
  <Query
    query={GET_REPOSITORIES_OF_ORGANIZATION}
    variables={{
      organizationName,
    }}
    skip={organizationName === ''}
    notifyOnNetworkStatusChange={true}
  >
    {({ data, loading, error, fetchMore }) => {
      if (error) { 
          return <ErrorMessage error={error} />
      }

      const { organization } = data

      if (loading && !organization) { 
          return <Loading />;
      }

      return (
          <RepositoryList 
            loading={loading}
            repositories={organization.repositories}
            fetchMore={fetchMore}
            entry={'organization'}
          />
      )
    }}
  </Query>
);

export default Organization;