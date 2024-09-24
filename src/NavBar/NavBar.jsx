import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { SiYoutubegaming } from "react-icons/si";

const NavBar = () => {
    return (

        <div className='flex justify-center'>

            <div className='w-11/12 h-8 bg-gradient-to-br from-yellow-500 to-orange-600   rounded-3xl fixed mx-auto flex  justify-around text-white font-semibold font-sans bottom-6 '>
                <a href="https://github.com/zuoki" target="_blank">
                    experiencia

                </a>
                <a href="https://www.linkedin.com/in/gabriel-juarez-720998240/" target="_blank">
                    contacto

                </a>
                <a href="https://discord.gg/EuAX7vzW" target="_blank">
                    sobre mi

                </a>
            </div>
        </div>

    )
}

export default NavBar