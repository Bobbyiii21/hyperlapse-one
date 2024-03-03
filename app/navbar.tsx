import React from "react";
// import "./navbar.css";
import { Button } from "@nextui-org/react";
import Hyperlapse_W from "../assets/Hyperlapse_W.png";

const Navbar: React.FC = () => {
  return (
    <div className="fixed w-full top-0 bg-black text-white p-[10px]">
      <ul className="list-none m-0 p-0 overflow-hidden">
        <li className="float-right">
          <a
            className="block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
            href="https://www.instagram.com/hyprlpse.him/"
          >
            Instagram
          </a>
        </li>
        <li className="float-right">
          <a
            className="block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
            href="/projects"
          >
            Projects
          </a>
        </li>
        <li className="float-right">
          <a
            className="block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
            href="/about"
          >
            About Me
          </a>
        </li>
        <li className="float-right">
          <a
            className="block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
            href="/"
          >
            Home
          </a>
        </li>
        <img
          src="../assets/Hyperlapse_W.png"
          alt="Image"
          className="w-[50px] h-[50px] float-left"
        />
      </ul>
    </div>
  );
};

export default Navbar;
