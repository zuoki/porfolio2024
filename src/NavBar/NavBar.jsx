import React from 'react';
import { IoLogoGithub } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa6';
import { SiYoutubegaming } from 'react-icons/si';

const NavBar = () => {
    return (
        <div className="  flex justify-center">
            <div className="w-11/12 h-9  flex justify-around items-center text-white font-semibold font-sans   bg-gray-950  z-50 rounded-3xl  fixed bottom-8  ">
                <a href="#inicio">Inicio</a>
                <a href="mailto:jgcorrea56@gmail.com">Contacto</a>
                <a href="https://discord.gg/EuAX7vzW" target="_blank" rel="noopener noreferrer">
                    Sobre mí
                </a>
            </div>
        </div>
    );
};

export default NavBar;
