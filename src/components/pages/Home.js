import React from "react";

function Home() {
    return (
        <>
            <div className="hero relative bg-green h-[90vh]">
                <div className='absolute bottom-0 left-0 w-full'>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
                        <path fill="#edeae6" fill-opacity="1" d="M0,160L120,186.7C240,213,480,267,720,256C960,245,1200,171,1320,133.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
                        </path>
                    </svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 285">
                        <path fill="#edeae6" fill-opacity="1" d="M0,64L120,90.7C240,117,480,171,720,170.7C960,171,1200,117,1320,90.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
                        </path>
                    </svg>
                </div>
            </div>
            <div className="about bg-cream h-[80vh]">
                <h1 className="font-black text-xl">ABOUT</h1>
            </div>
        </>
    )
}

export default Home;