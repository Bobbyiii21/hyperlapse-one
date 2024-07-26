import React from "react";
import "./page.css";
let VexCode_Win_Vid2 = 'https://firebasestorage.googleapis.com/v0/b/hyperlapseone.appspot.com/o/Video%202.mp4?alt=media&token=216f0970-cdd4-4d77-b981-4df67ef71fad'


export default function Home() {
  return (
    <section className="flex flex-col items-center justify-top md:justify-center h-screen">
      <div className="mt-20">
        <h2 className="text-3xl font-semibold leading-relaxed">
          Lesson 2: VEXCode Pro Basics
        </h2>
      </div>
      <div style={{ height: "25px" }} />
      <video src={VexCode_Win_Vid2} controls className="z-0 px-12" />
      <div style={{ height: "25px" }} />
    </section>
  );
}
