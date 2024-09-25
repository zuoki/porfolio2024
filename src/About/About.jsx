import React from 'react';
import { RiNextjsFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiVite } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiAstro } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";



















const About = () => {
    return (
        <section className=' sm:flex sm:justify-center '>

            <div className='pt-6 pb-4 '>
                <div className=''>
                    <div className='flex justify-center'>
                        <h2 className='w-52 h-9 rounded-full flex items-center justify-around bg-gradient-to-r from-pink-500 to-yellow-500 peer-checked:text-white text-white font-semibold font-sans sm:w-[20vw]'>
                            {"<Zuoki Dev />"}
                        </h2>
                    </div>
                <div className='sm:flex sm:justify-center'>

                    <h3 className='text-white font-semibold font-sans border-solid  border-t-2 border-l-2 p-2 border-white  m-4  pt-4 pb-4 rounded-lg bg-gray-950 bg-opacity-45 blur-[.2px]   sm:w-[65vw] xl:w-[50vw] 2xl:w-[35vw] sm:p-[5vw] xl:p-[3vw] 2xl:p-[1vw]' >
                        Desde los 14 años, me apasiona la programación. Hace 3 años, decidí tomarlo en serio y formarme profesionalmente, especializándome en el desarrollo web con JavaScript. Actualmente, ya he acumulado más de 1,200 horas de código.
                    </h3>
                </div>
                <div className='flex justify-center'>
                    <div className='rounded-3xl bg-white w-48 flex justify-center h-8'>

                        <h2 className='font-semibold font-sans text-transparent  bg-clip-text bg-gradient-to-r  from-orange-600  to-violet-700 mt-1 sm:w-4/5'> {"<TECNOLOGIAS/>"}</h2>
                    </div>
                </div>
                <div className='sm:flex sm:justify-center'>

                <div className='grid grid-cols-4 text-white font-semibold font-sans border-solid  border-t-2 border-l-2 p-2 border-white  m-4  pt-1 rounded-lg bg-gray-950 bg-opacity-45 blur-[.2px] sm:w-[65vw] xl:w-[50vw] 2xl:w-[35vw] sm:p-[5vw] xl:p-[3vw] 2xl:p-[1vw]'>
                    <span class="icono ml-4 mt-3"><RiNextjsFill color="white" size="35px" class="ml-4  mt-2 sm:scale-125" />
                    </span>
                    <span class="icono ml-4 mt-3"><SiTypescript color="white" size="25px" class="ml-4 mt-2  sm:scale-125" />
                    </span>
                    <span class="icono ml-4 mt-3"><RiJavascriptFill color="white" size="35px" class="ml-4  mt-2 sm:scale-125" />
                    </span>
                    <span class="icono ml-4 mt-3"><SiTailwindcss color="white" size="35px" class="ml-4  mt-2 sm:scale-125" />
                    </span>
                    <span class="icono ml-4 mt-3"><BiLogoPostgresql color="white" size="35px" class="ml-4  mt-2 sm:scale-125" />
                    </span>
                    <span class="icono ml-4 mt-3"><SiVite color="white" size="30px" class="ml-4  mt-2 sm:scale-125" />
                    </span>
                    <span class="icono ml-4 mt-3"><FaNode color="white" size="35px" class="ml-4  mt-2 sm:scale-125" />
                    </span>
                    <span class="icono ml-4 mt-3"><FaGitSquare color="white" size="35px" class="ml-4  mt-2 sm:scale-125" />
                    </span>
                    <span class="icono ml-4 mt-3"><SiPrisma color="white" size="35px" class="ml-4  mt-2 sm:scale-125" />
                    </span>
                    <span class="icono ml-4 mt-3"><FaFigma color="white" size="35px" class="ml-4  mt-2 sm:scale-125" />
                    </span>
                    <span class="icono ml-4 mt-3"><SiAstro color="white" size="35px" class="ml-4 mt-2 sm:scale-125" />
                    </span><span class="icono ml-4 mt-3"><SiPostman color="white" size="35px" class="ml-4  mt-2  sm:scale-125" />
                    </span>
                    <span class="icono ml-4 mt-3"><SiRedux color="white" size="35px" class="ml-4  mt-2 sm:scale-125" />
                    </span>
                    <span class="icono ml-4 mt-3"><SiExpress color="white" size="35px" class="ml-4  mt-2 sm:scale-125" />
                    </span>
                    <span class="icono ml-4 mt-3"><FaHtml5 color="white" size="35px" class="ml-4  mt-2 sm:scale-125" />
                    </span>
                    <span class="icono ml-4 mt-3"><FaCss3 color="white" size="35px" class="ml-4 mt-2 mb-4 sm:scale-125" />
                    </span>
                </div>

                </div>
            </div>

                </div>
        </section>
    );
};

export default About;
