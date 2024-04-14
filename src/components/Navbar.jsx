import { useEffect, useState } from "react";
// import logo from "../assets/logo.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {
    const handleNavigation = () => {
      const hash = window.location.hash.substring(1); // Get the part of the URL after the #
      setActiveSection(hash);
    };

    handleNavigation();

    window.addEventListener("popstate", handleNavigation);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  return (
    <nav className="w-full h-[62px] fixed top-0 bg-gray-900 z-[100] text-white overflow-hidden">
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto lg:-mt-1 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* <img
            className="w-8 rounded-full outline-none border-none"
            src={logo}
            alt=""
          /> */}
          <h3 className="text-xl lg:text-2xl font-semibold font-clashDisplay">
            Sharmin Akter Reka
          </h3>
        </div>
        <div className="hidden lg:flex items-center gap-10 text-lg font-clashDisplay font-medium">
          <a
            href=""
            className={
              activeSection === ""
                ? " text-sky-500 underline underline-offset-[6px] decoration-sky-400 decoration-2"
                : "hover:underline underline-offset-[6px] decoration-2 decoration-sky-400"
            }
          >
            Home
          </a>
          <a
            href="#about"
            className={
              activeSection === "about"
                ? " text-sky-500 underline underline-offset-[6px] decoration-sky-400 decoration-2"
                : "hover:underline underline-offset-[6px] decoration-2 decoration-sky-400"
            }
          >
            About Me
          </a>
          <a
            href="#skills"
            className={
              activeSection === "skills"
                ? " text-sky-500 underline underline-offset-[6px] decoration-sky-400 decoration-2"
                : "hover:underline underline-offset-[6px] decoration-2 decoration-sky-400"
            }
          >
            Experience
          </a>
          <a
            href="#education"
            className={
              activeSection === "education"
                ? " text-sky-500 underline underline-offset-[6px] decoration-sky-400 decoration-2"
                : "hover:underline underline-offset-[6px] decoration-2 decoration-sky-400"
            }
          >
            Education
          </a>
          <a
            href="#projects"
            className={
              activeSection === "projects"
                ? " text-sky-500 underline underline-offset-[6px] decoration-sky-400 decoration-2"
                : "hover:underline underline-offset-[6px] decoration-2 decoration-sky-400"
            }
          >
            Projects
          </a>
          <a
            href="#contact"
            className={
              activeSection === "contact"
                ? " text-sky-500 underline underline-offset-[6px] decoration-primary decoration-2"
                : "hover:underline underline-offset-[6px] decoration-2 decoration-sky-400"
            }
          >
            Contact
          </a>
        </div>
        <div className="flex lg:hidden">
          <label className="btn btn-circle bg-white hover:bg-white swap swap-rotate -mt-4">
            {/* this hidden checkbox controls the state */}
            <input onClick={() => setNavOpen(!navOpen)} type="checkbox" />

            {/* hamburger icon */}
            <svg
              className="swap-off fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
        <div
          className={`lg:hidden fixed top-0 left-0 w-3/4 sm:w-2/5 h-screen z-50 bg-gray-800 text-white px-5  transition-transform transform  ${
            navOpen ? "translate-x-0" : "-translate-x-full"
          } duration-700 ease-in-out`}
        >
          <div className="flex items-center justify-center h-[96px]">
            <div className="flex items-center gap-3">
              {/* <img
                className="w-8 rounded-full outline-none border-none"
                src={logo}
                alt=""
              /> */}
              <h3 className="text-xl lg:text-2xl font-semibold font-clashDisplay">
                Sharmin Akter Reka
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:hidden font-Epilogue font-semibold border-t py-12">
            <a
              href=""
              className={
                activeSection === ""
                  ? " text-sky-500 underline underline-offset-[6px] decoration-sky-400 decoration-2 btn bg-white/10 hover:bg-white/10 border-none"
                  : "hover:underline underline-offset-[6px] decoration-2 decoration-sky-400 btn bg-white/5 hover:bg-white/10 text-white border-none"
              }
            >
              Home
            </a>
            <a
              href="#about"
              className={
                activeSection === "about"
                  ? " text-sky-500 underline underline-offset-[6px] decoration-sky-400 decoration-2 btn bg-white/10 hover:bg-white/10 border-none"
                  : "hover:underline underline-offset-[6px] decoration-2 decoration-sky-400 btn bg-white/5 hover:bg-white/10 text-white border-none"
              }
            >
              About Me
            </a>
            <a
              href="#skills"
              className={
                activeSection === "skills"
                  ? " text-sky-500 underline underline-offset-[6px] decoration-sky-400 decoration-2 btn bg-white/10 hover:bg-white/10 border-none"
                  : "hover:underline underline-offset-[6px] decoration-2 decoration-sky-400 btn bg-white/5 hover:bg-white/10 text-white border-none"
              }
            >
              Experience
            </a>
            <a
              href="#education"
              className={
                activeSection === "education"
                  ? " text-sky-500 underline underline-offset-[6px] decoration-sky-400 decoration-2 btn bg-white/10 hover:bg-white/10 border-none"
                  : "hover:underline underline-offset-[6px] decoration-2 decoration-sky-400 btn bg-white/5 hover:bg-white/10 text-white border-none"
              }
            >
              Education
            </a>
            <a
              href="#projects"
              className={
                activeSection === "projects"
                  ? " text-sky-500 underline underline-offset-[6px] decoration-sky-400 decoration-2 btn bg-white/10 hover:bg-white/10 border-none"
                  : "hover:underline underline-offset-[6px] decoration-2 decoration-sky-400 btn bg-white/5 hover:bg-white/10 text-white border-none"
              }
            >
              Projects
            </a>
            <a
              href="#contact"
              className={
                activeSection === "contact"
                  ? " text-sky-500 underline underline-offset-[6px] decoration-sky-400 decoration-2 btn bg-white/10 hover:bg-white/10 border-none"
                  : "hover:underline underline-offset-[6px] decoration-2 decoration-sky-400 btn bg-white/5 hover:bg-white/10 text-white border-none"
              }
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
