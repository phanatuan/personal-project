import React from "react";

const PromoSearch = () => {
  return (
    <div className='container my-4'>
      <span>161 mã giảm giá được tìm thấy</span>
      <div className='float-right'>
        <input type='text' placeholder='Search Here' />
        <button>Clear Search</button>
      </div>
    </div>
  );
};

export default PromoSearch;
