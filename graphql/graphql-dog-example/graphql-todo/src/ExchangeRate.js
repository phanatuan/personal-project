import React from "react";
import "./index.css";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const ExchangeRate = () => (
  <Query
    query={gql `
         {
            rates(currency:"USD") { 
                currency
                rate
            }
        }`}>
        
    {({ loading, error, data }) => {
      if (loading) return <p>Loading ...</p>;
      if (error) return <p>Error: ..</p>;

      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
      ));
    }}
  </Query>
);

export { ExchangeRate }