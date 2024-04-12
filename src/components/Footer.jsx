import facebookLogo from "./../../src/assets/skills/download.png";
import GmailLogo from "./../../src/assets/skills/gmail.png";
import GitHubLogo from "./../../src/assets/skills/github-icon.png";
import PDFDownloadButton from "./PDFDownloadButton";

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto">
        <div className="h-full flex flex-col lg:flex-row items-center justify-between gap-4 py-6 lg:py-10 ">
          <div className="flex items-start gap-3">
            {/* <img
              className="w-8 rounded-full outline-none border-none"
              src={logo}
              alt=""
            /> */}
            <div className="ml-4 text-lg lg:ml-0">
              
              <h3 className="text-xl lg:text-2xl font-semibold font-clashDisplay ">
                Sharmin Akter Reka
              </h3>
              <small className="ml-4 lg:ml-0">A Frontend Developer</small>
            </div>
          </div>
          <PDFDownloadButton  />
          <div className="flex items-center gap-8">
            <a
              href="https://www.facebook.com/sharmin.sadia.3701/"
              target="_blank"
              rel="noopener noreferrer"
            >
               <img className="object-cover w-[28px] h-[28px] hover:cursor-pointer" src={facebookLogo} alt="youtube" />
            </a>
            <a
              href="mailto:rika_cse_1819@istt.edu.bd"
              target="_blank"
              rel="noopener noreferrer"
            >
             <img className="object-cover w-[28px] h-[28px] hover:cursor-pointer" src={GmailLogo} alt="gmail" />
            </a>
            <a
              href="https://github.com/Rika4698"
              target="_blank"
              rel="noopener noreferrer"
            >
               <img className="object-cover w-[28px] h-[28px] bg-white hover:cursor-pointer" src={GitHubLogo} alt="github" />
            </a>
          </div>
        </div>
        <hr className="opacity-50" />
        <div className="text-center py-5">
          <small>
            Copyright © 2023 - All right reserved by{" "}
            <a
              href="https://my-portfolio-df10f.web.app/"
              className="underline font-semibold"
            >
              Sharmin Akter Reka
            </a>
          </small>
        </div>
      </div>
    </footer>
    );
};

export default Footer;