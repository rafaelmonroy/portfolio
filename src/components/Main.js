import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import "react-image-gallery/styles/css/image-gallery.css";
import calculator from './images/calculator.png'
import quoteGenerator from './images/random-quote-generator.png'
import markdown from './images/markdown-previewer.png'
import drumMachine from './images/drum-machine.png'
import pomodoroClock from './images/pomodoro-clock.png'
import responsiveCert from './images/responsive-web-design-cert.png'
import algorithmsCert from './images/JS-algorithms-data-structures-cert.png'
import frontEndLibraries from './images/front-end-libraries-cert.png'

import { faTerminal, faFire, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faHtml5, faCss3, faBootstrap, faJsSquare,faGit, faNode, faNpm, faWordpress, faAdobe, faGithub, faLinkedinIn, faCodepen} from '@fortawesome/free-brands-svg-icons' 

library.add(faReact, faHtml5, faCss3, faBootstrap, faJsSquare, faGit, faNode, faNpm, faWordpress, faAdobe, faGithub, faLinkedinIn, faCodepen); 


configureAnchors({scrollDuration: 1000})

export default class Main extends Component {

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
    render() {
        return (

                <div className='main-container' >
                    <ScrollableAnchor id={'about-section'}>
                        <div className="sections">
                            <h1 id="name">RAFAEL<span id="monroy">MONROY</span></h1>
                            <p id="sub-heading"><span id="front-end">Front-End Web Developer</span> from Los Angeles, CA</p> 
                            <p id="about-me">After 4 years of customizing Wordpress sites with <span className="highlights">HTML & CSS</span> , I decided to learn a programming language 
                                that would allow me to break from the limitations of Wordpress and design websites only limited by my imagination.
                                After learning <span className="highlights">Vanilla Javascript</span>, building the projects displayed on this site and falling in love with programming, I have decided to 
                                pursue a career as a <span className="highlights">Front-End Developer</span>.               
                            </p>
                        </div>
                    </ScrollableAnchor> 
                    <ScrollableAnchor id={'skills-section'}>
                        <div className="sections">
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
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'projects-section'}>
                        <div className="sections">
                            <h2 className="pro-certs">PROJECTS</h2>
                            <div className="slider">  
                                <div className="slides">
                                    <div id="slide-1">
                                        <a href="https://raf-pomodoro-clock-app.netlify.com/" target="_blank" rel="noopener noreferrer"><img className="slide-pics" src={pomodoroClock} alt="rafael-monroy"/></a>
                                        <div className="project-name">Pomodoro Clock</div>
                                    </div>
                                    <div id="slide-2">
                                        <a href="https://raf-calculator-app.netlify.com/" target="_blank" rel="noopener noreferrer"><img className="slide-pics" src={calculator} alt="rafael-monroy"/></a>
                                        <div className="project-name">Calculator</div>
                                    </div>
                                    <div id="slide-3">
                                        <a href="https://raf-drum-machine-app.netlify.com/" target="_blank" rel="noopener noreferrer"><img className="slide-pics" src={drumMachine} alt="rafael-monroy"/></a>
                                        <div className="project-name">Drum Machine</div>
                                    </div> 
                                    <div id="slide-4">
                                        <a href="https://raf-markdown-app.netlify.com/" target="_blank" rel="noopener noreferrer"><img className="slide-pics" src={markdown} alt="rafael-monroy"/></a>
                                        <div className="project-name">Markdown Previewer</div>
                                    </div>
                                    <div id="slide-5">
                                        <a href="https://raf-random-quote-gen-app.netlify.com/" target="_blank" rel="noopener noreferrer"><img className="slide-pics" src={quoteGenerator} alt="rafael-monroy"/></a>
                                        <div className="project-name"> Random Quote Generator</div>
                                    </div>                    
                                </div>
                            </div>
                        </div>
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'certifications-section'}>
                        <div className="sections">
                            <h2 className="pro-certs">CERTIFICATIONS</h2>
                            <div className="slider">  
                                <div className="slides">
                                    <div id="slide-1">
                                        <a href="https://www.freecodecamp.org/certification/rafaelmonroy/responsive-web-design" target="_blank" rel="noopener noreferrer"><img className="slide-pics" src={responsiveCert} alt="rafael-monroy"/></a>
                                    </div>
                                    <div id="slide-2">
                                        <a href="https://www.freecodecamp.org/certification/rafaelmonroy/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer"><img className="slide-pics" src={algorithmsCert} alt="rafael-monroy"/></a>
                                    </div>
                                    <div id="slide-3">
                                        <a href="https://www.freecodecamp.org/certification/rafaelmonroy/front-end-libraries" target="_blank" rel="noopener noreferrer"><img className="slide-pics" src={frontEndLibraries} alt="rafael-monroy"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'profiles-section'} >
                        <div className="sections">
                            <h2>PROFILES</h2>
                            <div className="social">
                                <a href="https://www.freecodecamp.org/rafaelmonroy" className="social-buttons" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFire} />FreeCodeCamp</a>
                                <a href="https://github.com/rafaelmonroy" className="social-buttons" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} />GitHub</a>
                                <a href="https://www.linkedin.com/in/rafael-monroy-34ab53132/" className="social-buttons" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin-in']} />LinkedIn</a>
                                <a href="https://codepen.io/rafaelmonroy" className="social-buttons" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'codepen']} />Codepen</a>
                            </div>
                        </div>
                    </ScrollableAnchor>
                    <button id="scrollToTop" onClick={this.scrollToTop}><FontAwesomeIcon icon={faArrowUp} /></button>
                </div>
            
        )
    }
}
