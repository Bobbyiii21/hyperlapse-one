import React from "react";
import "./navbar.css";
import { Button } from "@nextui-org/react";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="https://github.com/bobbyiii21"> GitHub</a>
        </li>
        <li>
          <a href="https://www.instagram.com/hyprlpse.him/"> Instagram</a>
        </li>
        <li>
          <a href="/"> Home</a>
        </li>
        <img
          src="https://raw.githubusercontent.com/Bobbyiii21/hyperlapse-one/main/assets/HyperlapseWatermarkG_.png"
          alt="Image"
          className="navbar-image"
        />
      </ul>
    </div>
  );
};

export default Navbar;
