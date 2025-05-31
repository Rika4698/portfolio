import { PiArrowSquareOutBold } from "react-icons/pi";

const PDFDownloadButton = () => {
  return (
    <>
      <a
         href="https://drive.google.com/file/d/1OrILQ_lWw86DRtNqoXpTW8zSe73AG8hj/view?usp=sharing"
        // download="Resume of Sharmin Akter Reka.pdf"
        className="btn btn-sm h-10 bg-sky-500  hover:bg-primary text-white border-none rounded font-medium"
      >
        My Resume <PiArrowSquareOutBold />
      </a>
    </>
  );
};

export default PDFDownloadButton;