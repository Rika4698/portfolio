/* eslint-disable react/prop-types */
import { MdFeaturedVideo } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { useState } from "react";

const PortfolioItem = ({
  title,
  img,
  Description,
  live,
  front,
  back,
  features,
  technology,
}) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    
    <div className=" relative ">
      <img src={img} className="w-[500px] h-[300px] rounded-2xl border-2 border-gray-200" alt="portfolio" />
      <div className="rounded-2xl border-2 border-gray-200 absolute inset-0 flex items-center justify-center bg-sky-400  opacity-0  hover:opacity-100 transition duration-300 cursor-pointer  " onClick={toggleModal}>
        {/* <h3 className="text-black -mt-6 ml-8  text-2xl font-semibold">View Details</h3>  */}
        <p className="text-white font-bold text-2xl cursor-pointer  animate-bounce translate-y-0"   
        onClick={toggleModal}>
            {/* mt-24 -ml-20 " */}
          Click Here
        </p>
      </div>
      {modal && (
        <div className="portfolio__modal   fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
        <div className="portfolio__modal-content  text-white bg-gray-800 p-6 rounded-2xl md:w-[700px] lg:w-[750px] min-h-[350px]  mx-4  md:mt-20 ">
            <button
              className="w-10 h-10 rounded-full bg-sky-400 hover:bg-sky-600 -ml-1 mt-0 "
              onClick={toggleModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2 text-white hover:text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h3 className=" text-xl text-purple-300 font-bold -mt-10  mb-4 ml-[85px] md:ml-[200px] lg:ml-[250px] md:text-3xl">{title}</h3>
            <div className="flex pb-4 md:text-lg justify-between underline  md:gap-24 gap-5  text-blue-500 pt-6">
              <a
              target="_blank"
                href={front}
                
                className="flex hover:text-green-400  items-center gap-1 xl:font-bold"
              >
                <FaGithub></FaGithub>Client
              </a>
              {back ? (
                <a
                target="_blank"
                  href={back}
                 
                  className="flex hover:text-green-400  items-center gap-1 xl:font-bold"
                >
                  <FaGithub></FaGithub>Server
                </a>
              ) : (
                ""
              )}

              <a
              target="_blank"
                href={live}
                className="flex hover:text-green-400  items-center gap-1 xl:font-bold"
              >
                <CgWebsite />
                Live site{" "}
              </a>
            </div>
            <p className=" text-xl pt-2 font-bold hidden sm:inline">Description:  <span className="text-base text-slate-300 font-medium ml-2">{Description}</span></p>
            <div className="pt-2">
              <h3 className="text-xl flex gap-2 font-bold items-center">
                <MdFeaturedVideo /> Key Features of project :
              </h3>
              <div className="pt-3">
                {features?.map((feature) => (
                  <div className="space-y-2 text-slate-300 font-medium" key={feature.id}>
                    <p className="">{feature.f1}</p>
                    <p className="">{feature.f2}</p>
                    <p className="">{feature.f3}</p>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <h2 className="text-lg flex gap-2 font-bold items-center">
                  <GrTechnology />
                  Technology used :
                </h2>
                <p className="mt-2 text-slate-300 font-medium">( {technology} )</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default PortfolioItem;