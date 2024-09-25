import React from 'react';
import { FaFileDownload } from "react-icons/fa";


const NavBar = () => {
    return (
        <div className="  flex justify-center">
            <div className="w-11/12 h-9  flex justify-around items-center text-white font-semibold font-sans bg-gradient-to-r from-pink-500 to-yellow-500  z-50 rounded-3xl  fixed bottom-8 border-solid  ">
                <a href="#inicio"className='text-xl font-sans'>Contacto</a>
                <a download="Zuoki Dev Fullstack" href='./cv.pdf'  className=' h-16 w-20 rounded-full bg-white' ><FaFileDownload size="40px" color='black' className='ml-5 mt-3' />
                </a>
                <a href="#zuoki" className='text-xl font-sans' >
                    Conoceme
                </a>
            </div>
        </div>
    );
};

export default NavBar;
