import React from 'react';
import '../css/portfolio.css';

function Portfolio() {
    return (
        <div id="container-section">
            <div id="container">
                <div className="card luxrent">
                    <h3>Luxury Rentals</h3><hr id="portfolio-hr" />
                    <div className="center-it-geez">
                        <div className="p-center">
                            <a href="https://luxury-rentals-10-4-2021.herokuapp.com/" target="_">Site</a>
                            <a href="https://github.com/AlexWilsonNC/luxury-rentals" target="_">Github</a>

                        </div>
                    </div>
                </div>
                <div className="card main-portfolio">
                    <h3>Main Portfolio</h3><hr id="portfolio-hr" />
                    <div className="center-it-geez">
                        <div className="p-center">
                            <a href="https://alexwilsonnc.github.io/alexwilson.me/#" target="_">Site</a>
                            <a href="https://github.com/AlexWilsonNC/alexwilson.me" target="_">Github</a>
                        </div>
                    </div>
                </div>
                <div className="card pokebattle">
                    <h3>Poke Battle</h3><hr id="portfolio-hr" />
                    <div className="center-it-geez">
                        <div className="p-center">
                            <a href="https://lilyws.github.io/pokemon-battle/index.html" target="_">Site</a>
                            <a href="https://github.com/AlexWilsonNC/pokemon-battle" target="_">Github</a>
                        </div>
                    </div>
                </div>
                <div className="card fitness">
                    <h3>Fitness Tracker</h3><hr id="portfolio-hr" />
                    <div className="center-it-geez">
                        <div className="p-center">
                            <a href="https://workout-w-alex.herokuapp.com/?id=616f023f46e40d0016063231" target="_">Site</a>
                            <a href="https://github.com/AlexWilsonNC/fitness-tracking-w-alex" target="_">Github</a>
                        </div>
                    </div>
                </div>
                <div className="card fitness">
                    <h3>Weather API</h3><hr id="portfolio-hr" />
                    <div className="center-it-geez">
                        <div className="p-center">
                            <a href="https://alexwilsonnc.github.io/weather-via-alexw/" target="_">Site</a>
                            <a href="https://github.com/AlexWilsonNC/weather-via-alexw" target="_">Github</a>
                        </div>
                    </div>
                </div>
                <div className="card fitness">
                    <h3>Offline Budget Tracker</h3><hr id="portfolio-hr" />
                    <div className="center-it-geez">
                        <div className="p-center">
                            <a href="https://alex-offline-budget-tracker.herokuapp.com/" target="_">Site</a>
                            <a href="https://github.com/AlexWilsonNC/offline-budget-tracker" target="_">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;