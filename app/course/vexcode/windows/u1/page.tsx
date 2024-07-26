import "./page.css";
// import Video from "next-video";
let VexCode_Win_Vid1 = 'https://firebasestorage.googleapis.com/v0/b/hyperlapseone.appspot.com/o/Video%201.mp4?alt=media&token=c3832e45-a976-498d-b2f5-b4c4275fa077';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-top md:justify-center h-screen">
      <div className="mt-20">
        <h2 className="text-3xl font-semibold leading-relaxed">
          Lesson 1: Installation
        </h2>
      </div>
      <div style={{ height: "25px" }} />
      <video src={VexCode_Win_Vid1} controls className="z-0 px-12" />
      <div style={{ height: "25px" }} />
    </section>
  );
}