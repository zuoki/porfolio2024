import React from 'react'
import "./ProyectPc.css"

const ProyectosPc = () => {
  return (
    <section  className='bg-gradient-to-tl from-orange-600  to-yellow-500-700 font-semibold '>
        <div className='flex justify-center select-none'>

<h1 id="mi-div2" class=" mt-20  text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white  block mx-auto mb-6 ">{"<Proyectos/>"}</h1>
</div>
<p  id="proyectos-title" class=" mb-14 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-200 pb-4 text-center 2xl:w-[76vw] mx-auto"> Estos son algunos de los proyectos que he realizado durante mi carrera como full stack Developer  </p>

      <article>
        <div id='mi-div2' className=' flex justify-around 2xl:justify-center '>


        <div class="relative flex flex-col   border-solid  border-t-2 border-l-2 p-2 border-white  m-4  pt-4 pb-4  bg-gray-950 bg-opacity-45 rounded-lg w-[38vw] 2xl:scale-75">
    <div class="absolute z-30 mb-4   py-0.5 px-2.5 border border-transparent text-xs  transition-all shadow-sm w-20 text-center bg-gradient-to-bl from-orange-600  to-violet-700   rounded-2xl text-white select-none scale-150 ml-8">PC</div>
  <div class="relative p-2.5  shrink-0 overflow-hidden">
    <img
      src="./vortex.png"
      alt="card-image"
      class=" w-full  rounded-md md:rounded-lg  object-cover   "
    />
  </div>
  <div class="p-6">
    <h4 class="mb-2 text-white text-2xl font-semibold">
     VortexGaming PC
    </h4>
    <p class="mb-8 text-slate-200 leading-normal font-light text-xl 2xl:text-2xl h-36">
    Una plataforma de comercio electrónico dedicada a la venta de claves digitales. Ofrece funcionalidades avanzadas como autenticación de terceros, un panel de administrador intuitivo y gestión de inventario, todo respaldado por su propia base de datos y API.
    </p>
    <div>
    <div class=" flex  text-2xl hover:underline    w-28 rounded-2xl text-white font-semibold items-center">
        <a href="block mx-auto w-8"></a>
       Visitar
        <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-8 w-8 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  </div>
</div> 


        <div class="relative flex flex-col   border-solid  border-t-2 border-l-2 p-2 border-white  m-4  pt-4 pb-4  bg-gray-950 bg-opacity-45 rounded-lg w-[38vw] 2xl:scale-75">
  <div class="absolute z-30 mb-4   py-0.5 px-2.5 border border-transparent text-xs  transition-all shadow-sm w-20 text-center bg-gradient-to-bl from-orange-600  to-violet-700   rounded-2xl text-white select-none scale-150 ml-8">Responsive</div>
  <div class="relative p-2.5  shrink-0 overflow-hidden">
    <img
      src="./AltaBurger.png"
      alt="card-image"
      class=" w-full  rounded-md md:rounded-lg  object-cover "
    />
  </div>
  <div class="p-6">
    <h4 class="mb-2 text-white  text-2xl font-semibold">
     AltaBurguer
    </h4>
    <p class="mb-8 text-slate-200 leading-normal font-light text-xl 2xl:text-2xl h-36">
    E-comere dedicado a la venta de comida, es una aplicación completa utilizada para mantener el control del local, gestionar los ingresos de stock y las ventas -Base de datos propia

-Autenticación de terceros

-Integración con mercado pago

-Panel de administrador

-Gestión de stock
    </p>
    <div>
      <div class=" flex  text-2xl hover:underline  items-center   w-28 rounded-2xl text-white font-semibold items-center">
        <a href="block mx-auto w-8"></a>
       Visitar
        <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-8 w-8 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  </div>
</div> 


        </div>
      </article>
    </section>
  )
}

export default ProyectosPc