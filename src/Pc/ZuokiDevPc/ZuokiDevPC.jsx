import React from 'react'
import "./ZuokiDevPC.css"
import Foter from '../../Foter/Foter'

const ZuokiDevPC = () => {
  return (
   <section id='Z-Pc' className='bg-gradient-to-r from-violet-700 to-red-600 -mt-[36vh] 2xl:-mt-[10vh] '>
    <br />
     <div  id='zuoki' className='flex justify-center select-none mt-24'>

<h1 id="mi-div2" class=" mt-20  text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl 2xl:text-8xl -rotate-2 dark:text-white  block mx-auto mb-6 ">{"<Zuoki-Dev/>"}</h1>
</div>
    <article id="tec-t" className=' w-[80vw] mx-auto  mt-10 relative flex flex-wrap  rounded-xl    items-center select-text  2xl:w-[60vw] gap-4'>
        <img  src="./zuoki.png" alt="Zuoki-dev" className='select-none  t-20 w-[500px]  ' />
        <div className='w-[500px] text-white text-xl  mx-auto'>
        Tengo gustos variados. Soy un apasionado del fútbol, sigo la Champions League y la Fórmula 1, aunque no tengo un equipo favorito. Disfruto del rock, especialmente de bandas como RHCP, ACDC y LP, así como de la música en general.
        </div>
       
        <div class="container">
    <p class="text-white text-xl">
        En mi carrera como programador, he aprendido que mis conocimientos y la relación con mis compañeros son esenciales. Mi pasión por el aprendizaje autodidacta me ha permitido crecer, pero también valoro todo lo que aprendo de ellos. Me gusta destacar, y uno de mis logros más significativos fue ser elegido "Henry Rockstar", un reconocimiento al alumno destacado, seleccionado entre más de 120 compañeros. Además, también fui reconocido por uno de los mejores proyectos finales de la carrera de Full Stack. Este premio refleja tanto mis habilidades técnicas como mi compromiso como buen compañero. Actualmente estoy asistiendo a clases de inglés para alcanzar el nivel C1.
    </p>
        <img src="./certificate.png" alt=""  className='w-72'/>
</div>
     
        
    </article>
    
    <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
       
        <Foter />
        <div className='h-[10vh] 2xl:h-[5vh]'></div>
       
   </section>
  )
}

export default ZuokiDevPC