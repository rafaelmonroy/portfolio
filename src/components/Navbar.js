import React, { Component } from 'react'
import profilePic from './images/profile-pic.jpg'

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <ul id="navbar">
                    <li><div className="profile-pic-container"><img id="profile-pic" src={profilePic} alt="rafael-monroy"/></div></li>
                    <li id="about"><a href="#about-section">About</a></li>
                    <li id="skilss"><a href="#skills-section">Skills</a></li>
                    <li id="projects"><a href="#projects-section">Projects</a></li>
                    <li id="certifications"><a href="#certifications-section">Certifications</a></li>
                    <li id="profiles"><a href="#profiles-section">Profiles</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar
