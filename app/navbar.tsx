import React from "react";
import './navbar.css';

const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <ul>
                <li><a href="/customers"> Contact</a></li>
                <li><a href="/features"> About Me</a></li>
                <li><a href="/"> Home</a></li>
            <img src="https://raw.githubusercontent.com/Bobbyiii21/hyperlapse-one/main/assets/HyperlapseWatermarkG_.png" alt="Image" className="navbar-image"/>
            </ul>
        </div>
    );
}

export default Navbar;