import React from 'react';
import '../css/resume.css';

function Resume() {
    return (
        <div id="resume-page">
            <div id="downloader">
                <a href='./assets/resume-alex-wilson.pdf' download target="_">
                    <div class="pdf">
                        <p>Download RESUME.docx</p>
                    </div>
                </a>
            </div>

            <div id="specs">
                <div id="tech-specs">
                    <div id="left">
                        <h2>Front-End</h2>
                            <p>I love creating concepts from scratch, most of my nights are spent creating new designs just for
                                practice and pleasure.</p>
                        <hr id="resume-hr" />
                        <ul>
                            <li className="li-specs">HTML & CSS</li>
                            <li className="li-specs">JavaScript</li>
                            <li className="li-specs">React</li>
                            <li className="li-specs">Bootstrap</li>
                            <li className="li-specs">jQuery</li>
                            <li className="li-specs">Express.js</li>
                            <li className="li-specs">Bulma</li>
                            <li className="li-specs">Web APIs</li>
                            <li className="li-specs">localStorage</li>
                        </ul>
                    </div>
                    <div id="center">
                        <h2>Back-End</h2>
                        <p>With the utilization of existing technologies, innovation is limitless. I've learned how to use
                            quite a few to further my professional career.</p>
                        <hr id="resume-hr" />
                        <ul>
                            <li className="li-specs">MySQL & Sequelize</li>
                            <li className="li-specs">Node.js</li>
                            <li className="li-specs">GraphQL</li>
                            <li className="li-specs">MongoDB</li>
                            <li className="li-specs">Wordpress</li>
                            <li className="li-specs">Server-Side APIs</li>
                            <li className="li-specs">Jest</li>
                            <li className="li-specs">Regex</li>
                        </ul>
                    </div>
                    <div id="right">
                        <h2>Languages</h2>
                        <p>Travel and culture is one of the most beautiful aspects of our world, and I plan on experiencing
                            as much of it as I can while I'm still kickin'.</p>
                        <hr id="resume-hr" />
                        <ul>
                            <li className="li-specs">English</li>
                            <li className="li-specs"><span>"My mother tongue"</span></li>
                            <li className="li-specs">Spanish</li>
                            <li className="li-specs"><span>"Conversacional"</span></li>
                            <li className="li-specs">Japanese</li>
                            <li className="li-specs"><span>「アドバンスド」</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;