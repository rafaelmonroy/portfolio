import React, { Component } from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import calculator from './images/calculator.png'
import quoteGenerator from './images/random-quote-generator.png';
import markdown from './images/markdown-previewer.png'
import drumMachine from './images/drum-machine.png'
import responsiveCert from './images/responsive-web-design-cert.png'
import algorithmsCert from './images/JS-algorithms-data-structures-cert.png'

import { faTerminal, faFire } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faHtml5, faCss3, faBootstrap, faJsSquare,faGit, faNode, faNpm, faWordpress, faAdobe, faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons' 

library.add(faReact, faHtml5, faCss3, faBootstrap, faJsSquare, faGit, faNode, faNpm, faWordpress, faAdobe, faGithub, faLinkedinIn); 




export default class Main extends Component {
    render() {
        return (

                <div className='main-container' >
                    <div id="about-section" className="sections">
                        <h1 id="name">RAFAEL<span id="monroy">MONROY</span></h1>
                        <p id="sub-heading"><span id="front-end">Front-End Web Developer</span> from Los Angeles, CA</p> 
                        <p id="about-me">After 3 years of customizing Wordpress sites with <span className="highlights">HTML & CSS</span> , I decided to learn a programming language 
                            that would allow me to break from the limitations of Wordpress and design websites only limited by my imagination.
                            After learning <span className="highlights">Vanilla Javascript</span>, building the projects displayed on this site and falling in love with programming, I have decided to leave a succesful
                            short lived career in <span className="highlights">Digital Marketing</span> for a career as a <span className="highlights">Front-End Developer</span>. Testing GitHub Intergration                 
                        </p>
                    </div>
                    <div id="skills-section" className="sections">
                        <h2>SKILLS & TOOLS</h2>
                        <FontAwesomeIcon icon={['fab', 'html5']} />
                        <FontAwesomeIcon icon={['fab', 'css3']} />
                        <FontAwesomeIcon icon={['fab', 'js-square']} />
                        <FontAwesomeIcon icon={['fab', 'bootstrap']} />
                        <FontAwesomeIcon icon={['fab', 'react']} />
                        <FontAwesomeIcon icon={faTerminal} />
                        <FontAwesomeIcon icon={['fab', 'git']} />
                        <FontAwesomeIcon icon={['fab', 'node']} />
                        <FontAwesomeIcon icon={['fab', 'npm']} />
                        <FontAwesomeIcon icon={['fab', 'wordpress']} />
                        <FontAwesomeIcon icon={['fab', 'adobe']} />
                    </div>
                    <div id="projects-section" className="sections">
                        <h2>PROJECTS</h2>
                        <div className="slider">  
                            <div className="slides">
                                <div id="slide-1">
                                    <a href="https://ribi1.csb.app/" target="_blank" rel="noopener noreferrer"><img className="slide-pics" src={calculator} alt="rafael-monroy"/></a>
                                    <div className="project-name"> JS CALCULATOR</div>
                                </div>
                                <div id="slide-2">
                                    <a href="https://zzx4g.csb.app/" target="_blank" rel="noopener noreferrer"><img className="slide-pics" src={quoteGenerator} alt="rafael-monroy"/></a>
                                    <div className="project-name"> Randome Quote Generator</div>
                                </div>
                                <div id="slide-3">
                                    <a href="https://l2f0l.csb.app/" target="_blank" rel="noopener noreferrer"><img className="slide-pics" src={markdown} alt="rafael-monroy"/></a>
                                    <div className="project-name">Markdown Previewer</div>
                                </div>
                                <div id="slide-4">
                                    <a href="https://zblko.csb.app/" target="_blank" rel="noopener noreferrer"><img className="slide-pics" src={drumMachine} alt="rafael-monroy"/></a>
                                    <div className="project-name">Drum Machine</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="certifications-section" className="sections">
                        <h2>CERTIFICATIONS</h2>
                        <div className="slider">  
                            <div className="slides">
                                <div id="slide-1">
                                    <a href="https://www.freecodecamp.org/certification/rafaelmonroy/responsive-web-design" target="_blank" rel="noopener noreferrer"><img className="slide-pics" src={responsiveCert} alt="rafael-monroy"/></a>
                                </div>
                                <div id="slide-2">
                                    <a href="https://www.freecodecamp.org/certification/rafaelmonroy/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer"><img className="slide-pics" src={algorithmsCert} alt="rafael-monroy"/></a>
                                </div>
                                <div id="slide-3">
                                    <div className="project-name">FRONT-END CERTIFICATE COMING SOON</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="profiles-section" className="sections">
                        <h2>PROFILES</h2>
                        <div className="social">
                            <a href="https://www.freecodecamp.org/rafaelmonroy" className="social-buttons" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFire} />FreeCodeCamp</a>
                            <a href="https://github.com/rafaelmonroy" className="social-buttons" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} />GitHub</a>
                            <a href="https://www.linkedin.com/in/rafael-monroy-34ab53132/" className="social-buttons" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin-in']} />LinkedIn</a>
                        </div>
                    </div>
                </div>
            
        )
    }
}
