import React from 'react';
import '../css/resume.css';

function Resume() {
    return (
        <div id="resume-page">
            <div id="downloader">
                <a href='./assets/resume-alex-wilson.pdf' download target="_">
                    <div class="pdf">
                        <p>Download RESUME.pdf</p>
                    </div>
                </a>
            </div>

            <hr id="resume-hr" />

            <div id="specs">
                <div id="tech-specs">
                    <div id="left">
                        <h2>Front-End</h2>
                        <p>I love creating concepts from scratch, most of my nights are spent creating new designs just for
                            practice and pleasure. Creativity aplenty!</p>
                        <hr />
                        <ul>
                            <li>HTML & CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>jQuery</li>
                            <li>Express.js</li>
                            <li>Bulma</li>
                            <li>Web APIs</li>
                            <li>localStorage</li>
                        </ul>
                    </div>
                    <div id="center">
                        <h2>Back-End</h2>
                        <p>With the utilization of existing technologies, innovation is limitless. I've learned how to use
                            quite a few to further my professional career.</p>
                        <hr />
                        <ul>
                            <li>MySQL & Sequelize</li>
                            <li>Node.js</li>
                            <li>GraphQL</li>
                            <li>MongoDB</li>
                            <li>Wordpress</li>
                            <li>Server-Side APIs</li>
                            <li>Jest</li>
                            <li>Regex</li>
                        </ul>
                    </div>
                    <div id="right">
                        <h2>Languages</h2>
                        <p>Travel and culture is one of the most beautiful aspects of our world, and I plan on experiencing
                            as much of it as I can while I'm still kickin'.</p>
                        <hr />
                        <ul>
                            <li>English</li>
                            <li><span>"My mother tongue"</span></li>
                            <li>>Spanish</li>
                            <li><span>"Conversacional"</span></li>
                            <li>Japanese</li>
                            <li><span>「アドバンスド」</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;