
import project1 from "../assets/skills/polling.jpg";
import project2 from "../assets/skills/job.jpg";
import project3 from "../assets/skills/brand shop.jpg";
const Projects = () => {
    return (
        <div id="projects" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-5  md:mx-10 xl:mx-auto">
          <h3 className="text-4xl text-center font-clashDisplay font-semibold underline underline-offset-8 decoration-sky-400">
            My Projects
          </h3>
  
          {/* project 1 */}
          {/* <h3 className="text-2xl text-center font-clashDisplay font-semibold underline underline-offset-8 decoration-primary mt-16 mb-5">
            Project 1
          </h3> */}
          <div className="flex flex-col mt-8 lg:flex-row items-center gap-5 lg:gap-16">
            <div className="flex-1 overflow-hidden">
              <a
                target="_blank"
                href="https://invento-wave.web.app/"
                rel="noreferrer"
              >
                <img
                  className="rounded transition-transform hover:scale-105"
                  src={project1}
                  alt="project"
                />
              </a>
            </div>
            <div className="flex-1">
              <div className="mt-5">
                <h3 className="text-xl font-clashDisplay font-medium">
                  Name : <span className="pl-2">Survey Swift</span>
                </h3>
                <h3 className="text-xl font-clashDisplay font-medium mt-4">
                  Description :
                </h3>
                <p className="pl-5 text-justify">
                Survey Swift is a survey and polling application website
                  designed to survey operations with question & answer.
                  Leveraging a modern tech stack, the project integrates React,
                  Node.js, Express.js, MongoDB,  Firebase to deliver a robust and user-friendly experience.
                </p>
                <h3 className="text-xl font-clashDisplay font-medium mt-4">
                  Key Features :
                </h3>
                <ul className="pl-5 list-inside list-disc">
                  <li>User Authentication</li>
                  <li>Become a pro user</li>
                  <li>Role-Based Dashboards</li>
                  <li>Vote, Comment</li>
                  <li>Chart</li>
                  <li>Payment Integration</li>
                  <li>Email Integration</li>
                </ul>
                <h3 className="text-xl font-clashDisplay font-medium mt-4 mb-2">
                  Tools Used
                </h3>
                <div className="flex flex-wrap gap-3 items-center mb-5 pl-5">
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    React
                  </p>
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    Node.js
                  </p>
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    Express.js
                  </p>
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    MongoDB
                  </p>
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    Tailwind Css
                  </p>
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    Firebase
                  </p>
                
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    Email.js
                  </p>
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    Vercel
                  </p>
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    Github
                  </p>
                </div>
  
                <div className="flex items-center justify-center flex-wrap gap-4 mt-10">
                  <a
                    target="_blank"
                    href="https://github.com/Rika4698/polling-and-survey-application-client"
                    className="btn btn-sm bg-sky-500 hover:bg-primary text-white border-none rounded font-medium"
                    rel="noreferrer"
                  >
                    Client Github Link
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/Rika4698/polling-and-surveys-application-server"
                    className="btn btn-sm bg-sky-500 hover:bg-primary text-white border-none rounded font-medium"
                    rel="noreferrer"
                  >
                   Server Github Link
                  </a>
                  <a
                    target="_blank"
                    href="https://polling-and-survey-client.web.app/"
                    className="btn btn-sm bg-sky-500 hover:bg-primary text-white border-none rounded font-medium"
                    rel="noreferrer"
                  >
                    Live Link
                  </a>
                </div>
              </div>
            </div>
          </div>
  
          {/* project 2 */}
          {/* <h3 className="text-2xl text-center font-clashDisplay font-semibold underline underline-offset-8 decoration-sky-400 mt-16 mb-5">
            Project 2
          </h3> */}
          <div className="flex flex-col-reverse mt-14 lg:flex-row items-center gap-5 lg:gap-16">
            <div className="flex-1">
              <div className="mt-5">
                <h3 className="text-xl font-clashDisplay font-medium">
                  Name : <span className="pl-2">Work Wave </span>
                </h3>
                <h3 className="text-xl font-clashDisplay font-medium mt-4">
                  Description :
                </h3>
                <p className="pl-5 text-justify">
                  Work Wave is a  online job marketplaces management system
                  designed to simplify online jobs processes for others. Utilizing a
                  powerful tech stack that includes React, Node.js, Express.js,
                  MongoDB, Tailwind CSS, Firebase, the project empowers users to
                  efficiently manage their request and post jobs.
                
                </p>
                <h3 className="text-xl font-clashDisplay font-medium mt-4">
                  Key Features :
                </h3>
                <ul className="pl-5 list-inside list-disc">
                  <li>User Authentication</li>
                  <li>Add Job</li>
                  <li>Bids Request</li>
                  <li>My Bids</li>
                  <li>Deadline Strict</li>
                </ul>
                <h3 className="text-xl font-clashDisplay font-medium mt-4 mb-2">
                  Tools Used
                </h3>
                <div className="flex flex-wrap gap-3 items-center mb-5 pl-5">
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    React
                  </p>
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    Node.js
                  </p>
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    Express.js
                  </p>
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    MongoDB
                  </p>
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    Tailwind Css
                  </p>
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    Firebase
                  </p>
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    Vercel
                  </p>
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    Github
                  </p>
                </div>
  
                <div className="flex items-center justify-center flex-wrap gap-4 mt-10">
                  <a
                    target="_blank"
                    href="https://github.com/Rika4698/online-job-marketplaces-client"
                    className="btn btn-sm bg-sky-500 hover:bg-primary text-white border-none rounded font-medium"
                    rel="noreferrer"
                  >
                    Client Github Link
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/Rika4698/polling-and-surveys-application-server"
                    className="btn btn-sm bg-sky-500 hover:bg-primary text-white border-none rounded font-medium"
                    rel="noreferrer"
                  >
                    Server Github Link
                  </a>
                  <a
                    target="_blank"
                    href="https://online-job-marketplaces-client.web.app/"
                    className="btn btn-sm bg-sky-500 hover:bg-primary text-white border-none rounded font-medium"
                    rel="noreferrer"
                  >
                    Live Link
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <a
                target="_blank"
                href="https://library-hub-ef83f.web.app/"
                rel="noreferrer"
              >
                <img
                  className="rounded transition-transform hover:scale-105"
                  src={project2}
                  alt="project"
                />
              </a>
            </div>
          </div>
  
          {/* project 3 */}
          {/* <h3 className="text-2xl text-center font-clashDisplay font-semibold underline underline-offset-8 decoration-primary mt-16 mb-5">
            Project 3
          </h3> */}
          <div className="flex flex-col mt-14 lg:flex-row items-center gap-5 lg:gap-16">
            <div className="flex-1 overflow-hidden">
              <a
                target="_blank"
                href="https://brand-shop-61d84.web.app/"
                rel="noreferrer"
              >
                <img
                  className="rounded transition-transform hover:scale-105"
                  src={project3}
                  alt="project"
                />
              </a>
            </div>
            <div className="flex-1">
              <div className="mt-5">
                <h3 className="text-xl font-clashDisplay font-medium">
                  Name : <span className="pl-2">SR Food & Beverage Ltd</span>
                </h3>
                <h3 className="text-xl font-clashDisplay font-medium mt-4">
                  Description :
                </h3>
                <p className="pl-5 text-justify">
                SR Food & Beverage Ltd is a food & beverage website that brings
                  many product of popular brand to offer users a seamless
                  and intuitive shopping experience. Developed with React,
                  Node.js, Express.js, etc, this project enables
                  users to explore, add, and purchase automotive products.
                </p>
                <h3 className="text-xl font-clashDisplay font-medium mt-4">
                  Key Features :
                </h3>
                <ul className="pl-5 list-inside list-disc">
                  <li>User Authentication</li>
                  <li>Product Management</li>
                  <li>Shopping Cart</li>
                  <li>CRUD Operations</li>
                  <li>Responsive Design</li>
                </ul>
                <h3 className="text-xl font-clashDisplay font-medium mt-4 mb-2">
                  Tools Used
                </h3>
                <div className="flex flex-wrap gap-3 items-center mb-5 pl-5">
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    React
                  </p>
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    Node.js
                  </p>
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    Express.js
                  </p>
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    MongoDB
                  </p>
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    Tailwind Css
                  </p>
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    Firebase
                  </p>
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    Vercel
                  </p>
                  <p className="bg-white text-sm text-black font-medium px-2 rounded">
                    Github
                  </p>
                </div>
  
                <div className="flex items-center justify-center flex-wrap gap-4 mt-10">
                  <a
                    target="_blank"
                    href="https://github.com/Rika4698/food-and-beverage-website-client"
                    className="btn btn-sm bg-sky-500 hover:bg-primary text-white border-none rounded font-medium"
                    rel="noreferrer"
                  >
                    Client Github Link
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/Rika4698/food-beverage-website-server"
                    className="btn btn-sm bg-sky-500 hover:bg-primary text-white border-none rounded font-medium"
                    rel="noreferrer"
                  >
                    Server Github Link
                  </a>
                  <a
                    target="_blank"
                    href="https://food-beverage-website-client.web.app/
                    "
                    className="btn btn-sm bg-sky-500 hover:bg-primary text-white border-none rounded font-medium"
                    rel="noreferrer"
                  >
                    Live Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Projects;
