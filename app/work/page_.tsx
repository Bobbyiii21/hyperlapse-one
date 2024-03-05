import React from "react";

export default function about() {
  return (
    <div className="mt-10 flex-col items-center justify-center gap-4 px-5 py-10 md:py-10">
      <div className="justify-center text-center">
        <h1 className="text-[50px] md:text-[90px] tracking-tight inline font-semibold">
          Featured Projects
        </h1>
      </div>
      <div style={{ height: "15px" }}></div>
      <div>
        <ul className="">
          <li>
            <div className="rounded-lg bg-neutral-800 h-[100px] p-4">
                <h2 className="text-[24px] leading-relaxed">
                    VEXCode Pro V5 Projects
                </h2>
            </div>
          </li>
          <div style={{ height: "25px" }}></div>
          <li>
            <div className="rounded-lg bg-neutral-800 h-[100px] p-4">
                <h2 className="text-[24px] leading-relaxed">
                    My Planter
                </h2>
            </div>
          </li>
          <div style={{ height: "25px" }}></div>
          <li>
            <div className="rounded-lg bg-neutral-800 h-[100px] p-4">
                <h2 className="text-[24px] leading-relaxed">
                    SmartGlass
                </h2>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
