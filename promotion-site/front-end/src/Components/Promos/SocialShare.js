import React from "react";

const SocialShare = () => {
  return (
      <div className='social-cont'>
        <div className='col-md-4'>
          <span className='inline'>
            <i className='fab fa-thumbs-up up' /> 150
          </span>
          <span className='inline'>
            <i className='fab fa-thumbs-down down' /> 21
          </span>
        </div>
        <div className='col-md-8'>
          <div className='social'>
            <span className='text-right'>
              <p>Share on Social</p>
            </span>
            <a
              className='social-icon facebook'
              target='blank'
              data-tooltip='Facebook'
              href='http://www.facebook.com/SOJITRAHIREN'>
              <i className='fab fa-facebook'></i>
            </a>

            <a
              className='social-icon twitter'
              target='blank'
              data-tooltip='Twitter'
              href='https://www.twitter.com/Sojitra_Hiren'>
              <i className='fab fa-twitter'></i>
            </a>

            <a
              className='social-icon linkedin'
              target='blank'
              data-tooltip='LinkedIn'
              href='https://www.linkedin.com/in/hirensojitraamreli'>
              <i className='fab fa-linkedin' />
            </a>

            <a
              className='social-icon email'
              target='blank'
              data-tooltip='Contact e-Mail'
              href='mailto:hirensojitra007@gmail.com'>
              <i className='fas fa-envelope-o' />
            </a>
          </div>
          
        </div>
      </div>
  );
};

export default SocialShare;
