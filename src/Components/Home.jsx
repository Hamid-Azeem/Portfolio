import React from "react";
import { TypeAnimation } from 'react-type-animation';
import pic from "../Assets/myPicture.png"
import hi from "../Assets/hello.gif"

const Home = () => {
    return (
        <section className=" background-img flex justify-between text-black min-h-[500px] small h-[100vh] flex-wrap" id="home">
            <div className="small-p-m m-w-[1300px] pb-[80px] p-10 mx-8 w-full md:w-auto">
                <div className="mt-[8rem]">

                    <div className="text-[14px] text-gray-500 mb-2 font-bold py-3">Welcome to My Digital Playground</div>
                    <div className=" flex gap-3 items-center text-[2.5rem] md:text-[35px] font-bold mt-2">Hey  <span><img className="h-8 flex items-center justify-center w-8" src={hi} alt="Hello" /></span> , I'm</div>
                    <div className="text-[35px] md:text-[50px] font-bold">HAMID AZEEM</div>
                    <TypeAnimation
                        sequence={[
                            'Web Developer',
                            2000,
                            'Front-end Developer',
                            2000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '1.8rem', fontWeight: 'bold', display: 'inline-block', color: '#dc143c' }}
                        repeat={Infinity}
                    />

                </div>
                <a className="bg-[#dc143c] hover:text-[#dc143c] hover:bg-transparent inline-block text-white text-[1rem] py-3 px-8 mt-[20px] font-bold rounded-[30px] border-2 border-[#dc143c] transition-all duration-300 " href="#contact">Hire me</a>
            </div>
            <div className="mr-8 mt-12 w-full md:w-auto ">
                <img className="rounded-3xl picture bg-[#dc143c54] hidden hide-on-small lg:block" src={pic} alt="My_picture" />
            </div>
        </section>
    );
}

export default Home;


