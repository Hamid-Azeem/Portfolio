import React from "react";
import about from "../Assets/About me (1).gif";

function About() {
    return (
        <section className="small-p-m pt-10 p-10 m-8  " id="about">
            <h1 className="text-4xl md:text-5xl text-center text-[#353535] font-bold mb-8">About me</h1>

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
                <div className="">
                    <img src={about} alt="About Me" className="w-full h-auto rounded-md " />
                </div>
                <div className="md:w-1/2 md:ml-10">
                    <p className="text-justify text-gray-500">
                        Hello! I'm <span className="text-[#dc143c] font-semibold">Hamid Azeem</span>, a passionate front-end developer with a knack for crafting clean and elegant user interfaces. With a solid foundation in ReactJS, HTML5, CSS (especially fond of Tailwind CSS), and JavaScript (ES6+), I love turning ideas into interactive, user-friendly experiences.
                    </p>
                    <button className="mt-6">
                        <a
                            href="/hamid_resume.pdf"
                            download="hamid_resume.pdf"
                            className="inline-block bg-[#dc143c] text-white text-[1rem] font-medium py-2 px-6 rounded-lg border-2 border-[#dc143c] transition-all duration-300 hover:bg-transparent hover:text-[#dc143c]"
                        >
                            View Resume
                        </a>
                    </button>

                </div>
            </div>
        </section>
    );
}

export default About;

