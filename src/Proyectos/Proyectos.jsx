import React from 'react'
import { CiBoxes } from "react-icons/ci";
import { FaDropbox } from "react-icons/fa";
import "./Proyectos.css"


const Proyectos = () => {
    return (
        <section >
            <article id='Proyectos' className='relative' >

            <div   className='flex justify-center '>
                <h2 className='w-52 h-9 rounded-full flex items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-500 peer-checked:text-white text-white font-semibold font-sans mt-4'>
                    Proyectos <FaDropbox size="25px" className=' ml-1' />

                </h2>
            </div>



            <div className='flex justify-center'>

            <div className='text-white font-semibold font-sans border-solid  border-t-2 border-l-2 p-2 border-white  m-4  pt-4 pb-4 rounded-lg bg-gray-950 bg-opacity-45    sm:w-[65vw] xl:w-[50vw] 2xl:w-[35vw] sm:p-[5vw] xl:p-[3vw] 2xl:p-[1vw]'>
                <img src="/vortex.png" alt="" />
                <h3 className='mt-4'>   VORTTEX GAMING:
                </h3>
                <p >
                    Una plataforma de comercio electrónico dedicada a la venta de claves digitales. Ofrece funcionalidades avanzadas como autenticación de terceros, un panel de administrador intuitivo y gestión de inventario, todo respaldado por su propia base de datos y API.
                </p>
            <div className='flex justify-end mt-4'>
                <button className=' bg-gradient-to-r from-pink-500 to-yellow-500 rounded-2xl w-24 h-9 '>  <a href="https://pf-final-damian-projects.vercel.app/" target='blank'>visitar</a></button>
            </div>
            </div>
            </div>


            <div id="pro" className='flex justify-center'>
                <h2 className='w-52 h-9 rounded-full flex items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-500 peer-checked:text-white text-white font-semibold font-sans '>
                   Mas Proyectos <CiBoxes size="25px" className=' ml-1' />

                </h2>
            </div>
            </article>
        </section>
    )
}

export default Proyectos