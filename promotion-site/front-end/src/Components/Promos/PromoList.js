import React from "react";
import PromoCard from "./PromoCard";
import PromoTypeFilter from "./PromoTypeFilter";
import PromoSearch from "./PromoSearch";
import Container from "../Container";
import SocialShare from "./SocialShare";

const PromoList = ({ promos }) => {
  return (
    <div className='container'>
      <PromoTypeFilter />
      <PromoSearch />
      {promos.map((promo, index) => (
        <PromoCard key={promo.id} promo={promo} index={index} />
      ))}
    </div>
  );
};

export default PromoList;
