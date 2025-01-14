
import React from "react";

// react icons
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {

    return (
        <footer className="bg-white boxShadow rounded-t-xl w-full p-3 lg:p-4 relative">

            <div
                className="w-full flex items-center justify-center  flex-col   ">

                <h1 className="text-black font-bold">Rashedul Haque Rasel</h1>

                <div className="flex gap-[15px] text-black ">
                    <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">
                        <CgFacebook />
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">
                        <BsTwitter />
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">
                        <BsInstagram />
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">
                        <BsLinkedin />
                    </a>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
