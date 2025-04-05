import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../images/Logo.png";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


export default function Footer() {

    return (

        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">

                    <div className="mb-6 md:mb-0 justify-center">

                        <img src={Logo} className="h-24 w-80 cursor-pointer" alt="Logo"/>   

                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-4 text-lg font-bold text-gray-900 uppercase">Go to</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-2">
                                    <Link to="/Menu" className="hover:underline">
                                        Menu
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-4 text-lg font-bold text-gray-900 uppercase">Rate us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-2 hover:underline cursor-pointer">
                                    Swiggy
                                </li>
                                <li className="hover:underline cursor-pointer">
                                    Zomato
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h2 className="mb-4 text-lg font-bold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-2 hover:underline cursor-pointer">
                                    Privacy Policy
                                </li>
                                <li className="hover:underline cursor-pointer">
                                    Terms &amp; Conditions
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-2 border-gray-200 sm:mx-auto lg:my-4" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-md text-gray-500 sm:text-center">
                        © 2024 Sandeep Mishra. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">

                        <div className="text-gray-500">
                            
                            <FaInstagramSquare  className='w-10 h-10 cursor-pointer' />
                            
                        </div>

                        <div className="text-gray-500">
                            
                            <FaFacebook  className='w-10 h-10 cursor-pointer' />
                            
                        </div>

                        <div className="text-gray-500">
                            
                            <FaSquareXTwitter  className='w-10 h-10 cursor-pointer' />
                            
                        </div>

                        <div className="text-gray-500">
                            
                            <FaYoutube  className='w-10 h-10 cursor-pointer' />
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}
