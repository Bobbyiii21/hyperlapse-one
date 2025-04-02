import React from "react";
import AccordionItem from "./Accordion"

export default function about() {
  return (
    <div className="mt-5 flex-col items-center justify-center gap-4 px-5 py-10 md:py-10">
      <div className="lg:mx-52 justify-center text-center">
        <h1 className="text-[50px] md:text-[90px] tracking-tight inline font-semibold">
          About Me
        </h1>

        <div className="rounded-lg p-4 ">
          {/* <h2 className="text-lg md:text-2xl leading-relaxed">
            My name is Bobby Stephens, and I am a passionate photographer and
            programmer. Since 2020, I have been studying programming languages
            such as C++, Python, Java, and JavaScript. On the side, I have
            explored multiple typesetting languages, such as LaTeX and Markdown.
            Additionally, I have been studying photography and videography since
            2022, primarily capturing sports events and portraits.
          </h2> */}
          <h2 className="text-lg md:text-2xl leading-relaxed">
            Thank you for visiting my website! My name is Bobby Stephens, I'm from Covington, Georgia, and I am a
            first-year student at Georgia Tech, majoring in Computer Engineering with a
            concetration in Distributed Systems and Software design, as well as Systems
            and Architecture. Currently, I am interested in pursuing a career in
            software engineering, with an emphasis on embedded systems and robotics. During
            my time at Georgia Institute of Technology, I have been involved in various organizations, including
            the Georgia Tech Motorcycle Club, where I have aided in the expansion of the organization
            as well as WebDev @ GT, where I have had the privlege as serving as a Project Lead
            for the BlackMarket project, a platform for individuals and companies can sell and
            manage their products. In this position, I have learned valuable skills in project
            management, team collaboration, and time management. Beginning in the Summer of 2025,
            I will be interning at Amazon as a Software Engineer, where I plan to apply my skills and
            knowledge to real-world projects and gain valuable experience in the tech industry.

          </h2>
          <div style={{ height: "15px" }}></div>
          <h2 className="text-lg md:text-2xl leading-relaxed">
            In my free time, I enjoy exploring new technologies, riding my motorcycle, working on personal projects, and
            spending time with friends and family. I am always eager to learn and grow, both personally
            and professionally.
          </h2>
        </div>
        <div style={{ height: "15px" }}></div>
        <h2 className="text-lg md:text-2xl leading-relaxed">
          The purpose of this website is to showcase and maintain a digital portfolio of my work and
          accomplishments. Inspired by a great friend of mine, I decided to create this website using
          Next.js and Tailwind CSS, which has allowed me to learn new skills and technologies.
        </h2>
        <div style={{ height: "15px" }}></div>
        <h1 className="text-[35px] md:text-[50px] tracking-tight inline font-semibold">
          My 5-Year Plan
        </h1>
        <div style={{ height: "15px" }}></div>
        <h2 className="text-lg md:text-2xl leading-relaxed">
          In the next five years, and If all goes well, I plan to graduate from Georgia Tech with a Master's degree in Computer
          Engineering, with having completed multiple internships. If I feel the need to, I will continue my education, pursuing a
          Mastors degree in Computer Science. With my degree, I plan to obtain a full-time position at a reputable company, such as
          Amazon or Google, as a Software or Embedded Systems Engineer, where I can work with a team of talented individuals focused on
          making a positive impact on people's lives.
        </h2>
        <div style={{ height: "15px" }}></div>
        <h1 className="text-[35px] md:text-[50px] tracking-tight inline font-semibold">
          Achievement Timeline
        </h1>
        <div style={{ height: "15px" }}></div>
        <div className="text-left">
          <AccordionItem
            title="High School: Newton College and Career Academy"
            subtitle="2020 - 2024"
          >
            <div className="w-full h-[1px] bg-neutral-800 my-4 rounded-xl"></div>

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
                Recognized in the Collegeboard National African
                American Recognition Program
              </li>
              <div style={{ height: "15px" }}></div>
              <li>2023 Georgia Governor&apos;s Honors Program Finalist</li>
              <div style={{ height: "15px" }}></div>
              <li>2023 University of Georgia Certificate of Merit Recipient</li>
              <div style={{ height: "15px" }}></div>
              <li>
                2023-2024 Newton County School System CTAE Student of the Year -
                Business/Information Technology
              </li>
              <div style={{ height: "15px" }}></div>
              <li>
                2021, 2022, 2023, 2024 VEX Robotics World Championship Qualifier
              </li>
              <div style={{ height: "15px" }}></div>
            </ul>
          </AccordionItem>
          <div style={{ height: "15px" }}></div>
          <AccordionItem
            title="College: Georgia Institute of Technology"
            subtitle="2024 - 2028">
            <div className="w-full h-[1px] bg-neutral-800 my-4 rounded-xl"></div>
            <ul>
              <li>
                Currently pursuing a Bachelor of Science in Computer Engineering
              </li>
            </ul>

          </AccordionItem>
        </div>
        <div style={{ height: "15px" }}></div>
        <h2 className="text-lg md:text-2xl leading-relaxed">
          To continue exploring my page, please navigate to the "Work" section, where you can find some of my
          feature projects, as well as my resume. If you would like to get in touch with me, please visit the "Contact" section.
        </h2>


        {/* <h1 className="text-3xl md:text-[54px] tracking-tight inline p-[20px] text-center font-semibold">
          Accomplishments: High School
        </h1>
        <div style={{ height: "15px" }}></div> */}
        {/* <div className="rounded-lg p-4 ">
          <h2 className="text-lg md:text-2xl leading-relaxed flex justify-center">
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
                Recognized in the Collegeboard National African
                American Recognition Program
              </li>
              <div style={{ height: "15px" }}></div>
              <li>2023 Georgia Governor&apos;s Honors Program Finalist</li>
              <div style={{ height: "15px" }}></div>
              <li>2023 University of Georgia Certificate of Merit Recipient</li>
              <div style={{ height: "15px" }}></div>
              <li>
                2023-2024 Newton County School System CTAE Student of the Year -
                Business/Information Technology
              </li>
                <div style={{ height: "15px" }}></div>
              <li>
                2021, 2022, 2023, 2024 VEX Robotics World Championship Qualifier
              </li>
              <div style={{ height: "15px" }}></div>
            </ul>
          </h2>
        </div> */}
      </div>
    </div>
  );
}
