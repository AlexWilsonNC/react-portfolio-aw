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
                                practice and pleasure. Creativity aplenty!</p>
                        <hr id="resume-hr" />
                        <ul>
                            <li class="li-specs">HTML & CSS</li>
                            <li class="li-specs">JavaScript</li>
                            <li class="li-specs">React</li>
                            <li class="li-specs">Bootstrap</li>
                            <li class="li-specs">jQuery</li>
                            <li class="li-specs">Express.js</li>
                            <li class="li-specs">Bulma</li>
                            <li class="li-specs">Web APIs</li>
                            <li class="li-specs">localStorage</li>
                        </ul>
                    </div>
                    <div id="center">
                        <h2>Back-End</h2>
                        <p>With the utilization of existing technologies, innovation is limitless. I've learned how to use
                            quite a few to further my professional career.</p>
                        <hr id="resume-hr" />
                        <ul>
                            <li class="li-specs">MySQL & Sequelize</li>
                            <li class="li-specs">Node.js</li>
                            <li class="li-specs">GraphQL</li>
                            <li class="li-specs">MongoDB</li>
                            <li class="li-specs">Wordpress</li>
                            <li class="li-specs">Server-Side APIs</li>
                            <li class="li-specs">Jest</li>
                            <li class="li-specs">Regex</li>
                        </ul>
                    </div>
                    <div id="right">
                        <h2>Languages</h2>
                        <p>Travel and culture is one of the most beautiful aspects of our world, and I plan on experiencing
                            as much of it as I can while I'm still kickin'.</p>
                        <hr id="resume-hr" />
                        <ul>
                            <li class="li-specs">English</li>
                            <li class="li-specs"><span>"My mother tongue"</span></li>
                            <li class="li-specs">Spanish</li>
                            <li class="li-specs"><span>"Conversacional"</span></li>
                            <li class="li-specs">Japanese</li>
                            <li class="li-specs"><span>「アドバンスド」</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;