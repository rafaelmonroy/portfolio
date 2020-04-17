import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import { configureAnchors } from "react-scrollable-anchor";
import "react-image-gallery/styles/css/image-gallery.css";

//images
import calculator from "./images/calculator.png";
import quoteGenerator from "./images/random-quote-generator.png";
import markdown from "./images/markdown-previewer.png";
import drumMachine from "./images/drum-machine.png";
import pomodoroClock from "./images/pomodoro-clock.png";
import responsiveCert from "./images/responsive-web-design-cert.png";
import algorithmsCert from "./images/JS-algorithms-data-structures-cert.png";
import frontEndLibraries from "./images/front-end-libraries-cert.png";
import profilePic from "./images/profile-pic.jpg";
import memeGenerator from "./images/car-audio-meme-generator.png";
import tacoPlaces from "./images/tacoplaces.png";
import tacomapsSubscribe from "./images/tacomaps-subscribe.png";

//icons
import {
  faTerminal,
  faFire,
  faArrowUp,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faBootstrap,
  faJsSquare,
  faGit,
  faNode,
  faNpm,
  faWordpress,
  faAdobe,
  faGithub,
  faLinkedinIn,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faReact,
  faHtml5,
  faCss3,
  faBootstrap,
  faJsSquare,
  faGit,
  faNode,
  faNpm,
  faWordpress,
  faAdobe,
  faGithub,
  faLinkedinIn,
  faCodepen
);

configureAnchors({ offset: -60, scrollDuration: 1000 });

export default class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <ScrollableAnchor id={"about-section"}>
          <div id="about-section-css" className="sections">
            <div className="mobile-profile-pic-container">
              <img
                id="mobile-profile-pic"
                src={profilePic}
                alt="rafael-monroy"
              />
            </div>
            <h1 id="name">
              RAFAEL<span id="monroy">MONROY</span>
            </h1>
            <p id="sub-heading">
              <span id="front-end">Full-Stack Developer</span> from Los Angeles,
              CA
            </p>
            <p id="about-me">
              After 4 years of customizing Wordpress sites with{" "}
              <span className="highlights">HTML &amp; CSS</span> , I decided to
              learn a programming language that would allow me to break from the
              limitations of Wordpress and design web &amp; phone apps only
              limited by my imagination. After learning{" "}
              <span className="highlights">Vanilla Javascript</span>, building
              the projects displayed on this site and falling in love with
              programming, I have decided to pursue a career as a{" "}
              <span className="highlights">Full-Stack Developer</span>.
            </p>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={"skills-section"}>
          <div id="skills-section-css" className="sections">
            <h2>SKILLS &amp; TOOLS</h2>
            <FontAwesomeIcon icon={["fab", "html5"]} />
            <FontAwesomeIcon icon={["fab", "css3"]} />
            <FontAwesomeIcon icon={["fab", "js-square"]} />
            <FontAwesomeIcon icon={["fab", "bootstrap"]} />
            <FontAwesomeIcon icon={["fab", "react"]} />
            <FontAwesomeIcon icon={faTerminal} />
            <FontAwesomeIcon icon={["fab", "git"]} />
            <FontAwesomeIcon icon={["fab", "node"]} />
            <FontAwesomeIcon icon={["fab", "npm"]} />
            <FontAwesomeIcon icon={["fab", "wordpress"]} />
            <FontAwesomeIcon icon={["fab", "adobe"]} />
            <br />
            <br />
            <p>
              MongoDB - ExpressJS - ReactJS - NodeJS - React Native - Firebase -
              JavaScript ES6 - HTML 5 - CSS 3 - Bootstrap - jQuery - CLI - Git -
              NPM - Wordpress - WooCommerce - Dreamweaver - Illustrator -
              Photoshop
            </p>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={"projects-section"}>
          <div id="projects-section-css" className="sections">
            <h2 className="pro-certs" id="projects-title">
              PROJECTS
            </h2>

            <p style={{ color: "red" }} id="click-image">
              Click image to see project in production!
            </p>

            <div className="slider">
              <div className="slides">
                <div>
                  <div className="project-name">TacoPlaces</div>
                  <div className="project-description">
                    Using the MERN Stack, Google Maps API and Geolocation API, I
                    created a web app that allows users to locate the best taco
                    place in their neighborhood. Users are also able to add
                    their favorite location through a form which sends the
                    address to Google to return back LatLong which is then
                    rendered on the TacoPlace Map.
                  </div>
                </div>
                <div>
                  <a
                    href="https://secret-sea-51339.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="slide-pics"
                      src={tacoPlaces}
                      alt="rafael-monroy"
                    />
                  </a>
                </div>
                <div>
                  <div className="project-name">TacoMaps Subscribe</div>
                  <div className="project-description">
                    Using the MERN Stack, Constant Contact API along with OAuth
                    2.0, I created a subscribe page which triggers an auto
                    response email for people that want to be notified when our
                    App Drops.
                  </div>
                </div>
                <div>
                  <a
                    href="https://tacomaps-subscribe.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="slide-pics"
                      src={tacomapsSubscribe}
                      alt="rafael-monroy"
                    />
                  </a>
                </div>
                <div>
                  <div className="project-name">Car Audio Meme Generator</div>
                  <div className="project-description">
                    Using ReactJS and CSS I created a meme generator that I used
                    to create memes for the company I worked for. Using this
                    generator along with other content I grew the company’s
                    Instagram account from 1k to 16.5k followers.
                  </div>
                </div>
                <div>
                  <a
                    href="https://raf-car-audio-meme-generator.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="slide-pics"
                      src={memeGenerator}
                      alt="rafael-monroy"
                    />
                  </a>
                </div>
                <div>
                  <div className="project-name">Pomodoro Clock</div>
                  <div className="project-description">
                    Using ReactJS, CSS Flexbox and Grid I created a pomodoro
                    clock that allows users to study, train or manage their
                    productivity time more effectively.
                  </div>
                </div>
                <div>
                  <a
                    href="https://raf-pomodoro-clock-app.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="slide-pics"
                      src={pomodoroClock}
                      alt="rafael-monroy"
                    />
                  </a>
                </div>
                <div>
                  <div className="project-name">Calculator</div>
                  <div className="project-description">
                    Using ReactJS, CSS Flexbox and Grid I created a fully
                    functional Javascript Calculator that can process any
                    addition, subtraction, multiplication and division as well
                    as reject any invalid arithmetic equations.
                  </div>
                </div>
                <div>
                  <a
                    href="https://raf-calculator-app.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="slide-pics"
                      src={calculator}
                      alt="rafael-monroy"
                    />
                  </a>
                </div>
                <div>
                  <div className="project-name">Drum Machine</div>
                  <div className="project-description">
                    Using ReactJS, CSS Flexbox and Grid I created drum machine
                    that plays a certain drum sound when you mouse click on a
                    button or press down a certain keyboard keys.
                  </div>
                </div>
                <div>
                  <a
                    href="https://raf-drum-machine-app.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="slide-pics"
                      src={drumMachine}
                      alt="rafael-monroy"
                    />
                  </a>
                </div>
                <div>
                  <div className="project-name">Markdown Previewer</div>
                  <div className="project-description">
                    Using the ReactJS, NPM and CSS I build a Markdown Previewer
                    that allows users to easily convert their text to HTML with
                    simple markdown commands
                  </div>
                </div>
                <div>
                  <a
                    href="https://raf-markdown-app.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="slide-pics"
                      src={markdown}
                      alt="rafael-monroy"
                    />
                  </a>
                </div>
                <div>
                  <div className="project-name"> Random Quote Generator</div>
                  <div className="project-description">
                    Using ReactJS and CSS Flexbox I created a quote generator
                    that calls an external API and fetches data to display a
                    random quote and author everytime a specific button is
                    clicked. Users can Tweet the quote with a click of a button.
                  </div>
                </div>
                <div>
                  <a
                    href="https://raf-random-quote-gen-app.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="slide-pics"
                      src={quoteGenerator}
                      alt="rafael-monroy"
                    />
                  </a>
                </div>
              </div>
            </div>
            <br />
            <div id="scroll-left">
              <p>
                Scroll to see more{" "}
                <span id="right-arrow">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </p>
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={"certifications-section"}>
          <div id="certifications-section-css" className="sections">
            <h2 className="pro-certs">CERTIFICATIONS</h2>
            <div className="slider">
              <div className="slides">
                <div id="slide-1">
                  <a
                    href="https://www.freecodecamp.org/certification/rafaelmonroy/responsive-web-design"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="slide-pics"
                      src={responsiveCert}
                      alt="rafael-monroy"
                    />
                  </a>
                </div>
                <div id="slide-2">
                  <a
                    href="https://www.freecodecamp.org/certification/rafaelmonroy/javascript-algorithms-and-data-structures"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="slide-pics"
                      src={algorithmsCert}
                      alt="rafael-monroy"
                    />
                  </a>
                </div>
                <div id="slide-3">
                  <a
                    href="https://www.freecodecamp.org/certification/rafaelmonroy/front-end-libraries"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="slide-pics"
                      src={frontEndLibraries}
                      alt="rafael-monroy"
                    />
                  </a>
                </div>
              </div>
            </div>
            <br />
            <div id="scroll-left">
              <p>
                Scroll to see more{" "}
                <span id="right-arrow">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </p>
            </div>
          </div>
        </ScrollableAnchor>

        <ScrollableAnchor id={"profiles-section"}>
          <div id="profiles-section-css" className="sections">
            <h2>PROFILES</h2>
            <div className="social">
              <a
                href="https://www.freecodecamp.org/rafaelmonroy"
                className="social-buttons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFire} />
                FreeCodeCamp
              </a>
              <a
                href="https://github.com/rafaelmonroy"
                className="social-buttons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rafael-monroy-34ab53132/"
                className="social-buttons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                LinkedIn
              </a>
              <a
                href="https://codepen.io/rafaelmonroy"
                className="social-buttons"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "codepen"]} />
                Codepen
              </a>
            </div>
          </div>
        </ScrollableAnchor>
        <a href="#about-section" id="scroll-to-top">
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </div>
    );
  }
}
