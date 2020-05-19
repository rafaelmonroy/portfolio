import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import profilePic from './images/profile-pic.jpg';

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <h1 id="menu-name" style={{ alignSelf: 'flex-start' }}>
          RAFAEL MONROY
        </h1>
        <label
          id="hamburger"
          style={{ alignSelf: 'flex-end' }}
          htmlFor="toggle"
        >
          <FontAwesomeIcon icon={faBars} />
        </label>
        <input type="checkbox" id="toggle" />
        <ul id="navbar">
          <li>
            <div className="profile-pic-container">
              <img id="profile-pic" src={profilePic} alt="rafael-monroy" />
            </div>
          </li>
          <li id="about">
            <a href="#about-section">About</a>
          </li>
          <li id="skilss">
            <a href="#skills-section">Skills</a>
          </li>
          <li id="projects">
            <a href="#projects-section">Projects</a>
          </li>
          <li id="certifications">
            <a href="#certifications-section">Certifications</a>
          </li>
          <li id="profiles">
            <a href="#profiles-section">Profiles</a>
          </li>
          <li id="contact">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
