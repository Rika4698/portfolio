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
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-60 overflow-y-auto cursor-pointer" onClick={toggleModal}>
    <div className="bg-gray-900 text-white rounded-2xl max-w-3xl w-full mx-5 md:mx-8 overflow-y-auto shadow-lg my-auto cursor-default" onClick={(e) => e.stopPropagation()}>

      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button
          className="w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-600 flex items-center justify-center"
          onClick={toggleModal}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Image */}
      {/* <div className="w-full">
        <img src={img} alt={title} className="w-full object-cover max-h-96" />
      </div> */}

      {/* Content */}
      <div className="px-6 pb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-300 text-center mt-4 mb-4">{title}</h2>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-blue-400 underline font-semibold mb-4">
          <a href={front} target="_blank" className="flex items-center gap-2 hover:text-green-400">
            <FaGithub /> Client
          </a>
          {back && (
            <a href={back} target="_blank" className="flex items-center gap-2 hover:text-green-400">
              <FaGithub /> Server
            </a>
          )}
          <a href={live} target="_blank" className="flex items-center gap-2 hover:text-green-400">
            <CgWebsite /> Live Site
          </a>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg font-semibold mb-2">Description:</p>
        <p className="text-slate-300 text-sm md:text-base mb-4">{Description}</p>

        {/* Features */}
        <div>
          <h3 className="text-lg md:text-xl font-bold flex items-center gap-2 mb-2">
            <MdFeaturedVideo /> Key Features:
          </h3>
          <ul className="list-disc list-inside text-slate-300 text-sm md:text-base space-y-1 mb-4">
            {features?.map((feature) => (
              <div key={feature.id}>
                {feature.f1 && <li>{feature.f1}</li>}
                {feature.f2 && <li>{feature.f2}</li>}
                {feature.f3 && <li>{feature.f3}</li>}
              </div>
            ))}
          </ul>
        </div>

        {/* Technology */}
        <div>
          <h3 className="text-lg md:text-xl font-bold flex items-center gap-2 mb-2">
            <GrTechnology /> Technology Used:
          </h3>
          <p className="text-slate-300 text-sm md:text-base">( {technology} )</p>
        </div>
      </div>
    </div>
  </div>
)}
      
    </div>
  );
};

export default PortfolioItem;