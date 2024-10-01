import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { SiYoutubegaming } from "react-icons/si";
import "./Header.css"

function Header() {

  return (
    <section Class="bg-gradient-to-tr from-red-600 to-orange-400 flex justify-center">

    <div id="inicio"class="flex relative font-sans w-full h-full    sm:p-[5vw] xl:p-[3vw] 2xl:p-[1vw]  sm:w-[65vw] xl:w-[50vw] 2xl:w-[35vw]">
      <div class="flex-none w-36 relative sm:w-40 ">
        <img id="perico" src="/jona.jpg" alt="" Class="  absolute inset-0 rounded-s-none rounded-e-lg h-full   sm:w-36  sm:h-full sm:-ml-[2vw] xl:-ml-[1vw]  object-cover ml-3 mt-2    sm:rounded-lg  sm:mt-4 " loading="lazy" />
      </div>
      <form class="flex-auto   ">
        <div class="flex flex-wrap">

          <div id="J-tituloc" class="select-none w-full flex-none mt-2 order-1 text-3xl  font-bold text-white  sm:flex sm:justify-center sm:text-4xl  xl:text-6xl sm:mt-10 hover:scale-105 duration-700 ">
            Jonathan Gabriel Juarez
          </div>
        </div>

        <div id="detail" class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200 sm:flex sm:justify-center">
          <div class="space-x-2 flex text-sm font-bold">
            <label>
              <input class="sr-only peer" name="size" type="radio" value="xs" checked />
              <div class="select-none w-52 h-9 rounded-3xl flex items-center justify-around bg-gradient-to-r from-pink-500 to-yellow-500 peer-checked:text-white">
                Full Stack Developer
                <SiYoutubegaming size="25px" class="ml-[-8px]"/>
              </div>
            </label>
          </div>
        </div>
    <div Class="sm:flex sm:justify-center">

        <div id="detail" Class=" select-none w-52 h-8  flex mt-[-10px]  sm:flex sm:justify-end bg-gradient-to-r from-yellow-500 to-orange-600 rounded-3xl">
          <h3 Class="font-semibold text-white ml-3 mt-1 select-none ">Contacto</h3>
          <a href="https://github.com/zuoki" target="_blank">
            <IoLogoGithub  size="25px" class="ml-4 mt-1 duration-700 ease-in-out text-white hover:text-gray-800 hover:scale-125" />
          </a>
          <a href="https://www.linkedin.com/in/gabriel-juarez-720998240/" target="_blank">
            <FaLinkedin  size="25px" class="ml-4 mt-1 duration-700 ease-in-out text-white hover:text-gray-800 hover:scale-125" />
          </a>
          <a href="https://discord.gg/EuAX7vzW" target="_blank">
            <FaDiscord  size="25px" class="ml-4 mt-1 duration-700 ease-in-out text-white hover:text-gray-800 hover:scale-125" />
          </a>
        </div>
    </div>

        <div class="flex space-x-4 mb-5 text-sm font-medium">
          <div class="flex-auto flex space-x-4">
          </div>

        </div>

      </form>
    </div>
   
    </section>
  );
}

export default Header;
