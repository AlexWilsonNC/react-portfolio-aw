import React from 'react';
import '../css/footer.css';
import github from '../assets/github.jpg';
import linkedin from '../assets/linkedin.jpg';
import twitter from '../assets/twitter.jpg';

function Footer() {
  return (
    <div id='footer'>
      <div id='foot-left'>
        <a className='logo' href='https://github.com/AlexWilsonNC' target='_'>
          <img id='github' src={github} />
        </a>
        <a className='logo' href='https://www.linkedin.com/in/alexander-wilson-5661b6218/' target='_'>
          <img id='linkedin' src={linkedin} />
        </a>
        <a className='logo' href='https://twitter.com/alexwilsonTCG' target='_'>
          <img id='twitter' src={twitter} />
        </a>
      </div>
      <p>~ thank you</p>
    </div>
  );
};

export default Footer;
