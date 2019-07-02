import React from "react";

const PromoTypeFilter = () => {
  return (
    // <div className="container">
    <ul className='nav bg-light my-3 nav-fill'>
      <li className='nav-item'>
        <a className='nav-link active' href='#'>
          All  <span className='badge badge-danger'>(100)</span>
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#'>
          Featured (5)
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#'>
          Coupon (30)
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#'>
          Deal (20)
        </a>
      </li>
    </ul>
    // </div>
  );
};

export default PromoTypeFilter;
