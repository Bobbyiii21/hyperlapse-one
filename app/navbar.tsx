import React from "react";
import './navbar.css';

const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <ul>
                <li><a href="/"> Home</a></li>
                <li><a href="/features"> Features</a></li>
                <li><a href="/customers"> Customers</a></li>
            <img  src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="Image" className="navbar-image"/>
            </ul>
        </div>
    );
}

export default Navbar;