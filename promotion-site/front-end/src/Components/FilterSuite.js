import React from 'react'

const FilterSuite = ({promos}) => {
    console.log(promos)
    return (
        <div>
            <h3>By Category</h3>
            {promos.map(promo => (
               <div className="checkbox">
                   <label>
                       <input type="checkbox"
                              className='mr-2'
                       />
                       {promo.category}
                   </label>
               </div> 
            ))}
        </div>
    )
}

export default FilterSuite
