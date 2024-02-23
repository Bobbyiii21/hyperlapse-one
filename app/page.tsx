import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import React from "react";
// import { title } from "process";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import { subtitle, title } from "@/components/primitives";
import "./page.css";

export default function Home() {
  return (
    <div className="page">
      <p className={title({ size: "lg", color: "foreground" })}>
        The Hyperlapse
      </p>
      {/* <h1 className={title({ size: "sm" })}>Coming Soon!</h1> */}
      <p className={subtitle()}>
        {/* We are working hard to bring you the best experience. Stay tuned! */}
      </p>
      
    </div>
  );
}
