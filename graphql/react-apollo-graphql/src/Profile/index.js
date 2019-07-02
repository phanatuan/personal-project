import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loading from "../Loading";
import RepositoryList, { REPOSITORY_FRAGMENT } from "../Repository";
import ErrorMessage from "../Error";

const GET_REPOSITORIES_OF_CURRENT_USER = gql`
  query($cursor: String) {
    viewer {
      repositories(
        first: 5
        orderBy: { direction: DESC, field: STARGAZERS }
        after: $cursor
      ) {
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

const Profile = () => (
  <Query
    query={GET_REPOSITORIES_OF_CURRENT_USER}
    notifyOnNetworkStatusChange={true}>
    {({ data, loading, error, fetchMore }) => {
      console.log(data);

      if (error) {
        return <ErrorMessage error={error} />;
      }
      const { viewer } = data;

      if (loading && !viewer) {
        return <Loading />;
      }

      return (
        <RepositoryList
          repositories={viewer.repositories}
          fetchMore={fetchMore}
          loading={loading}
          entry={"viewer"}
        />
      );
    }}
  </Query>
);

export default Profile;
