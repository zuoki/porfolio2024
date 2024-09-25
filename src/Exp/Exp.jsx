import React from 'react'

const Exp = () => {
    return (
        <section className=' z-10 '>
            <div className='flex justify-center'>
                <h2 className='w-52 h-9 rounded-full flex items-center justify-around bg-gradient-to-r from-pink-500 to-yellow-500 peer-checked:text-white text-white font-semibold font-sans sm:w-[38vw] xl:w-[30vw] 2xl:w-[20vw]'>
                    Trayectoria Profesional
                </h2>
            </div>
            <div className='sm:flex sm:justify-center w-full'>

            <div className='text-white font-semibold font-sans border-solid  border-t-2 border-l-2 p-2 border-white  m-4  pt-4 pb-4 rounded-lg bg-gray-950 bg-opacity-45 blur-[.2px]   sm:w-[65vw] xl:w-[50vw] 2xl:w-[35vw] sm:p-[5vw] xl:p-[3vw] 2xl:p-[1vw]'>
                <p >
                    Durante mi proceso de aprendizaje, he tenido la oportunidad de trabajar en diversos proyectos académicos a través de bootcamps como No Country, Soy Henry, Udemy, entre otros. Mi enfoque ha abarcado desde la creación de Single Page Applications (SPAs) como landing pages hasta proyectos más robustos, como tiendas en línea (ecommerce), todos ellos con sus propias bases de datos. He utilizado tecnologías como Next.js, React y diversos frameworks para llevar a cabo estas implementaciones.
                </p>
            </div>
            </div>
            <div className='flex justify-center '>
                <div className='rounded-3xl bg-white w-60 flex justify-center h-8'>
                <h2 className=' font-semibold font-sans text-transparent  bg-clip-text bg-gradient-to-r  from-orange-600  to-violet-700 mt-1'> {"<EXPERIENCIA LABORAL/>"}</h2>
            </div>

                </div>
                <div className='sm:flex sm:justify-center'>

            <section className='text-white font-semibold font-sans border-solid border-t-2 border-l-2 p-2 pt-4 pb-4 border-white m-4 mt-4 rounded-lg bg-gray-950 bg-opacity-45 blur-[.2px]  sm:w-[65vw] xl:w-[50vw] 2xl:w-[35vw] sm:p-[5vw] xl:p-[3vw] 2xl:p-[1vw]'>
                <div className='flex justify-around'>
                    <img src="/zify.png" alt="zifypro" className='h-28' />
                    <div className='grid-cols-2 mt-4'>
                        <h2 >
                            Full stack developer
                        </h2>
                        <h3>20/04/23 - Actualidad</h3>
                        <a className=' font-semibold font-sans text-transparent  bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 ' href="https://zifypro-space.vercel.app/" target='blank'> www.zifypro.com</a>

                    </div>
                </div>
                    <p className=' pb-4 text-left'>Desde hace más de un año, formo parte de una consultoría de programación, donde me especializo como programador fullstack donde destaco en el frontend. Mis funciones incluyen la creación de páginas web, aplicaciones móviles y e-commerce, así como el mantenimiento y corrección de proyectos existentes. </p>
                    
            </section>
                </div>

           
        </section>

    )
}

export default Exp