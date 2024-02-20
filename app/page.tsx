import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
// import { title } from "process";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import { title, subtitle } from "@/components/primitives";
import './page.css';
import SplashScreen from "./splashScreen";

export default function Home() {
  return (
    // <Navbar>
    //   <NavbarBrand>
    //     {/* <AcmeLogo /> */}
    //     <p className={title({color : "violet"})}>Hyperlapse</p>
    //   </NavbarBrand>
    //   <NavbarContent justify="end">
    //     <NavbarItem>
    //       <Link color="foreground" href="#">
    //         Features
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem isActive>
    //       <Link href="#" aria-current="page">
    //         Customers
    //       </Link>
    //     </NavbarItem>
    //     <NavbarItem>
    //       <Link color="foreground" href="#">
    //         Integrations
    //       </Link>
    //     </NavbarItem>
    //   </NavbarContent>
    // </Navbar>
    // <SplashScreen/>
    <div>
      <h1>Hyperlapse</h1>
      <p>Experience the HyperLapse</p>
    </div>
  );
}