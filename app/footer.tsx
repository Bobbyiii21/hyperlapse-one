import React from "react";
import { Button } from "@nextui-org/react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 transform text-white text-center py-3">
      <p>©{new Date().getFullYear()} Hyperlapse</p>
    </footer>
    );
};

export default Footer;
