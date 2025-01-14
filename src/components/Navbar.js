"use client";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // mobile View toggle
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };



    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    const NavLink = <>
        <a to={'/'} className="text-[#00233F] text-xl font-semibold hover:text-[#005397]">Home</a>
        <a to={'/about'} className="text-[#00233F] text-xl font-semibold hover:text-[#005397]">About</a>
        <a to={'/skill'} className="text-[#00233F] text-xl font-semibold hover:text-[#005397]">Skill</a>
        <a to={'/project'} className="text-[#00233F] text-xl font-semibold hover:text-[#005397]">Project</a>
        <a to={'/Contact'} className="text-[#00233F] text-xl font-semibold hover:text-[#005397]">Contact</a>
    </>

    return (
        <div>
            <nav className={`fixed top-0 left-0 w-full   lg:py-4 z-40 transition-colors duration-300 ${isScrolled
                ? "  backdrop-blur-lg   shadow-lg"
                : "bg-transparent"
                }`} >

                {/* Navbar Container */}
                <div className="flex justify-between  items-center font-semibold mx-auto container p-4 md:p-0">
                    {/* Logo */}
                    <a to={'/'}>
                        {/* <Image src={"https://i.postimg.cc/0yxrSfpR/Rasel-Logo.png"} alt="" className="w-full h-20 " /> */}
                        <h1 className="text-3xl font-bold text-[#005397]">Logo</h1>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex xl:gap-10 md:gap-8 gap-2">
                        {NavLink}
                    </div>

                    {/* Button */}
                    <div className="hidden md:block">

                        <a download="MERN_Stack_Developer_resume_of_Rashedul_Haque_Rasel">
                            <button className="px-4 py-2 md:px-6 md:py-3 lg:px-6 lg:py-3  border-2 text-[12px] md:text-[14px] lg:text-[16px] font-bold rounded-lg bg-blue-500 hover:bg-transparent text-black hover:text-black transition duration-1000 ease-in-out flex justify-center items-center" >
                                Download CV <FaDownload className='ml-2' />
                            </button>
                        </a>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">

                        {
                            isSidebarOpen ?
                                <></>
                                :
                                <button onClick={toggleSidebar} className="text-3xl ">
                                    <FiMenu />
                                </button>
                        }
                    </div>
                </div>
            </nav>



            {/* Mobile Menu - Slide-in from Left */}

            {/*  mobile view */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-25 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}


            <div
                className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } fixed inset-0 bg-black bg-opacity-50 md:hidden transition-all duration-300 z-50`}

            >

                <div
                    className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                        } fixed left-0 top-0 w-3/4 h-full bg-white shadow-lg p-6 transition-transform duration-300 z-50`}
                >
                    {/*  */}
                    <button onClick={toggleSidebar} className="text-3xl border border-black rounded-full p-2">
                        <FiX className="text-black" />
                    </button>

                    <div className="flex flex-col gap-4 mt-8">

                        {NavLink}

                        <button className="px-4 py-2 md:px-6 md:py-3 lg:px-6 lg:py-3  border-2 text-[12px] md:text-[14px] lg:text-[16px] font-bold rounded-lg bg-blue-500 hover:bg-transparent text-black hover:text-black transition duration-1000 ease-in-out flex justify-center items-center">
                            Download CV <FaDownload className='ml-2' />
                        </button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
