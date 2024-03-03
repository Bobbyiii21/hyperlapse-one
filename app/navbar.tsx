"use client";
import React, { useState } from "react";
import Menu from "@mui/icons-material/Menu";
// import "./navbar.css";
import { Button } from "@nextui-org/react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  return (
    <div
      className={`fixed w-full top-0 bg-black text-white p-[10px] ${
        isOpen ? "h-[100vh]" : "h-auto"
      }`}
    >
      <button
        className="md:hidden float-right block px-2 mt-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="text-4xl" />
      </button>
      {/* <img
          src="HyperlapseW.png"
          alt="Image"
          className="md:hidden w-[50px] h-[50px] float-left"
        /> */}
      {isOpen && (
        <div className="md:hidden absolute w-full mt-10 flex justify-center items-center">
          <ul className="list m-0 p-0 overflow-hidden items-center text-center">
            <li>
              <a
                className="text-2xl block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-2xl block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
                href="/about"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                className="text-2xl block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
                href="/projects"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                className="text-2xl block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
                href="https://www.instagram.com/hyprlpse.vision/"
              >
                Vision
              </a>
            </li>
          </ul>
        </div>
      )}
      <ul className="hidden md:block list-none m-0 p-0 overflow-hidden">
        <li className="float-right">
          <a
            className="block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
            href="https://www.instagram.com/hyprlpse.vision/"
          >
            Vision
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
          src="HyperlapseW.png"
          alt="Image"
          className="w-[50px] h-[50px] float-left"
        />
      </ul>
    </div>
  );
};

export default Navbar;
