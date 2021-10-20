import React from 'react';
import './portfolio.css';
import lambo from '../assets/lambo-etch.png'

const styles = {
    lambo: {
        backgroundImage: './assets/lambo-etch.png'
    }
}

function Portfolio() {
    return (
        <div id="container-section">
            <div id="container">
                <div class="card luxrent">
                    <h3>Luxury Rentals</h3>
                    <p>Supercar Rental application built with handlebars, MongoDB, and 3rd Party APIs.</p>
                    <img id="lambo" src={styles.lambo} />
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
        </div>
    );
};

export default Portfolio;