import React from "react";
import logo from '../images/raiya-logo.png';
import 'animate.css';

function Navbar() {
    return (
        <div className="navbar bg-cream flex justify-between items-center shadow-lg">
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
    )
}

export default Navbar;