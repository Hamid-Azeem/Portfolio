import React, { useEffect } from "react";
import cards from "../cards";
import AOS from "aos";
import "aos/dist/aos.css"; 

function SkillCard() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="max-w-[1300px] mx-auto my-0 " id="skills">
            <h1 className="text-4xl md:text-5xl text-center text-[#353535] pb-5 font-bold mb-[4rem]" data-aos="fade-up">My Skills</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mx-4 md:mx-auto md:px-[5rem] lg:px-[10rem] xl:px-[15rem]">
                {cards.map((card) => (
                    <div key={card.id} className="flex justify-center" data-aos="fade-up" data-aos-delay={card.id * 100}>
                        <div className="transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md border border-gray-200 w-[166px] h-[166px]">
                            <div className="mb-4 w-24 h-24">
                                <img src={card.img} alt={card.name} className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <p className="text-xl text-gray-500 font-bold text-center">{card.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SkillCard;
