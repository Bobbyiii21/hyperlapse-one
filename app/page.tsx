import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
// import { title } from "process";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import { title, subtitle } from "@/components/primitives";


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
    <div>
      <h1 className={title({color: "violet"})}>HyperLapse</h1>
      <p className={subtitle()}>Experience the HyperLapse</p>
    </div>
  );
}