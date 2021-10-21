import React from 'react';
import '../css/nav.css';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div id='nav'>
      <div id='logo'>
        <h1>A<span>W</span></h1>
      </div>
      <div id='rightNav'>
        <ul>
          <li>
            <a href='#about'
            onClick={() => handlePageChange('About')} 
            className={currentPage === 'About' ? 'active' : 'inactive'}
            >About</a>
          </li>
          <li>
            <a href='#portfolio'
            onClick={() => handlePageChange('Portfolio')} 
            className={currentPage === 'Portfolio' ? 'active' : 'inactive'}
            >Portfolio</a>
          </li>
          <li>
            <a href='#contact'
            onClick={() => handlePageChange('Contact')} 
            className={currentPage === 'Contact' ? 'active' : 'inactive'}
            >Contact</a>
          </li>
          <li>
            <a href='#resume'
            onClick={() => handlePageChange('Resume')} 
            className={currentPage === 'Resume' ? 'active' : 'inactive'}
            >Resume</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;