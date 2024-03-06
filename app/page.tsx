import React from "react";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="mt-5 flex-col items-center justify-center gap-4 px-5 py-10">
      <div className="justify-center text-center">
        <h1 className="inline text-[45px] font-semibold tracking-tight md:text-[90px]">
          The Photographer{" "}
        </h1>
        <div style={{ height: "15px" }}></div>{" "}
        <h1 className="inline text-[45px] font-semibold tracking-tight md:text-[90px]">
          The Programmer
        </h1>
        <div style={{ height: "15px" }}></div>{" "}
        {/* <h1 className="inline text-[45px] font-semibold tracking-tight md:text-[90px]">
          The Creator
        </h1>
        <div style={{ height: "15px" }}></div>{" "} */}
        <div>
          <h1 className="inline text-[45px] font-semibold tracking-tight md:text-[90px]">
            The{" "}
          </h1>
          <h1 className="inline bg-gradient-to-tr from-neutral-500 to-neutral-700 bg-clip-text text-[45px] font-semibold tracking-tight text-transparent md:text-[90px]">
            Hyperlapse
          </h1>
        </div>
        {/* <div style={{ height: "55px" }}></div> */}
        {/* <div>
          <ul className="flex justify-center items-center">
          <li>
            <a className="block text-white text-center px-[14px] py-[16px] no-underline hover:bg-[#111] rounded-[10px] text-6xl" href="about">
              →
            </a>
          </li>
          </ul>
        </div> */} 
        {/* Save for later */}
      </div>
    </div>
  );
}
