import React from "react";

const Footer=()=>{

    const currentYear=new Date().getFullYear();

    return (
        <footer className="flex flex-col justify-center items-center p-8 ">
            <p className="text-[#5b5b5b]">Copyright © {currentYear} Hamid Azeem</p>
            <p className="text-[#5b5b5b]">All rights reserved.</p>
        </footer>
    );
}

export default Footer;