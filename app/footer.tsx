import React from "react";
import { Button } from "@nextui-org/react";

const Footer: React.FC = () => {
  return (
    <footer className="text-lg absolute inset-x-0 transform text-default-500 text-center mx-4">
      <p>©{new Date().getFullYear()} Hyperlapse</p>
      <p>Designed by Bobby R. Stephens III in Atlanta, Georgia</p>
      <img 
      src="/HyperlapseWFull.png"
      alt="Hyperlapse Logo"
      className="w-[200px] h-auto items-center justify-center mx-auto mt-4  opacity-35 "
      />
      <div style={{ height: "15px" }}></div>
    </footer>
    );
};

export default Footer;
