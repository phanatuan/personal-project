import React from "react";
import promoCardStlyes from "./PromoCard.scss";
import SocialShare from "./SocialShare";

const PromoCard = ({ promo, index }) => {
  return (
    <div className='card promo-card bg-light rounded mb-3 justify-content-between my-4'>
      <div className='row'>
        <div className='col-3 py-3 text-center'>
          <div className="">
          <h3>DEAL</h3>
          <h3>10%</h3>
          </div>
        </div>
        <div className='col-5 py-3 w-100 justify-content-start'>
          <span className='badge badge-danger'>HOT</span>
          <h3>Coupon Detail goes here </h3>
          <p className='text-muted mb-0'>Short info about voucher</p>
          <span className='badge badge-success'>Valid</span>
        </div>
        <div className='col-4'>
          <div className='info m-3 d-flex align-items-center'>
            <div className='w-100'>
              <div className='block'>
                <span className='time font-weight-light'>
                  <span>Expires in 19 days</span>
                </span>
              </div>
              {/* CODE REVEAL */}
              <div class='showcode'>
                <a
                  href='#'
                  class='code-link'
                  data-ex-link='http://themeforest.net'>
                  <span class='coupon-code' data-original-title='' title=''>
                    2016TATILRA50
                  </span>
                  <span class='show-code'>Show Code</span>
                </a>
              </div>
              {/* CODE REVEAL */}
            </div>
          </div>
        </div>
      </div>
      <div className='card-footer'>
        <i className="fas fa-share-alt"></i>
        <span className='px-2'>Chia Sẻ</span>
        <i className='fab fa-facebook px-2' />
        <i className='fab fa-twitter px-2' />
      </div>
    </div>
  );
};

export default PromoCard;
