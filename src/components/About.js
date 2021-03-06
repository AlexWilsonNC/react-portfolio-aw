import React from 'react';
import '../css/about.css';
import profilePic from '../assets/profile-bw.jpg';

function About() {
    return (
        <div id='main'>
            <img src={profilePic} alt='profile-pic'/>
            <h2>Designer && Web Developer</h2>
            <hr />
            <p>Alex here, ever since I was a kid, I've been artistic, enjoyed puzzles, and enveloped myself in technology, so web design and development was naturally my one, true calling. I've learned from and collaborated with other talented people to create products for both consumer and business use. I'm quiet and keep to myself often, but talk to me too much, and I'll be an open book with endless ideas.</p>
        </div>
    );
};

export default About;