import React from "react";
import { Button } from "@nextui-org/react";

const Footer: React.FC = () => {
  return (
    <footer className="text-lg absolute inset-x-0 transform text-white text-center">
      <p>©{new Date().getFullYear()} Hyperlapse</p>
      <p>Designed by Bobby Stephens in Atlanta, Georgia</p>
    </footer>
    );
};

export default Footer;
