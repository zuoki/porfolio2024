import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { SiYoutubegaming } from "react-icons/si";

function Me() {

  return (
    
    <div id="inicio"class="flex relative font-sans w-full h-full   bg-gradient-to-tr from-red-600 to-orange-400">
      <div class="flex-none w-36 relative sm:w-40 ">
        <img src="/jona.jpg" alt="" class="absolute inset-0 rounded-s-none rounded-e-lg h-full sm:w-full sm:h-full object-cover    sm:rounded-lg sm:ml-20" loading="lazy" />
      </div>
      <form class="flex-auto p-2">
        <div class="flex flex-wrap">

          <div class="w-full flex-none mt-2 order-1 text-xl font-bold text-white  sm:flex sm:justify-center sm:text-4xl">
            Jonathan Gabriel Juarez
          </div>
        </div>

        <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200 sm:flex sm:justify-center">
          <div class="space-x-2 flex text-sm font-bold">
            <label>
              <input class="sr-only peer" name="size" type="radio" value="xs" checked />
              <div class="w-52 h-9 rounded-full flex items-center justify-around bg-gradient-to-r from-pink-500 to-yellow-500 peer-checked:text-white">
                Full Stack Developer
                <SiYoutubegaming size="25px" class="ml-[-8px]"/>
              </div>
            </label>
          </div>
        </div>

        <div className=" w-52  flex mt-[-10px] sm:w-full sm:flex sm:justify-end bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg">
          <h3 className="font-semibold text-white ml-1 ">Contacto</h3>
          <a href="https://github.com/zuoki" target="_blank">
            <IoLogoGithub color="white" size="25px" class="ml-4" />
          </a>
          <a href="https://www.linkedin.com/in/gabriel-juarez-720998240/" target="_blank">
            <FaLinkedin color="white" size="25px" class="ml-4" />
          </a>
          <a href="https://discord.gg/EuAX7vzW" target="_blank">
            <FaDiscord color="white" size="25px" class="ml-4" />
          </a>
        </div>

        <div class="flex space-x-4 mb-5 text-sm font-medium">
          <div class="flex-auto flex space-x-4">
          </div>

        </div>

      </form>
    </div>
  );
}

export default Me;
