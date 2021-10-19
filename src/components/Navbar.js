import React from 'react';

const styles = {
    heading: {
      background: 'transparent',
      height: '75px',
      lineHeight: 3.5,
      fontSize: '26px',
      color: '#fff',
      padding: '0 20px',
    },
  };

function Navbar() {
    return (
      <div style={styles.card}>
        <div style={styles.heading}>Home</div>
      </div>
    );
  }

export default Navbar;