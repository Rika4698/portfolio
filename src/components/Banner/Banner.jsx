import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Typewriter from "typewriter-effect";
import banner1 from "../../assets/html5.svg";
import banner2 from "../../assets/css3.svg";
import banner3 from "../../assets/tailwindcss.svg";
import banner4 from "../../assets/javascript.svg";
import banner5 from "../../assets/github2.svg";
import banner6 from "../../assets/firebase.svg";
import banner7 from "../../assets/react.svg";
import banner8 from "../../assets/nodejs.svg";
import banner9 from "../../assets/expres.js.png";
import banner10 from "../../assets/mongodb.svg";
// import { BsFillTelephoneFill } from "react-icons/bs";
import "./Banner.css";
import PDFDownloadButton from "../PDFDownloadButton";
import {  FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Banner = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  const socialLinks = [
      
      { id: 1, icon: <FaGithub />, href: "https://github.com/Rika4698", alt: "GitHub", bg: "black" },
      { id: 2, icon: <FaLinkedin />, href: "https://www.linkedin.com/in/sharmin-rika-2b17a42b4/", bg: "#0077B5" }
    ];

  return (
    <div className="h-screen relative text-white font-clashDisplay font-semibold">
      <div className="bg-gray-800 h-full  relative -z-50 py-20">
        <Particles
          className="w-full h-full absolute top-0 -z-50"
          init={particlesInit}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 3,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#00ABE4",
              },
              links: {
                color: "#00ABE4",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 0.7,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <div className="absolute left-0 top-12 sm:top-24 lg:top-0 w-full h-full lg:py-20">
        <div className="h-full max-w-7xl mx-5 md:mx-10  flex flex-col-reverse lg:flex-row lg:items-center sm:gap-8 lg:gap-16">
          <div className="flex-1 text-2xl md:text-3xl lg:text-5xl text-center lg:text-start">
            <h3 className="pt-4 lg:pt-0">Hello ,</h3>
            <h3 className="my-2 lg:mb-5">
              I&apos;m
              <span className="mx-2 lg:mx-5">Sharmin Akter Reka</span> 
            </h3>
            <h3 className="text-sky-400 text-2xl md:text-4xl mt-2 lg:mt-5 mb-8 lg:mb-10">
              <Typewriter
                options={{
                  strings: ["I am a frontend developer", "I am a ReactJS developer", "I am a MERN stack developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
            <div className="flex items-center justify-center lg:justify-start mx-auto  ">
              <div className="flex items-center gap-4">
                        {socialLinks.map(({ id, icon, href,  bg }) => (
                          <motion.a
                            key={id}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl lg:text-3xl rounded-2xl p-2 mx-auto "style={{ backgroundColor: bg} } 
                          
                            transition={{ duration: 0.3 }}
                          >
                            {icon}
                            {/* <img className="w-8 h-8 object-cover" src={img} alt={alt} /> */}
                          </motion.a>
                        ))}
                      </div>
              {/* <a
                href="#contact"
                className="btn btn-sm h-10 bg-sky-500 hover:bg-primary text-white border-none rounded font-medium ml-4"
              >
                <BsFillTelephoneFill />
                Contact Me
              </a> */}
              <div className="divider divider-horizontal divider-info opacity-40 mx-2 lg:mx-4"></div>
              <PDFDownloadButton />
            </div>
          </div>
          <div className="flex-1 h-full w-full flex items-center justify-center overflow-hidden select-none">
            <div className="circular-container w-[240px] h-[240px] sm:w-[300px] sm:h-[300px]  lg:w-[400px] lg:h-[400px]">
              <img
                className="img1 w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[60px] lg:h-[60px]"
                src={banner1}
                alt=""
              />
              <img
                className="img2 w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[60px] lg:h-[60px]"
                src={banner2}
                alt=""
              />
              <img
                className="img3 w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[60px] lg:h-[60px]"
                src={banner3}
                alt=""
              />
              <img
                className="img4 w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[60px] lg:h-[60px]"
                src={banner4}
                alt=""
              />
              <img
                className="img4 w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[60px] lg:h-[60px]"
                src={banner5}
                alt=""
              />
              <img
                className="img4 w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[60px] lg:h-[60px]"
                src={banner6}
                alt=""
              />
              <img
                className="img4 w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[60px] lg:h-[60px]"
                src={banner7}
                alt=""
              />
              <img
                className="img4 w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[60px] lg:h-[60px]"
                src={banner8}
                alt=""
              />
              <img
                className="img4 w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[60px] lg:h-[60px]"
                src={banner9}
                alt=""
              />
              <img
                className="img4 w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[60px] lg:h-[60px]"
                src={banner10}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
