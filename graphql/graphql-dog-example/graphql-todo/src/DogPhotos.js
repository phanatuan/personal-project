import React from 'react'; 
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_DOG_PHOTO = gql`
    query Dog($breed: String!) { 
        dog(breed: $breed) { 
            id
            displayImage
        }
    }
`

const DogPhoto = ({ breed }) => (
    <Query query={GET_DOG_PHOTO}
           variables= {{breed}}
           notifyOnNetworkStatusChange
        //    skip = {!breed}
        //    pollInterval = {500}
    >
    { (QueryResult) => {
        console.log(QueryResult)
        const {loading, error, data, refetch, networkStatus } = QueryResult
        if (networkStatus === 4) return <p>Refetching!</p>
        if (loading) return <p>Loading ....</p>
        if (error) return  <p>Error: ${error.message}</p>


        return (
            <>
            <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} alt={data.dog.id} />
            <button onClick={() => refetch()}>Refetch!</button>
            </>

        )
    }}
    </Query>
)

export default DogPhoto;