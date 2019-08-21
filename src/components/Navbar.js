import React, { Component } from 'react'
import profilePic from './images/profile-pic.jpg'

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <ul id="navbar">
                    <li id="rafael">Rafael Monroy</li>
                    <li><img src={profilePic} id="profile-pic"/></li>
                    <li id="about"><a href="#">About</a></li>
                    <li id="projects"><a href="#">Projects</a></li>
                    <li id="experience"><a href="#">Experience</a></li>
                    <li id="cntact"><a href="#">Contact</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar
