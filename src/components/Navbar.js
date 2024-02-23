import React, { useState } from "react";
import logo from '../images/raiya-logo.png';
import 'animate.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="navbar bg-cream">
            {isMenuOpen ? (
                <div className="mobile-menu">
                    <div className="flex justify-between">
                        <img src={logo} className="logo"></img>
                        <button className="text-3xl p-5" onClick={toggleMenu}>X</button>
                    </div>
                    <div>
                        <ul>
                            <li className="text-2xl text-right p-4">ABOUT</li>
                            <li className="text-2xl text-right p-4">SPEAKING</li>
                            <li className="text-2xl text-right p-4">CONNECT</li>
                            <li className="text-2xl text-right p-4">BOOK</li>
                        </ul>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="xs:flex lg:hidden justify-between">
                        <img src={logo} className="logo"></img>
                        <button className='text-3xl p-5' onClick={toggleMenu}>☰</button>
                    </div>
                    <div className="xs:hidden lg:flex justify-between items-center shadow-lg">
                        <div className="animate__animated animate__slideInLeft">
                            <img src={logo} className="logo"></img>
                        </div>
                        <div className="animate__animated animate__slideInLeft mr-10 font-lora text-xl">
                            <ul className="flex">
                                <li className="p-2">ABOUT</li>
                                <li className="p-2">SPEAKING</li>
                                <li className="p-2">CONNECT</li>
                                <li className="p-2">BOOK</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Navbar;