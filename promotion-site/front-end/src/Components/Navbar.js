import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className='navbar-brand' href='#'>
        Koupon
      </a>
      {/* For Responsive Collapse into a button */}
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' />
      </button>
      {/* For Responsive Collapse into a button */}

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Brand Page
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/category/baby' className='nav-link'>
              Category Page
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/blog' className='nav-link'>
              Blog Page
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/login' className='nav-link'>
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
