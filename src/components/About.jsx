
// import image from "../assets/mern-stack-development-webbybutter.png";
import PDFDownload from "./PDFDownload";
import { motion } from "framer-motion";


// import PDFDownloadButton from "./PDFDownloadButton";


const About = () => {
  return (
    <div id="about" className="py-20 bg-gray-800 text-white">
      {/* <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto">
        <h3 className="text-4xl text-center font-clashDisplay font-semibold underline underline-offset-8 decoration-sky-400 md:pt-20">
          About Me
        </h3>
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 pt-16 lg:mx-6">
          <div className="flex-1">
           
            <motion.div
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
           width={200}
           height={200}
             src="https://i.ibb.co.com/1t5DWVrM/393902629-844286850497707-4308394667661524430-n.jpg"
             alt="Profile"
             className="w-full h-full object-cover"
          />
         </motion.div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold">Hello 👋 , </h3>
            <p>
              I&apos;m Sharmin Akter Reka, an enthusiastic learner, passionate coder (web developer) by choice. Dedicated front end web developer skilled in JavaScript, MongoDB, Express.js, React.js, Next.js, Node.js, Firebase, JWT, Tailwind CSS and Bootstrap, HTML/HTML5, CSS/CSS3.  Freshly i&apos;m on an exhilarating
              learning journey at{" "}
              <a
                href="https://www.programming-hero.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline text-blue-300"
              >
                Programming-Hero
              </a>{" "}
              Institute, exploring the dynamic world of web development.
              <span className="block my-3">
                My interest in coding originates from a fascination with the
                digital world&apos;s inner workings. I specialize in crafting
                robust, user-friendly web applications, prioritizing clean and
                efficient code. For me, great software not only solves problems
                but also enhances the overall user experience.{" "}
              </span>
              <span className="block my-3">
               
                I always look forward to learning new things that boost my skill as well as confidence. I am self-motivated, hard worker and good listener, versatile and fit in solo or team. In my pastime I go for travel and read different books.
              </span>
              <span>
                Currently shaping my professional narrative, I am eager to apply
                my skills and enthusiasm in a dynamic work environment.
                Let&apos;s connect to discuss collaboration, opportunities, or
                simply share thoughts on the exciting possibilities in the world
                of web development.
              </span>
            </p>
            <div className="flex items-center justify-center my-10">
             
              <PDFDownload/>
            </div>
          </div>
        </div>
      </div> */}
      <h3 className=" text-4xl text-center font-clashDisplay font-semibold underline underline-offset-8 decoration-sky-400 mt-14">
          About Me
        </h3>
      <section
        className="relative  flex flex-col-reverse lg:flex-row mx-auto justify-center items-center gap-4 lg:gap-28 max-w-[1300px] py-4  my-12 ">
        
        <div className="lg:w-[720px] z-20 mx-6  ">
            <h1 className="text-3xl md:text-[36px] lg:text-[46px] leading-[56px] text-white font-bold">Hello 👋 ,
                </h1>
            <p className="text-base text-white mt-4 md:mt-6 mb-10 md:mb-16 mx-auto">   I&apos;m Sharmin Akter Reka, an enthusiastic learner, passionate coder (web developer) by choice. Dedicated front end web developer skilled in JavaScript, MongoDB, Express.js, React.js, Next.js, Node.js, Firebase, JWT, Tailwind CSS and Bootstrap, HTML/HTML5, CSS/CSS3.  Freshly i&apos;m on an exhilarating
              learning journey at{" "}
              <a
                href="https://www.programming-hero.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline text-blue-300"
              >
                Programming-Hero
              </a>{" "}
              Institute, exploring the dynamic world of web development.
              <span className="block my-3">
                My interest in coding originates from a fascination with the
                digital world&apos;s inner workings. I specialize in crafting
                robust, user-friendly web applications, prioritizing clean and
                efficient code. {" "}
              </span>
              
              <span>
                Currently shaping my professional narrative, I am eager to apply
                my skills and enthusiasm in a dynamic work environment.
                Let&apos;s connect to discuss  opportunities, or
                simply share thoughts on the exciting possibilities in the world
                of web development.
              </span></p>
            <div className="flex items-center justify-center gap-6 sm:gap-10">
            <PDFDownload/></div>
        </div>
        <div  className="p-4 z-20  rounded-[100px] md:rounded-bl-[200px] lg:rounded-bl-[250px] ">
          
        <motion.div
       
          className="w-64 h-64 lg:min-w-[350px] lg:min-h-[350px]  rounded-full overflow-hidden border-4 border-gray-700 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
           width={200}
           height={200}
             src="https://i.ibb.co.com/1t5DWVrM/393902629-844286850497707-4308394667661524430-n.jpg"
             alt="Profile"
             className="w-full h-full object-cover "
          />
         </motion.div>
          
        </div>
    </section>
    </div>
  );
};

export default About;
