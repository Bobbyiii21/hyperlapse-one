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
    <section className="flex flex-col items-center justify-center">
  <div className="mt-20">
    <h1 className={title({size:'lg'})}>The </h1>
    <h1 className={title({ size:'lg'})}>Photographer</h1>
    <div style={{height: '15px'}}></div> {/* Adjust the height as needed */}
    <h1 className={title({size:'lg'})}>The </h1>
    <h1 className={title({ size:'lg'})}>Programmer</h1>
    <div style={{height: '15px'}}></div> {/* Adjust the height as needed */}
    <h1 className={title({size:'lg'})}>The </h1>
    <h1 className={title({ size:'lg'})}>Expert</h1>
    <div style={{height: '15px'}}></div> {/* Adjust the height as needed */}
    <h1 className={title({size:'lg'})}>The </h1>
    <h1 className={title({color: 'foreground', size:'lg'})}>Hyperlapse</h1>
    <div style={{height: '15px'}}></div> {/* Adjust the height as needed */}
    <p className={subtitle()}>Experience the Hyperlapse.</p>
    <p className={subtitle()}>Website coming soon!</p>
    </div>
</section>
  );
}
