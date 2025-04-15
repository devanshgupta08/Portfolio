import { CgMenuRightAlt } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import Menu from "./Menu";

const Navbar = ({ theme, setTheme }) => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleNav = () => {
    setNav((prev) => !prev);
  };

  return (
    <>
      <section className="NAVBAR p-5 mx-20 mt-5 font-['Poppins'] max-sm:p-2 max-sm:mx-5 max-sm:max-h-[48px]">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="LOGO">
            <a
              href="#"
              className="text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:text-cyan-500 max-sm:text-2xl"
            >
              {"<Devansh />"}
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex text-[20px] gap-12 text-[#00040f] dark:text-[#e1e1e1]">
            <a href="#about" className="hover:text-cyan-500">
              Home
            </a>
            <a href="#experience" className="hover:text-cyan-500">
              Experience
            </a>
            <a href="#education" className="hover:text-cyan-500">
              Education
            </a>
            <a href="#projects" className="hover:text-cyan-500">
              Projects
            </a>
            <a href="#leetcode" className="hover:text-cyan-500">
              Leetcode
            </a>
            <a href="#contact" className="hover:text-cyan-500">
              Contact
            </a>
            <button onClick={handleTheme}>
              {theme === "dark" ? (
                <HiMoon className="-translate-y-1 text-2xl" />
              ) : (
                <HiSun className="-translate-y-1 text-2xl" />
              )}
            </button>
          </div>

          {/* Hamburger Menu Icon */}
          <button onClick={toggleNav} className="block lg:hidden">
            <CgMenuRightAlt className="text-[#00040f] dark:text-[#e1e1e1] text-[32px]" />
          </button>
        </div>

        {/* Mobile Menu */}
        {nav && (
          <Menu
            theme={theme}
            setTheme={setTheme}
            closeMenu={() => setNav(false)}
          />
        )}
      </section>
    </>
  );
};

export default Navbar;
