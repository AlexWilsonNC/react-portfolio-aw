import React from 'react';
import './nav.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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
    <Router>
      <nav>
        <div id="logo">
          <h1>A<span>W</span></h1>
        </div>
        <div id="rightNav">
          <ul>
            <li><Link to="./About.js" style={styles.navContents}>About</Link></li>
            <li><Link to="./Portfolio.js" style={styles.navContents}>Portfolio</Link></li>
            <li><Link to="./Contact.js" style={styles.navContents}>Contact</Link></li>
            <li><Link to="./Resume.js" style={styles.navContents}>Resume</Link></li>
          </ul>
        </div>
      </nav>
    </Router>
  );
};

export default Navbar;