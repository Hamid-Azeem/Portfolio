// import React, { useState, useEffect } from "react";
// import { Turn as Hamburger } from 'hamburger-react';
// import { FaLinkedin } from "react-icons/fa";

// function Header() {
//     const [isOpen, setOpen] = useState(false);
//     const [isScrolled, setScrolled] = useState(false);

//     useEffect(() => {


//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;

//             if (currentScrollY > 50) {
//                 setScrolled(true);
//             } else {
//                 setScrolled(false);
//             }

//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <header
//             className={`small-p-m p-8 fixed w-full z-50 transition-all duration-300 transform ${isScrolled ? 'background-img py-4 ' : 'bg-transparent '
//                 } ${scrollDirection === 'down' ? '-translate-y-full py-4' : 'translate-y-0'}`}
//         >
//             <div className="flex justify-between items-center max-w-[1300px] mx-8">
//                 <div className="text-3xl font-bold text-black">
//                     <a href="#home">Portfo<span className="text-[#dc143c] ">lio.</span></a>
//                 </div>
//                 <ul className="hidden md:flex gap-6 font-semibold text-[18px] text-black">
//                     <li><a href="#home" className="menu-btn">Home</a></li>
//                     <li><a href="#about" className="menu-btn">About</a></li>
//                     <li><a href="#skills" className="menu-btn">Skills</a></li>
//                     <li><a href="#projects" className="menu-btn">Portfolio</a></li>
//                     <li><a href="#contact" className="menu-btn">Contact</a></li>
//                 </ul>
//                 <div className="text-[#0077b5] hide-on-small-screen ">
//                     <a href="https://www.linkedin.com/in/hamid-azeem-9b8751314/" target="_blank" rel="noreferrer" ><FaLinkedin size={25} /></a>
//                 </div>
//                 <div className="flex items-center text-black md:hidden">
//                     <Hamburger toggled={isOpen} toggle={setOpen} size={20} />

//                 </div>
//             </div>
//             {isOpen && (
//                 <div className="md:hidden small-p-m background-img text-black  absolute left-0 w-full">
//                     <ul className="flex flex-col justify-center items-center gap-4 font-bold text-xl">
//                         <li><a href="#home" className="menu-btn">Home</a></li>
//                         <li><a href="#about" className="menu-btn">About</a></li>
//                         <li><a href="#skills" className="menu-btn">Skills</a></li>
//                         <li><a href="#projects" className="menu-btn">Portfolio</a></li>
//                         <li><a href="#contact" className="menu-btn">Contact</a></li>
//                         <div className="text-[#0077b5] ">
//                             <a href="https://www.linkedin.com/in/hamid-azeem-9b8751314/" target="_blank" rel="noreferrer" ><FaLinkedin size={25} /></a>
//                         </div>
//                     </ul>
//                 </div>
//             )}
//         </header>
//     );
// }

// export default Header;


import React, { useState, useEffect } from "react";
import { Turn as Hamburger } from 'hamburger-react';
import { FaLinkedin } from "react-icons/fa";

function Header() {
    const [isOpen, setOpen] = useState(false);
    const [isScrolled, setScrolled] = useState(false);
    const [scrollDirection, setScrollDirection] = useState("up");
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Detect scroll direction
            if (currentScrollY > lastScrollY) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }

            // Check if the user has scrolled beyond 50px for background change
            if (currentScrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header
            className={`small-p-m p-8 fixed w-full z-50 transition-all duration-300 transform ${isScrolled ? 'background-img py-4 ' : 'bg-transparent '
                } ${scrollDirection === 'down' ? '-translate-y-full py-4' : 'translate-y-0'}`}
        >
            <div className="flex justify-between items-center max-w-[1300px] mx-auto px-8">
                <div className="text-3xl font-bold text-black">
                    <a href="#home">Portfo<span className="text-[#dc143c]">lio.</span></a>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 font-semibold text-[18px] text-black">
                    <li><a href="#home" className="menu-btn">Home</a></li>
                    <li><a href="#about" className="menu-btn">About</a></li>
                    <li><a href="#skills" className="menu-btn">Skills</a></li>
                    <li><a href="#projects" className="menu-btn">Portfolio</a></li>
                    <li><a href="#contact" className="menu-btn">Contact</a></li>
                </ul>

                {/* LinkedIn Icon for Larger Screens */}
                <div className="text-[#0077b5] hidden md:block">
                    <a href="https://www.linkedin.com/in/hamid-azeem-9b8751314/" target="_blank" rel="noreferrer">
                        <FaLinkedin size={25} />
                    </a>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="flex items-center text-black md:hidden">
                    <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden background-img absolute top-16 left-0 w-full py-4 transition-all duration-300 ease-in-out">
                    <ul className="flex flex-col justify-center items-center gap-4 font-bold text-xl text-black">
                        <li><a href="#home" className="menu-btn" onClick={() => setOpen(false)}>Home</a></li>
                        <li><a href="#about" className="menu-btn" onClick={() => setOpen(false)}>About</a></li>
                        <li><a href="#skills" className="menu-btn" onClick={() => setOpen(false)}>Skills</a></li>
                        <li><a href="#projects" className="menu-btn" onClick={() => setOpen(false)}>Portfolio</a></li>
                        <li><a href="#contact" className="menu-btn" onClick={() => setOpen(false)}>Contact</a></li>

                        <div className="text-[#0077b5]">
                            <a href="https://www.linkedin.com/in/hamid-azeem-9b8751314/" target="_blank" rel="noreferrer">
                                <FaLinkedin size={25} />
                            </a>
                        </div>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;
