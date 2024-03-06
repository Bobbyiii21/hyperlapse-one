"use client";
import React, { useState } from "react";
import Menu from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
// import "./navbar.css";
// import { Button } from "@nextui-org/react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);

  const handleSocialClick = () => {
    setIsSocialOpen(!isSocialOpen);
  };
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`fixed w-full top-0 bg-black text-white p-[10px] ${
        isOpen ? "h-[100vh]" : "h-auto"
      }`}
    >
      <button
        className="md:hidden float-right block px-2 mt-1"
        onClick={() => {
          handleMenuClick();
          setIsSocialOpen(false);
        }}
      >
        {isOpen ? (
          <ClearIcon className="text-4xl" />
        ) : (
          <Menu className="text-4xl" />
        )}
      </button>
      {isOpen && ( // if open
        <div className="md:hidden absolute w-full mt-10 flex justify-center items-center">
          {isSocialOpen ? (
            <ul className="list m-0 p-0 overflow-hidden items-center text-center">
              <li>
                <button>
                  <a
                    className="text-2xl block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
                    href="tel:678-235-4052"
                  >
                    Phone
                  </a>
                </button>
              </li>
                <button>
                  <a
                    className="text-2xl block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
                    href="mailto:bobbyiii@outlook.com"
                  >
                    Email
                  </a>
                </button>
              <li>
                <button>
                  <a
                    className="text-2xl block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
                    href="https://www.instagram.com/hyprlpse.vision/"
                  >
                    Instagram
                  </a>
                </button>
              </li>
              {/* <li>
                <button>
                  <a
                    className="text-2xl block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
                    href="/linkedin"
                  >
                    LinkedIn
                  </a>
                </button>
              </li> */}
              <li>
                <button onClick={handleSocialClick}>
                  <p className="text-2xl block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]">
                    Return
                  </p>
                </button>
              </li>
            </ul>
          ) : (
            // if social is not open
            <ul className="list m-0 p-0 overflow-hidden items-center text-center">
              <li>
                <button>
                  <a
                    className="text-2xl block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
                    href="/"
                  >
                    Home
                  </a>
                </button>
              </li>
              <li>
                <button>
                  <a
                    className="text-2xl block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
                    href="/about"
                  >
                    About Me
                  </a>
                </button>
              </li>
              <li>
                <button>
                  <a
                    className="text-2xl block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
                    href="/work"
                  >
                    Work
                  </a>
                </button>
              </li>

              <li>
                <button onClick={handleSocialClick}>
                  <a className="text-2xl block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]">
                    Social
                  </a>
                </button>
              </li>
            </ul>
          )}
        </div>
      )}
      {isSocialOpen ? (
        <ul className="hidden md:block list-none m-0 p-0 overflow-hidden">
          <li className="float-right">
            <button onClick={handleSocialClick}>
              <p className="font-semibold lg:text-md block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]">
                Return
              </p>
            </button>
          </li>
          {/* <li className="float-right">
            <button>
              <a
                className="font-semibold lg:text-md block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
                href="/linkedin"
              >
                LinkedIn
              </a>
            </button>
          </li> */}
          <li className="float-right">
            <button>
              <a
                className="font-semibold lg:text-md block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
                href="https://www.instagram.com/hyprlpse.vision/"
              >
                Instagram
              </a>
            </button>
          </li>
          <li className="float-right">
            <button>
              <a
                className="font-semibold lg:text-md block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
                href="tel:678-235-4052"
              >
                Phone
              </a>
            </button>
          </li>
          <li className="float-right">
            <button>
              <a
                className="font-semibold lg:text-md block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
                href="mailto:bobbyiii@outlook.com"
              >
                Email
              </a>
            </button>
          </li>
          <a href="/">
            <img
              src="HyperlapseW.png"
              alt="Image"
              className="w-[50px] h-auto float-left"
            />
          </a>
        </ul>
      ) : (
        <ul className="hidden md:block list-none m-0 p-0 overflow-hidden">
          <li className="float-right">
            <button onClick={handleSocialClick}>
              <p
                className="font-semibold lg:text-md block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
                //href="https://www.instagram.com/hyprlpse.vision/"
              >
                Social
              </p>
            </button>
          </li>
          <li className="float-right">
            <button>
              <a
                className="font-semibold lg:text-md block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
                href="/work"
              >
                Work
              </a>
            </button>
          </li>
          <li className="float-right">
            <button>
              <a
                className="font-semibold lg:text-md block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
                href="/about"
              >
                About Me
              </a>
            </button>
          </li>
          <li className="float-right">
            <button>
              <a
                className="font-semibold lg:text-md block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px]"
                href="/"
              >
                Home
              </a>
            </button>
          </li>
          <a href="/">
            <img
              src="HyperlapseW.png"
              alt="Image"
              className="w-[50px] h-auto float-left"
            />
          </a>
        </ul>
      )}
    </div>
  );
};
export default Navbar;
