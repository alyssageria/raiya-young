import React from "react";
import logo from '../images/raiya-logo.png';

function Navbar() {
    return (
        <div className="navbar bg-cream flex justify-between items-center shadow-lg">
            <div>
                <img src={logo} className="logo"></img>
            </div>
            <div className="mr-10 font-lora text-xl">
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