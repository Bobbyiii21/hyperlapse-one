import React from "react";
import "./page.css";
let VexCode_Win_Vid3 =  "https://firebasestorage.googleapis.com/v0/b/hyperlapseone.appspot.com/o/Video%203.mp4?alt=media&token=d9b22131-5616-4fcf-a2c7-2b62aa96efeb";


export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="mt-20">
        <h2 className="text-3xl font-semibold leading-relaxed">
          Lesson 3: Introduction to JAR Template
        </h2>
      </div>
      <div style={{ height: "25px" }} />
      <video src={VexCode_Win_Vid3} className="z-0 px-12 " />
      <div style={{ height: "25px" }} />
    </section>
  );
}
