import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Leetcode({ theme }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    AOS.init();

    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [theme]);

  // Width & height sets based on screen width greater than 1185px
  const getSolvedSize = () =>
    screenWidth > 1185
      ? { width: 650, height: 350 }
      : { width: 300, height: 160 };

  const getContestSize = () =>
    screenWidth > 1185
      ? { width: 600, height: 360 }
      : { width: 160, height: 150 };

  const getHeatmapSize = () =>
    screenWidth > 1185
      ? { width: 1000, height: 500 }
      : { width: 100, height: 160 };

  const solvedSize = getSolvedSize();
  const contestSize = getContestSize();
  const heatmapSize = getHeatmapSize();
// Conditional rendering for screen size below 1185px
  if (screenWidth <= 560) {
    return (
      <section
        id="leetcode"
        className="EXPERIENCE p-5 font-['Poppins'] max-sm:p-2 mx-auto w-full overflow-hidden"
      >
        <div
          className="WRAPPER mt-14 w-full h-full"
          data-aos="zoom-out-down"
        >
          <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-8 max-sm:text-4xl">
            LeetCode
          </h1>

          <div className="w-full flex justify-center">
  <div className="w-full  px-2 overflow-hidden">
    <div >
      <img
        src={`https://leetcard.jacoblin.cool/devansh00gupta?ext=contest&theme=${
          theme === "light" ? "dark" : "light"
        }&width=650&height=300&radius=30`}
        style={{
          width: "100%",
          height: "200px",
          border: "none",
          display: "block",
          transform: "scale(1)" 
        }}
        alt="LeetCode Card"
      ></img>
    </div>
  </div>
</div>

        </div>
      </section>
    );
  }
 if (screenWidth <= 1185) {
    return (
      <section
        id="leetcode"
        className="EXPERIENCE min-h-[600px] p-5 font-['Poppins'] max-sm:p-2 mx-auto w-full overflow-hidden"
      >
        <div
          className="WRAPPER min-h-[399px] mt-10 w-full h-full"
          data-aos="zoom-out-down"
        >
          <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-8 max-sm:text-4xl">
            LeetCode
          </h1>

          <div className="w-full min-h-[398px] flex justify-center">
            <div className="w-full min-h-[398px] max-w-[600px] px-2">
              <iframe
                src={`https://leetcard.jacoblin.cool/devansh00gupta?ext=contest&theme=${
                  theme === "light" ? "dark" : "light"
                }&width=500&height=150&hide=background`}
                style={{
                  width: "100%",
                  height: "150px",
                  minHeight: "398px",
                  border: "none",
                  display: "block",
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="leetcode"
      className="EXPERIENCE p-5 mx-20 h-auto font-['Poppins'] max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="zoom-out-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl">
          LeetCode
        </h1>

        <div className="relative flex flex-col items-center mt-16">
          {/* Top Row: Solved + Contest Rating */}
          <div className="flex flex-col xl:flex-row xl:gap-5 items-start relative z-10">
            {/* Questions Solved */}
            <div
              className="relative overflow-hidden mb-10 xl:mb-0"
              style={{
                width: `${solvedSize.width}px`,
                height: `${solvedSize.height}px`,
              }}
            >
              <iframe
                src={`https://leetcard.jacoblin.cool/devansh00gupta?theme=${
                  theme === "light" ? "dark" : "light"
                }&width=${solvedSize.width}&height=${
                  solvedSize.height
                }&hide=activity,ranking,contest,bio,about,heatmap,background`}
                className="absolute w-full h-full top-0 left-0 pointer-events-none"
              ></iframe>
            </div>

            {/* Contest Rating */}
            <div
              className="relative overflow-hidden z-10 xl:mt-0 -mt-20 xl:translate-y-[-170px] sm:translate-y-[-200px] translate-y-[-150px] [max-width:479px]:translate-y-[-20px]"
              style={{
                width: `${contestSize.width}px`,
                height: `${contestSize.height}px`,
              }}
            >
              <iframe
                src={`https://leetcard.jacoblin.cool/devansh00gupta?theme=${
                  theme === "light" ? "dark" : "light"
                }&width=${contestSize.width}&height=${
                  contestSize.height
                }&ext=contest&hide=ranking,total-solved-text,total-solved-count,easy-solved-count,medium-solved-count,hard-solved-count,heatmap,bio,about,activity,solved,total-solved,background,username,icon`}
                className="absolute w-full h-full top-0 left-0 pointer-events-none"
              ></iframe>
            </div>
          </div>

          {/* Heatmap */}
          <div
            className="relative overflow-hidden -mt-24 xl:translate-y-[-140px] sm:translate-y-[-200px] translate-y-[-100px]"
            style={{
              width: `${heatmapSize.width}px`,
              height: `${heatmapSize.height}px`,
              visibility: screenWidth < 1000 ? "hidden" : "visible",
            }}
          >
            <iframe
              src={`https://leetcard.jacoblin.cool/devansh00gupta?theme=${
                theme === "light" ? "dark" : "light"
              }&width=${heatmapSize.width}&height=${
                heatmapSize.height
              }&ext=heatmap&hide=ranking,total-solved-text,total-solved-count,easy-solved-count,medium-solved-count,hard-solved-count,contest,bio,about,activity,solved,total-solved,username,icon,background`}
              className="absolute w-full h-full top-0 left-0 pointer-events-none "
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Leetcode;
