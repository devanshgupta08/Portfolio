import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Leetcode from "./components/Leetcode";
import HashLoader from "react-spinners/HashLoader";

import { useState, useEffect } from "react";

const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5rem",
  borderColor: "red",
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex h-screen justify-center items-center bg-[#00040f]">
          <HashLoader
            color="#0891b2"
            loading={loading}
            cssOverride={override}
            size={90}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Navbar theme = {theme} setTheme = {setTheme}></Navbar>
          <About></About>
          <Experience></Experience>
          <Education></Education>
          <Projects></Projects>
          <Leetcode theme = {theme} ></Leetcode>
          <Contact></Contact>
        </div>
      )}
    </>
  );
};
export default App;
