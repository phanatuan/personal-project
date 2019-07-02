import React from "react";
import gql from 'graphql-tag'
import { Query } from "react-apollo";


const BRAND_QUERY = gql`
  {
    brands {
      id
      name
      description
    }
  }
`;

const BrandList = () => {
  return (
    <>
    <Query query={BRAND_QUERY}> 
    {({loading, error, data}) =>  {
        if (loading) return <div>Fetchingg.... </div>

        // console.log(data.brands)
        return (
        <div>
            {data && data.brands && data.brands.map(brand => <h1 key={brand.name}>{brand.name}</h1>)}
        </div>
    )}}
    </Query>
  <div>List of Brand Hereeee</div>
  </>);
};

export default BrandList;
