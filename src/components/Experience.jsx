"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  Codebase,
  Artive
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-2 "
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={Codebase}
              title="CodeBase"
              subtitle="Core Team Member"
              date="May 2023 - present"
              titleColor = {"from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200"}
              para={["Member of Codebase, the open-source development club of IIIT Kota",
                "Developed the Auditorium Booking System for IIIT Kota",
                "Organized Hack the Chain 2.0, a hackathon with 1000+ participants"]}
            />
            <Exp_prop
              img={Artive}
              title="Artive"
              subtitle="Web Developer"
              date="May 2023 - present"
              titleColor = {"from-yellow-500 to-amber-500 dark:from-amber-400 dark:to-yellow-200"}
              para={[
                "Web developer in the Art Club of IIIT Kota— Artive",
                "Developed a platform for students to post and showcase their artwork."
              ]}
              
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
