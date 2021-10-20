import React from 'react';
import './nav.css';
// import { Link, NavLink } from 'react-router-dom';

const styles = {
  navContents: {
    fontSize: '26px',
    color: '#000',
    textDecoration: 'none',
    marginLeft: '30px'
  }
};

function Navbar() {
  return (
    <nav>
      <div id="logo">
        <h1>A<span>W</span></h1>
      </div>
      <div id="rightNav">
        {/* <li><Link to="/">About</Link></li> */}
        <a href="www.google.com" style={styles.navContents}>About</a>
        <a href="www.google.com" style={styles.navContents}>Portfolio</a>
        <a href="www.google.com" style={styles.navContents}>Contact</a>
        <a href="www.google.com" style={styles.navContents}>Resume</a>
      </div>
    </nav>
  );
};

export default Navbar;