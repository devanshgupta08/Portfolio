import {
  HTML,
  CSS,
  Github,
  Git,
  TailwindCSS,
  react,
  Javascript,
  CPP,
  C,
  NodeJS,
  ExpressJS,
  MongoDB,
  Mongoose,
  Postman,
  AWS,
} from "../constants/Constant";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "./Img_prop";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="EXPERIENCE p-5 mx-20 mb-10  font-['Poppins']  max-sm:p-2 max-sm:mx-5 ">
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl ">
          SKILLS
        </h1>
        <div
          className="IMG w-full  grid place-content-center place items-center p-5 grid-cols-3 max-sm:grid-cols-2 gap-4 max-sm:p-2 mt-10"
          data-aos="zoom-out-up"
        >
          <Image
            img={HTML}
            title="HTML"
            txtColor="from-orange-500 to-yellow-400 dark:from-yellow-300 dark:to-white"
          />
          <Image
            img={CSS}
            title="CSS"
            txtColor="from-blue-500 to-cyan-400 dark:from-blue-300 dark:to-white"
          />
          <Image
            img={Javascript}
            title="JavaScript"
            txtColor="from-yellow-400 to-yellow-300 dark:from-yellow-200 dark:to-white"
          />
          <Image
            img={react}
            title="React"
            txtColor="from-cyan-400 to-blue-500 dark:from-cyan-300 dark:to-slate-100"
          />
          <Image
            img={NodeJS}
            title="Node.js"
            txtColor="from-green-500 to-lime-400 dark:from-green-300 dark:to-lime-200"
          />
          <Image
            img={ExpressJS}
            title="Express.js"
            txtColor="from-gray-700 to-gray-500 dark:from-gray-300 dark:to-white"
          />
          <Image
            img={MongoDB}
            title="MongoDB"
            txtColor="from-green-600 to-emerald-400 dark:from-green-300 dark:to-emerald-200"
          />
          <Image
            img={Mongoose}
            title="Mongoose"
            txtColor="from-red-600 to-red-400 dark:from-red-300 dark:to-red-200"
          />
          <Image
            img={TailwindCSS}
            title="Tailwind"
            txtColor="from-cyan-400 to-teal-300 dark:from-cyan-300 dark:to-white"
          />
          <Image
            img={CPP}
            title="C++"
            txtColor="from-blue-500 to-indigo-400 dark:from-blue-300 dark:to-white"
          />
          <Image
            img={C}
            title="C"
            txtColor="from-blue-400 to-sky-400 dark:from-blue-300 dark:to-white"
          />
          <Image
            img={Git}
            title="Git"
            txtColor="from-orange-500 to-red-500 dark:from-orange-300 dark:to-white"
          />
          <Image
            img={Github}
            title="GitHub"
            txtColor="from-gray-700 to-black dark:from-gray-300 dark:to-white"
          />
          <Image
            img={Postman}
            title="Postman"
            txtColor="from-orange-500 to-yellow-400 dark:from-orange-300 dark:to-yellow-200"
          />
          <Image
            img={AWS}
            title="AWS"
            txtColor="from-yellow-400 to-orange-500 dark:from-yellow-300 dark:to-orange-300"
          />
        </div>
      </section>
    </>
  );
};
export default Skills;
