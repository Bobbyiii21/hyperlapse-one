"use client"
import React from "react";
import AccordionItem from "./Accordion";

export default function ShortKey() {
  return (
    <div className="mt-5 flex-col items-center justify-center gap-4 px-5 py-10 md:py-10">
      <div className="lg:mx-52 justify-center text-center">
        <h1 className="text-[50px] md:text-[90px] tracking-tight inline font-semibold">
          ShortKey
        </h1>
        <div className="rounded-lg p-4">
          <h2 className="text-lg md:text-2xl leading-relaxed">
            ShortKey is an innovative Python application designed to help users learn and master keyboard shortcuts through real-time monitoring and feedback. The application intercepts keyboard input while allowing normal keyboard usage, providing an interactive learning experience directly in the terminal.
          </h2>
        </div>

        <div style={{ height: "15px" }}></div>
        <h1 className="text-[35px] md:text-[50px] tracking-tight inline font-semibold">
          Project Development
        </h1>
        <div style={{ height: "15px" }}></div>
        
        <AccordionItem
          title="Discovery and Initial Concept"
          subtitle="Project Inception"
        >
          <ul>
            <li>Concept emerged from observing desktop navigation inefficiencies</li>
            <div style={{ height: "15px" }}></div>
            <li>Focused on creating a real-time learning device</li>
            <div style={{ height: "15px" }}></div>
            <li>Originally planned as a hardware device using Raspberry Pi</li>
            <div style={{ height: "15px" }}></div>
            <li>Evolved into a software-based solution for better practicality</li>
          </ul>
        </AccordionItem>

        <div style={{ height: "15px" }}></div>
        <AccordionItem
          title="Technical Implementation"
          subtitle="Core Components"
        >
          <ul>
            <li>Python-based application using evdev library</li>
            <div style={{ height: "15px" }}></div>
            <li>Real-time keyboard input monitoring</li>
            <div style={{ height: "15px" }}></div>
            <li>JSON-based shortcut configuration system</li>
            <div style={{ height: "15px" }}></div>
            <li>Browser mode with layer system (Ctrl+Win+Alt)</li>
            <div style={{ height: "15px" }}></div>
            <li>Terminal-based interface</li>
          </ul>
        </AccordionItem>

        <div style={{ height: "15px" }}></div>
        <AccordionItem
          title="Key Features"
          subtitle="Functionality"
        >
          <ul>
            <li>Real-time keyboard input interception</li>
            <div style={{ height: "15px" }}></div>
            <li>Configurable shortcuts through JSON</li>
            <div style={{ height: "15px" }}></div>
            <li>Special browser control mode</li>
            <div style={{ height: "15px" }}></div>
            <li>Real-time shortcut prediction and suggestions</li>
            <div style={{ height: "15px" }}></div>
            <li>Terminal-based interface</li>
          </ul>
        </AccordionItem>

        <div style={{ height: "15px" }}></div>
        <AccordionItem
          title="Technical Skills Gained"
          subtitle="Learning Outcomes"
        >
          <ul>
            <li>System-level programming with Python</li>
            <div style={{ height: "15px" }}></div>
            <li>SSH protocol implementation</li>
            <div style={{ height: "15px" }}></div>
            <li>Efficient data structures for performance optimization</li>
            <div style={{ height: "15px" }}></div>
            <li>Input device handling and event processing</li>
            <div style={{ height: "15px" }}></div>
            <li>Modular software design</li>
            <div style={{ height: "15px" }}></div>
            <li>HID signal processing</li>
          </ul>
        </AccordionItem>

        <div style={{ height: "15px" }}></div>
        <h1 className="text-[35px] md:text-[50px] tracking-tight inline font-semibold">
          Images
        </h1>
        <div style={{ height: "15px" }}></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/shortkey1.png"
              alt="ShortKey Screenshot 1"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="/shortkey2.png"
              alt="ShortKey Screenshot 2"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div style={{ height: "15px" }}></div>
        <a href="https://github.com/Bobbyiii21/Shortkey-Linux">
                  <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                    View Page →
                  </button>
                </a>
      </div>
    </div>
  );
}
