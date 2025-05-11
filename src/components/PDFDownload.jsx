import { PiArrowSquareOutBold } from "react-icons/pi";
// import { Link } from "react-router-dom";

const PDFDownload = () => {
   
    return (
        <div>
          <a
      href="https://drive.google.com/file/d/1znM3G_TrmhEe6kw2UYZRbN8dM4_rMwC8/view?usp=drive_link"
      className="bg-sky-500  border-2 hover:border-purple-600 hover:bg-primary text-white px-6 py-3 text-sm  rounded-full flex gap-2 "
    >
                                    <PiArrowSquareOutBold />
                                    <span>Download My CV</span>
                                </a> 
                                
        </div>
    );
};

export default PDFDownload;