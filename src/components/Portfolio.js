import React from 'react';
import '../css/portfolio.css';

function Portfolio() {
    return (
        <div id="container-section">
            <div id="container">
                <div class="card luxrent">
                    <a href="https://luxury-rentals-10-4-2021.herokuapp.com" target="_">
                        <h3>Luxury Rentals</h3><hr id="portfolio-hr" />
                        <div class="p-center">
                            <p>Supercar Rental application built using handlebars, MongoDB, 3rd Party APIs, and requires user authentification.</p>
                        </div>
                    </a>
                </div>
                <div class="card main-portfolio">
                    <a href="https://alexwilsonnc.github.io/alexwilson.me/" target="_">
                        <h3>Main Portfolio</h3><hr id="portfolio-hr" />
                        <div class="p-center">
                            <p>My main Portfolio using many features like localStorage, jQuery, & window manipulation, w/ a heavy focus on CSS.</p>
                        </div>
                    </a>
                </div>
                <div class="card pokebattle">
                    <a href="https://lilyws.github.io/pokemon-battle/index.html" target="_">
                        <h3>Poke Battle</h3><hr id="portfolio-hr" />
                        <div class="p-center">
                            <p>Simulator that allows you to see how Pokemon Battles are effected given real-time weather conditions via APIs.</p>
                        </div>
                    </a>
                </div>
                <div class="card fitness">
                    <a href="https://workout-w-alex.herokuapp.com/?id=616f023f46e40d0016063231" target="_">
                        <h3>Fitness Tracker</h3><hr id="portfolio-hr" />
                        <div class="p-center">
                            <p>App that allows a user to keep track of their recent workouts, displaying them as graphs thanks to MongoDB.</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;