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















const About = () => {
    return (
        <section className=' '>

            <div className='pt-6 pb-4 '>
                <div className=''>
                    <div className='flex justify-center'>
                        <h2 className='w-52 h-9 rounded-full flex items-center justify-around bg-gradient-to-r from-pink-500 to-yellow-500 peer-checked:text-white text-white font-semibold font-sans'>
                            {"<Zuoki Dev />"}
                        </h2>
                    </div>

                    <h3 className='text-white font-semibold font-sans border-solid  border-t-2 border-l-2 p-2 border-white  m-4  pt-1 rounded-lg bg-gray-950 bg-opacity-45 blur-[.2px]' >
                        Desde los 14 años, me apasiona la programación. Hace 3 años, decidí tomarlo en serio y formarme profesionalmente, especializándome en el desarrollo web con JavaScript. Actualmente, ya he acumulado más de 1,200 horas de código.
                    </h3>
                </div>
                <div className='flex justify-center'>
                       <h2 className='text-white font-semibold font-sans'> {"<TECNOLOGIAS/>"}</h2>
                </div>
                <div className='grid grid-cols-4 text-white font-semibold font-sans border-solid  border-t-2 border-l-2 p-2 border-white  m-4  pt-1 rounded-lg bg-gray-950 bg-opacity-45 blur-[.2px]'>
                    <span class="icono ml-4 mt-3"><RiNextjsFill color="white" size="35px" class="ml-4  mt-2"/>
                    </span>
                    <span class="icono ml-4 mt-3"><SiTypescript color="white" size="25px" class="ml-4 mt-2"/>
                    </span>
                    <span class="icono ml-4 mt-3"><RiJavascriptFill color="white" size="35px" class="ml-4  mt-2"/>
                    </span>
                    <span class="icono ml-4 mt-3"><SiTailwindcss  color="white" size="35px" class="ml-4  mt-2"/>
                    </span>
                    <span class="icono ml-4 mt-3"><BiLogoPostgresql color="white" size="35px" class="ml-4  mt-2"/>
                    </span>
                    <span class="icono ml-4 mt-3"><SiVite color="white" size="30px" class="ml-4  mt-2"/>
                    </span>
                    <span class="icono ml-4 mt-3"><FaNode color="white" size="35px" class="ml-4  mt-2"/>
                    </span>
                    <span class="icono ml-4 mt-3"><FaGitSquare color="white" size="35px" class="ml-4  mt-2"/>
                    </span>
                    <span class="icono ml-4 mt-3"><SiPrisma color="white" size="35px" class="ml-4  mt-2"/>
                    </span>
                    <span class="icono ml-4 mt-3"><FaFigma color="white" size="35px" class="ml-4  mt-2"/>
                    </span>
                    <span class="icono ml-4 mt-3"><SiAstro color="white" size="35px" class="ml-4 mt-2"/>
                    </span><span class="icono ml-4 mt-3"><SiPostman color="white" size="35px" class="ml-4  mt-2 mb-4"/>
                    </span>
                    
                </div>
            </div>

        </section>
    );
};

export default About;
