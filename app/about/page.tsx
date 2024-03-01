import React from "react";

export default function about() {
    return (
        <div className="mt-10 flex-col items-center justify-center gap-4 px-5 py-10 md:py-10">
            <div className="justify-center text-center">
                <h1 className="text-[50px] md:text-[50px] md:text-[90px] tracking-tight inline font-semibold">About Me</h1>
                <div style={{height: '15px'}}></div>
                <div className="rounded-lg p-4 ">
                    <h2 className="text-[24px] leading-relaxed">
                        Hi, My name is Bobby Stephens and I am a photographer and programmer. Since 2020, I have been studying
                        programming languages such as C++, Python, Java, and JavaScript. On the side, I have explored multiple
                        typesetting languages, such as LaTeX and Markdown. Additionally, I have been studying photography and
                        videography since 2022, capturing sports events and portraits.
                    </h2>
                </div>
            </div>
        </div>

    );
}
