import React from "react";

export default function about() {
  return (
    <div className="mt-10 flex-col items-center justify-center gap-4 px-5 py-10 md:py-10">
      <div className="justify-center text-center">
        <h1 className="text-[50px] md:text-[90px] tracking-tight inline font-semibold">
          About Me
        </h1>
        <div style={{ height: "15px" }}></div>
        <div className="rounded-lg p-4 ">
          <h2 className="text-[24px] leading-relaxed">
            Hi, My name is Bobby Stephens and I am a photographer and
            programmer. Since 2020, I have been studying programming languages
            such as C++, Python, Java, and JavaScript. On the side, I have
            explored multiple typesetting languages, such as LaTeX and Markdown.
            Additionally, I have been studying photography and videography since
            2022, capturing sports events and portraits.
          </h2>
          <div style={{ height: "15px" }}></div>
          <h2 className="text-[24px] leading-relaxed">
            Aside from my hobbies, I am a student at Newton College and Career
            Academy in Covington, Georgia. There, I am involved in organizations
            such as the Technology Student Association, VEX Robotics, and Future
            Business Leaders of America. Additionally, I volunteer with the STEM
            Extension Project, a program that provides STEM Education in the
            form of small workshops to elementary and middle school students. I
            also volunteer with the Newton County Drug Free Coalition, where I
            help with the annual Kick The Habit event which promotes a healthy
            lifestyle.
          </h2>
        </div>
        <h1 className="text-[30px] md:text-[50px] tracking-tight inline font-semibold">
          Accomplishments: High School
        </h1>
        <div style={{ height: "15px" }}></div>
        <div className="rounded-lg p-4 ">
          <h2 className="text-[24px] leading-relaxed flex justify-center">
            <ul>
              <li>
                First place in the 2023 Georgia TSA State Robotics Competition
              </li>
              <div style={{ height: "15px" }}></div>

              <li>
                National Qualifier in the 2023 Georgia TSA State On-Demand Video
                Competition
              </li>
              <div style={{ height: "15px" }}></div>

              <li>
                Nationally recognized in the Collegeboard National African
                American Recognition Program
              </li>
              <div style={{ height: "15px" }}></div>

              <li>2023 Georgia Governor's Honors Program Finalist</li>
              <div style={{ height: "15px" }}></div>
              <li>2023 University of Georgia Certificate of Merit Recipient</li>
              <div style={{ height: "15px" }}></div>
              <li>
                2023-2024 Newton County School System Career, Technical, and
                Agricultural Education Student of the Year -
                Business/Information Technology
              </li>
                <div style={{ height: "15px" }}></div>
              <li>
                2021, 2022, 2023, 2024 VEX Robotics World Championship Qualifier
              </li>
              <div style={{ height: "15px" }}></div>
            </ul>
          </h2>
        </div>
      </div>
    </div>
  );
}
