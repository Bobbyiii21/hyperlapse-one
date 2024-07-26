"use client";
import AccordionItem from "./Accordion";
export default function course() {
  const sampleContent = () => {
    return (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit.
        </p>
      </div>
    );
  };
  return (
    <div className="mt-5 flex-col items-center justify-center gap-4 px-5 py-10 md:py-10">
      <div className="justify-center text-center">
        <h1 className="inline text-[50px] font-semibold tracking-tight md:text-[90px]">
          VEX Video Tutorials
        </h1>
        <h2 className="text-[50px] font-semibold tracking-tight md:text-5xl">
          VEXCode Pro V5
        </h2>
      </div>
      <div style={{ height: "25px" }}></div>
      <div className="lg:mx-52 ">
        <AccordionItem
          title="Lesson 1: Installation"
          subtitle="Installation of VSCode"
        >
          <div>
            <p>
              This guide will walk you through the installation of Visual Studio
              Code and the VEXCode Pro V5 extension.
            </p>
          </div>
          <div style={{ height: "25px" }}></div>
          <div className="flex justify-around items-center">
            <a href="/course/vexcode/windows/u1">
            // TODO: 'Remove other operating systems and Flex Width windows button'
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                Windows →
              </button>
            </a>
            <a href="/course/vexcode/mac/u1">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                MacOS →
              </button>
            </a>
            <a href="/course/vexcode/debian/u1">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                Debian →
              </button>
            </a>
          </div>
        </AccordionItem>
        <div style={{ height: "25px" }}></div>
        <AccordionItem
          title="Lesson 2: VEXCode Pro Basics"
          subtitle="the creation of projects, devices, and functions "
        >
          <div>
            <p>
              This guide will walk you through the installation of Visual Studio
              Code and the VEXCode Pro V5 extension.
            </p>
          </div>
          <div style={{ height: "25px" }}></div>
          <div className="flex justify-around items-center">
            <a href="/course/vexcode/windows/u2">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                Windows →
              </button>
            </a>
            <a href="/course/vexcode/mac/u2">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                MacOS →
              </button>
            </a>
            <a href="/course/vexcode/debian/u2">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                Debian →
              </button>
            </a>
          </div>
        </AccordionItem>
        <div style={{ height: "25px" }}></div>
        <AccordionItem
          title="Lesson 3: Introduction to JAR Template"
          subtitle="Intro to JAR Template & Guided Walkthrough"
        >
          <div>
            <p>
              This video will guide you through the creation of a JAR template
              project in VEXCode Pro V5. I will teach you to install it from
              GitHub, and how to use it to create an autonomous program.
            </p>
            <div> </div>
            <div> </div>
            <a href="https://github.com/JacksonAreaRobotics/JAR-Template">
              <p className="font-semibold">GitHub Link</p>
            </a>
          </div>
          <div style={{ height: "25px" }}></div>
          <div className="flex justify-around items-center">
            <a href="/course/vexcode/windows/u3">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                Windows →
              </button>
            </a>
            <a href="/course/vexcode/mac/u3">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                MacOS →
              </button>
            </a>
            <a href="/course/vexcode/debian/u3">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                Debian →
              </button>
            </a>
          </div>
        </AccordionItem>
        <div style={{ height: "25px" }}></div>
        <AccordionItem
          title="Lesson 4: Introduction to Version Control"
          subtitle="Introduction to Version Control & Guided Walkthrough of Git and GitHub"
        >
          <div>
            <p>
              As a final lesson, I will introduce you to version control and how
              to initialize Git and use GitHub to store and share your code.
              This is a crucial skill for any programmer, and I highly recommend
              you learn it to create an organized system of incremental changes
              for your team's notebook.
            </p>
          </div>
          <div style={{ height: "25px" }}></div>
          <div className="flex justify-around items-center">
            <a href="/course/vexcode/windows/u4">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                Windows →
              </button>
            </a>
            <a href="/course/vexcode/mac/u4">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                MacOS →
              </button>
            </a>
            <a href="/course/vexcode/debian/u4">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                Debian →
              </button>
            </a>
          </div>
        </AccordionItem>
        <div style={{ height: "25px" }}></div>
      </div>
      <div className="justify-center text-center">
        <h2 className="text-[50px] font-semibold tracking-tight md:text-5xl">
          PROS
        </h2>
      </div>
      <div style={{ height: "25px" }}></div>
      <div className="lg:mx-52 ">
        <AccordionItem
          title="Lesson 1: Installation"
          subtitle="Guided Walkthrough for installing the PROS Kernel and CLI on your system"
        >
            <div>
                <p>
                This guide will walk you through the installation of the PROS
                kernel and CLI on your system. This is the first step to
                programming in PROS, and it is a very tedious process depending on your operating system.
                </p>
                <p>{" \n"}</p>
                <h1 className="font-semibold">Note: Vision Sensors are easier to set up using VEXCode Pro</h1>
            </div>
          <div style={{ height: "25px" }}></div>
          <div className="flex justify-around items-center">
            <a href="/course/pros/windows/u1">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                Windows →
              </button>
            </a>
            <a href="/course/pros/mac/u1">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                MacOS →
              </button>
            </a>
            <a href="/course/pros/debian/u1">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                Debian →
              </button>
            </a>
          </div>
        </AccordionItem>
        <div style={{ height: "25px" }}></div>
        <AccordionItem
          title="Lesson 2: PROS Basics"
          subtitle="Project creation, and uploading to V5 brains"
        >
            <div>
                <p>
                This video will show you the essentials of PROS, including project creation, setting up motors and controllers, and uploading to the V5 brain.
                </p>
            </div>
          <div style={{ height: "25px" }}></div>
          <div className="flex justify-around items-center">
            <a href="/course/pros/windows/u2">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                Windows →
              </button>
            </a>
            <a href="/course/pros/mac/u2">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                MacOS →
              </button>
            </a>
            <a href="/course/pros/debian/u2">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                Debian →
              </button>
            </a>
          </div>
        </AccordionItem>
        <div style={{ height: "25px" }}></div>
        <AccordionItem
          title="Lesson 3: Introduction to JAR Template"
          subtitle="Intro to EZ Template & Guided Walkthrough"
        >
          <div>
            <p>
                This video will guide you through the creation of a EZ Template
                project in PROS. I will teach you to install it from GitHub, and
                how to use it to create an autonomous program.
            </p>
          </div>
          <div style={{ height: "25px" }}></div>
          <div className="flex justify-around items-center">
            <a href="/course/pros/windows/u3">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                Windows →
              </button>
            </a>
            <a href="/course/pros/mac/u3">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                MacOS →
              </button>
            </a>
            <a href="/course/pros/debian/u3">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                Debian →
              </button>
            </a>
          </div>
        </AccordionItem>
        <div style={{ height: "25px" }}></div>
        <AccordionItem
          title="Lesson 4: Introduction to Version Control"
          subtitle="Introduction to Version Control & Guided Walkthrough of Git and GitHub"
        >
            <div>
            <p>
              As a final lesson, I will introduce you to version control and how
              to initialize Git and use GitHub to store and share your code.
              This is a crucial skill for any programmer, and I highly recommend
              you learn it to create an organized system of incremental changes
              for your team's notebook.
            </p>
          </div>
          <div style={{ height: "25px" }}></div>
          <div className="flex justify-around items-center">
            <a href="/course/pros/windows/u4">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                Windows →
              </button>
            </a>
            <a href="/course/pros/mac/u4">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                MacOS →
              </button>
            </a>
            <a href="/course/pros/debian/u4">
              <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                Debian →
              </button>
            </a>
          </div>
        </AccordionItem>
        <div style={{ height: "25px" }}></div>
      </div>
    </div>
  );
}
