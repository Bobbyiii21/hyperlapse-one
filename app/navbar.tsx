import React from "react";
import "./navbar.css";
import {Button} from "@nextui-org/react";

const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <a href="https://www.instagram.com/hyprlpse.him/"> Instagram</a>
                </li>
                <li>
                    <a href="/projects"> Projects</a>
                </li>
                <li>
                    <a href="/about"> About Me</a>
                </li>
                <li>
                    <a href="/"> Home</a>
                </li>
                <button>
                    <img
                        src="https://raw.githubusercontent.com/Bobbyiii21/hyperlapse-one/main/assets/HyperlapseWatermarkG_.png"
                        alt="Image"
                        className="navbar-image"
                    />
                    <a href="/"/>
                </button>

            </ul>
        </div>
);
};

export default Navbar;
