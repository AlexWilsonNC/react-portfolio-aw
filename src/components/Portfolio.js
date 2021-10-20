import React from 'react';
import './portfolio.css';

function Portfolio() {
    return (
        <div id="container">
            <div class="card luxrent">
                <h3>Luxury Rentals</h3>
            </div>
            <div class="card pokebattle">
                <h3>Poke Battle</h3>
            </div>
            <div class="card fitness">
                <h3>Fitness Tracker</h3>
            </div>
            <div class="card weather">
                <h3>Weather API</h3>
            </div>
        </div>
    );
};

export default Portfolio;