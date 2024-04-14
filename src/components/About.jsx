
import image from "../assets/mern-stack-development-webbybutter.png";
import PDFDownload from "./PDFDownload";

// import PDFDownloadButton from "./PDFDownloadButton";


const About = () => {
  return (
    <div id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto">
        <h3 className="text-4xl text-center font-clashDisplay font-semibold underline underline-offset-8 decoration-sky-400 md:pt-20">
          About Me
        </h3>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 pt-16 lg:mx-6">
          <div className="flex-1">
            <img className="md:w-96 lg:w-auto lg:h-[500px]" src={image} alt="" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold">Hello , </h3>
            <p>
              I&apos;m Sharmin Akter Reka, an enthusiastic learner, passionate coder (web developer) by choice. Dedicated front end web developer skilled in JavaScript, MongoDB, Express.js, React.js, Next.js, Node.js, Firebase, JWT, Tailwind CSS and Bootstrap, HTML/HTML5, CSS/CSS3.  Freshly i&apos;m on an exhilarating
              learning journey at{" "}
              <a
                href="https://www.programming-hero.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline text-blue-400"
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
                {/* I&apos;m driven by the chance to contribute to innovative */}
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
              {/* <PDFDownloadButton /> */}
              <PDFDownload/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
