import { useState } from "react";
import resumelogo from '../assets/resumelogo.png'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="h-[60px] bg-slate-100 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:grid lg:grid-cols-2 lg:px-6">
                <div>
                    <div className="flex items-center justify-between ">
                        <Link to="/">
                            <img
                                className=" rounded-xl h-[40px] mt-4"
                                src={resumelogo}
                                alt="image"
                            />

                        </Link>

                        <div className="lg:hidden text-gray-700 ">
                            <button className="p-2 text-black rounded-lg outline-none" onClick={() => setNavbar(!navbar)}>
                                {navbar ? (<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-black"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>)}
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={`flex mx-44 justify-self-center max-[320px]:mx-28 mt-2 md:mx-[550px] lg:block rounded-xl p-2 bg-white shadow-lg lg:shadow-none w-44 lg:w-full lg:bg-slate-100 ${navbar ? "block" : "hidden"
                        }`}
                >
                    <div className='flex-1 justify-self-center  pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 '
                    >
                        <ul className="items-center justify-center text-transparent bg-black space-y-8 lg:flex lg:space-x-6 lg:space-y-0 font-bold px-2 bg-clip-text">
                            <li className="hover:text-slate-500 hover:underline">
                                <Link to="/">Resume Templates</Link>
                            </li>
                            <li className="hover:underline hover:text-slate-500">
                                <Link to="/pre">My Resume</Link>
                            </li>
                            <li className="hover:underline  hover:text-slate-500">
                                <Link to="/aboutus">About Us</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    );
}



