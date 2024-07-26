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
      className={`fixed top-0 z-50 w-full bg-black p-[10px] text-white ${
        isOpen ? "h-[100vh]" : "h-auto"
      }`}
    >
      <button
        className="float-right mt-1 block px-2 md:hidden"
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
        <div className="absolute mt-10 flex w-full items-center justify-center md:hidden">
          {isSocialOpen ? (
            <ul className="list m-0 items-center overflow-hidden p-0 text-center">
              <li>
                <button>
                  <a
                    className="block rounded-[10px] px-[14px] py-[16px] text-center text-2xl text-white no-underline hover:bg-[#111]"
                    href="tel:678-235-4052"
                  >
                    Phone
                  </a>
                </button>
              </li>
              <button>
                <a
                  className="block rounded-[10px] px-[14px] py-[16px] text-center text-2xl text-white no-underline hover:bg-[#111]"
                  href="bobbyiii@outlook.com"
                >
                  Email
                </a>
              </button>
              <li>
                <button>
                  <a
                    className="block rounded-[10px] px-[14px] py-[16px] text-center text-2xl text-white no-underline hover:bg-[#111]"
                    href="https://www.linkedin.com/in/bobbyrstephens/"
                  >
                    LinkedIn
                  </a>
                </button>
              </li>
              {/* <li>
                <button>
                  <a
                    className="block rounded-[10px] px-[14px] py-[16px] text-center text-2xl text-white no-underline hover:bg-[#111]"
                    href="/linkedin"
                  >
                    LinkedIn
                  </a>
                </button>
              </li> */}
              <li></li>
              <li>
                <button onClick={handleSocialClick}>
                  <p className="block rounded-[10px] px-[14px] py-[16px] text-center text-2xl text-white no-underline hover:bg-[#111]">
                    Return
                  </p>
                </button>
              </li>
            </ul>
          ) : (
            // if social is not open
            <ul className="list m-0 items-center overflow-hidden p-0 text-center">
              <li>
                <button>
                  <a
                    className="block rounded-[10px] px-[14px] py-[16px] text-center text-2xl text-white no-underline hover:bg-[#111]"
                    href="/"
                  >
                    Home
                  </a>
                </button>
              </li>
              <li>
                <button>
                  <a
                    className="block rounded-[10px] px-[14px] py-[16px] text-center text-2xl text-white no-underline hover:bg-[#111]"
                    href="/about"
                  >
                    About Me
                  </a>
                </button>
              </li>
              <li>
                <button>
                  <a
                    className="block rounded-[10px] px-[14px] py-[16px] text-center text-2xl text-white no-underline hover:bg-[#111]"
                    href="/work"
                  >
                    Work
                  </a>
                </button>
              </li>

              <li>
                <button onClick={handleSocialClick}>
                  <a className="block rounded-[10px] px-[14px] py-[16px] text-center text-2xl text-white no-underline hover:bg-[#111]">
                    Social
                  </a>
                </button>
              </li>
            </ul>
          )}
        </div>
      )}
      {isSocialOpen ? (
        <ul className="m-0 hidden list-none overflow-hidden p-0 md:block">
          <li className="float-right">
            <button onClick={handleSocialClick}>
              <p className="lg:text-md block rounded-[10px] px-[14px] py-[16px] text-center font-semibold text-white no-underline hover:bg-[#111]">
                Return
              </p>
            </button>
          </li>
          <li className="float-right">
            <button>
              <a
                className="lg:text-md block rounded-[10px] px-[14px] py-[16px] text-center font-semibold text-white no-underline hover:bg-[#111]"
                href="https://www.linkedin.com/in/bobbyrstephens"
              >
                LinkedIn
              </a>
            </button>
          </li>
          <li className="float-right">
            <button>
              <a
                className="lg:text-md block rounded-[10px] px-[14px] py-[16px] text-center font-semibold text-white no-underline hover:bg-[#111]"
                href="https://www.instagram.com/hyprlpse.vision/"
              >
                Instagram
              </a>
            </button>
          </li>
          <li className="float-right">
            <button>
              <a
                className="lg:text-md block rounded-[10px] px-[14px] py-[16px] text-center font-semibold text-white no-underline hover:bg-[#111]"
                href="tel:678-235-4052"
              >
                Phone
              </a>
            </button>
          </li>
          <li className="float-right">
            <button>
              <a
                className="lg:text-md block rounded-[10px] px-[14px] py-[16px] text-center font-semibold text-white no-underline hover:bg-[#111]"
                href="bobbyiii@outlook.com"
              >
                Email
              </a>
            </button>
          </li>
          <a href="/">
            <img
              src="HyperlapseW.png"
              alt="Image"
              className="float-left h-auto w-[50px]"
            />
          </a>
        </ul>
      ) : (
        <ul className="m-0 hidden list-none overflow-hidden p-0 md:block">
          <li className="float-right">
            <button onClick={handleSocialClick}>
              <p
                className="lg:text-md block rounded-[10px] px-[14px] py-[16px] text-center font-semibold text-white no-underline hover:bg-[#111]"
                //href="https://www.instagram.com/hyprlpse.vision/"
              >
                Social
              </p>
            </button>
          </li>
          <li className="float-right">
            <button>
              <a
                className="lg:text-md block rounded-[10px] px-[14px] py-[16px] text-center font-semibold text-white no-underline hover:bg-[#111]"
                href="/work"
              >
                Work
              </a>
            </button>
          </li>
          <li className="float-right">
            <button>
              <a
                className="lg:text-md block rounded-[10px] px-[14px] py-[16px] text-center font-semibold text-white no-underline hover:bg-[#111]"
                href="/about"
              >
                About Me
              </a>
            </button>
          </li>
          <li className="float-right">
            <button>
              <a
                className="lg:text-md block rounded-[10px] px-[14px] py-[16px] text-center font-semibold text-white no-underline hover:bg-[#111]"
                href="/"
              >
                Home
              </a>
            </button>
          </li>
          <a href="/">
            <img
              src="/HyperlapseW.png"
              alt="Image"
              className="float-left h-auto w-[50px]"
            />
          </a>
        </ul>
      )}
    </div>
  );
};
export default Navbar;
