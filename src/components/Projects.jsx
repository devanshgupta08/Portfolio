import Project_prop from "./Project_prop.jsx"
import { bin2bite,blogscape,audi,expt,rtime} from "../constants/Constant";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiMongoose,
  SiNodedotjs,
  SiExpress,
  SiGoogle,
  SiGooglemaps,
  SiReactquery,
} from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid place-content-center place-items-center gap-10 grid-cols-2 [@media(max-width:888px)]:grid-cols-1"
          data-aos="zoom-out-down"
        >
          <Project_prop
            title="BlogScape"
            para="Developed a full-stack blogging platform with features like blog creation, commenting, role-based access control, and an admin dashboard."
            img={blogscape}
            link="https://blog-space-blond.vercel.app"
            github_link="https://github.com/devanshgupta08/BlogScape"
            techStack={[
              {
                icon: <SiReact className="dark:text-slate-200 text-black" />,
                name: "React",
              },
              {
                icon: (
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                ),
                name: "Tailwind CSS",
              },
              {
                icon: (
                  <SiReactquery className="dark:text-slate-200 text-black" />
                ),
                name: "React Query",
              },
              {
                icon: (
                  <SiNodedotjs className="dark:text-slate-200 text-black" />
                ),
                name: "Node.js",
              },
              {
                icon: <SiExpress className="dark:text-slate-200 text-black" />,
                name: "Express.js",
              },
              {
                icon: <SiMongodb className="dark:text-slate-200 text-black" />,
                name: "MongoDB",
              },
              {
                icon: <SiMongoose className="dark:text-slate-200 text-black" />,
                name: "Mongoose",
              },
              {
                icon: <SiGoogle className="dark:text-slate-200 text-black" />,
                name: "Google OAuth",
              },
            ]}
          />
          <Project_prop
            title="Bin2Byte"
            para="Bin2Byte is a food-sharing platform designed to help reduce food waste and fight hunger. It allows users to share excess food with others in their locality."
            img={bin2bite}
            link="https://hungry-three.vercel.app/"
            github_link="https://github.com/devanshgupta08/Hungry"
            techStack={[
              {
                icon: <SiReact className="dark:text-slate-200 text-black" />,
                name: "React",
              },
              {
                icon: (
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                ),
                name: "Tailwind CSS",
              },
              {
                icon: (
                  <SiNodedotjs className="dark:text-slate-200 text-black" />
                ),
                name: "Node.js",
              },
              {
                icon: <SiExpress className="dark:text-slate-200 text-black" />,
                name: "Express.js",
              },
              {
                icon: <SiMongodb className="dark:text-slate-200 text-black" />,
                name: "MongoDB",
              },
              {
                icon: <SiMongoose className="dark:text-slate-200 text-black" />,
                name: "Mongoose",
              },
              {
                icon: (
                  <SiGooglemaps className="dark:text-slate-200 text-black" />
                ),
                name: "Google Maps API",
              },
              {
                icon: <SiGoogle className="dark:text-slate-200 text-black" />,
                name: "Gemini API",
              },
            ]}
          />
          <Project_prop
            title="Auditorium Booking System for IIIT Kota"
            para="The Auditorium Booking System allows students at IIIT Kota to seamlessly book and manage auditorium reservations for events, classes, and activities."
            img={audi}
            link=""
            github_link="https://github.com/devanshgupta08/AuditoriumBooking"
            techStack={[
              {
                icon: <SiReact className="dark:text-slate-200 text-black" />,
                name: "React",
              },
              {
                icon: (
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                ),
                name: "Tailwind CSS",
              },
              {
                icon: (
                  <SiNodedotjs className="dark:text-slate-200 text-black" />
                ),
                name: "Node.js",
              },
              {
                icon: <SiExpress className="dark:text-slate-200 text-black" />,
                name: "Express.js",
              },
              {
                icon: <SiMongodb className="dark:text-slate-200 text-black" />,
                name: "MongoDB",
              },
            ]}
          />
          <Project_prop
            title="Expense Tracker"
            para="The Expense Tracker is a web application that allows users to track their expenses and income, providing insights into their financial habits."
            img={expt}
            link="https://devanshgupta08.github.io/Expense-Tracker"
            github_link="https://github.com/devanshgupta08/Expense-Tracker"
            techStack={[
              {
                icon: <SiHtml5 className="dark:text-slate-200 text-black" />,
                name: "HTML",
              },
              {
                icon: <SiCss3 className="dark:text-slate-200 text-black" />,
                name: "CSS",
              },
              {
                icon: (
                  <SiJavascript className="dark:text-slate-200 text-black" />
                ),
                name: "JavaScript",
              },
            ]}
          />
          <Project_prop
            title="Reaction Time"
            para="The Reaction Time game is a simple web-based game that tests and improves your reaction speed. "
            img={rtime}
            link="https://devanshgupta08.github.io/Reaction-Time"
            github_link="https://github.com/devanshgupta08/Reaction-Time"
            techStack={[
              {
                icon: <SiHtml5 className="dark:text-slate-200 text-black" />,
                name: "HTML",
              },
              {
                icon: <SiCss3 className="dark:text-slate-200 text-black" />,
                name: "CSS",
              },
              {
                icon: (
                  <SiJavascript className="dark:text-slate-200 text-black" />
                ),
                name: "JavaScript",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
