import React from "react";

export default function projects() {
  return (
    <div className="mt-5 flex-col items-center justify-center gap-4 px-5 py-10 md:py-10">
      <div className="justify-center text-center">
        <h1 className="text-[50px] md:text-[90px] tracking-tight inline font-semibold">
          Featured Projects
        </h1>
      </div>
      <div style={{ height: "15px" }}></div>
      <div className="lg:mx-52 ">
        <ul className="">
          <li>
            <div className="rounded-lg bg-[#111] p-4 border-1 border-neutral-500">
              <h2 className="text-3xl leading-relaxed font-semibold">
                VEXCode Pro V5 Projects
              </h2>
              <div style={{ height: "15px" }}></div>
              <h2 className="text-lg md:text-2xl leading-relaxed">
                Throughout my time in VEX Robotics, I have created
                various projects using VEXCode Pro V5 and PROS. These projects
                include robot builds and their respective autonomous and driver
                control code. My most recent project includes code for the
                2023-2024 VEX Robotics Competition Game, Over Under.
              </h2>
              <div className="flex justify-end">
              <a href="https://github.com/Bobbyiii21/LEBRON_JAMES">
                  <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                    View on GitHub →
                  </button>
                </a>{" "}
              </div>
              {/* <div style={{ height: "15px" }}></div> */}
            </div>
          </li>
          <div style={{ height: "25px" }}></div>
          <li>
            <div className="rounded-lg bg-[#111] p-4 border-1 border-neutral-500">
              <h2 className="text-3xl leading-relaxed font-semibold">
                MyPlanter
              </h2>
              <div style={{ height: "15px" }}></div>
              <h2 className="text-lg md:text-2xl leading-relaxed">
                MyPlanter is a project that I, along with a team of two others,
                designed, built, and programmed for the GHP 60 Engineering Expo.
                The purpose of the project was to create a flower pot that could
                self-water, as well as monitor the soil moisture, light levels,
                and temperature. The project was built using a custom 3D printed
                flower pot and an Arduino Uno Wi-Fi Rev2. The software was
                written in C++ and Python. The companion app was written in
                React Native.
              </h2>
              <div className="flex justify-end">
                <a href="https://github.com/Bobbyiii21/MyPlanter-GHP">
                  <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                    View on GitHub →
                  </button>
                </a>{" "}
              </div>
            </div>
          </li>
          <div style={{ height: "25px" }}></div>
          <li>
            <div className="rounded-lg bg-[#111] p-4 border-1 border-neutral-500">
              <h2 className="text-3xl leading-relaxed font-semibold">
                SmartGlass
              </h2>
              <div style={{ height: "15px" }}></div>
              <h2 className="text-lg md:text-2xl leading-relaxed">
                SmartGlass is a device that I designed, built, and programmed
                for science and engineering fairs during the 2023-2024 school
                year. The device presents a novel and low-cost solution to
                assist people with Dementia. The device is a head-mounted system
                equipped with Raspberry Pi Zero 2 W, Raspberry Pi Camera 3, and
                three tactile buttons. The device can detect objects in diverse
                environments using computer vision and QR (Quick Response)
                codes. Based on the user&apos;s input, the device can relay
                information to the user audibly through bone conduction
                technology.
              </h2>
              <div className="flex justify-end">
                <a href="Log_Book.pdf">
                  <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                    View the Log Book →
                  </button>
                </a>
              </div>
            </div>
          </li>
          <div style={{ height: "15px" }}></div>
          <h1 className="text-3xl md:text-[54px] tracking-tight p-[20px] text-center font-semibold">
          In Progress...
        </h1>
          <div style={{ height: "15px" }}></div>
          <li>
            <div className="rounded-lg bg-[#111] p-4 border-1 border-neutral-500">
              <h2 className="text-3xl leading-relaxed font-semibold">
                Photography
              </h2>
              <div style={{ height: "15px" }}></div>
              <h2 className="text-lg md:text-2xl leading-relaxed">
                My Featured works are currently on display on my Instagram page @hyprlpse.vision. I am currently working on a page to display more of my work, so stay tuned!
              </h2>
              <div className="flex justify-end">
                <a href="https://www.instagram.com/hyprlpse.vision/">
                  <button className="rounded-lg text-lg bg-neutral-700 p-3 hover:bg-black hover:border-neutral-500 border-1">
                    View on Instagram →
                  </button>
                </a>
              </div>
            </div>
          </li>
          <div style={{ height: "25px" }}></div>
          <li>
            <div className="rounded-lg bg-[#111] p-4 border-1 border-neutral-500">
              <h2 className="text-3xl leading-relaxed font-semibold">
                VEXCode Pro V5 &amp; PROS Video Tutorials
              </h2>
              <div style={{ height: "15px" }}></div>
              <h2 className="text-lg md:text-2xl leading-relaxed">Currently Reording 🔴</h2>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
