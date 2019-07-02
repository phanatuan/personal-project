import React from 'react'
import PromoList from '../Components/Promos/PromoList';
import BrandList from '../Components/Brands/BrandList';
import FilterSuite from '../Components/FilterSuite';


const BrandPage = ({promos}) => {
    return (
        <div>
            <h1>Brand Page</h1>
            <PromoList promos={promos} />
        </div>
    )
}

export default BrandPage
