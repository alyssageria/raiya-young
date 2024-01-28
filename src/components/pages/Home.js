import React from "react";
import aboutScript from '../../images/about-script-green.png';
import raiya from '../../images/raiya-bw.JPG';

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
            <div className="about bg-cream h-[70vh]">
                {/* <div className="flex justify-center">
                    <img src={aboutScript} className="about-script"></img>
                </div> */}
                <div className="grid grid-cols-2">
                    <div className="flex justify-center ml-20">
                        <img src={raiya} className="raiya"></img>
                    </div>
                    <div className="text-center flex flex-col items-center mr-20">
                        <img src={aboutScript} className="h-[10rem] w-[23rem]"></img>
                        <p className="font-montserrat text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel nisi nec ante condimentum efficitur a et mi. Nam et mauris sem. Donec eget justo ante. Sed vel finibus libero. Quisque ex dolor, iaculis eu gravida et, porttitor nec ligula. Duis diam nisi, ornare ut mi a, elementum vestibulum lacus. Phasellus at auctor eros. Nunc nibh lacus, aliquam varius justo ac, ultrices iaculis sapien. Quisque tempus, purus quis mollis lobortis, lorem leo fringilla nunc, vel dapibus augue erat vitae nulla. Aliquam tristique bibendum quam, et rhoncus nulla convallis facilisis. Sed at varius neque. Etiam aliquam lectus et bibendum fringilla.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;