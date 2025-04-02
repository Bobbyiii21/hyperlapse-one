import React from "react";
import "./page.css";
let VexCode_Win_Vid4 = "https://firebasestorage.googleapis.com/v0/b/hyperlapseone.appspot.com/o/Video%204.mp4?alt=media&token=6c4d1d99-a5ed-4abf-a230-8f963fd09e31";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="mt-20">
        <h2 className="text-3xl font-semibold leading-relaxed">
          Lesson 4: Introduction to Version Control
        </h2>
      </div>
      <div style={{ height: "25px" }} />
      <video controls src={VexCode_Win_Vid4} className="z-0 px-12 " />
      <div style={{ height: "25px" }} />
    </section>
  );
}
