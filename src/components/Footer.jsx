import { motion } from "framer-motion";
// import facebookLogo from "./../../src/assets/skills/download.png";
import { FaFacebook, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
// import GmailLogo from "./../../src/assets/skills/gmail.png";
// import GitHubLogo from "./../../src/assets/skills/github-icon.png";
import PDFDownloadButton from "./PDFDownloadButton";

const Footer = () => {
  const socialLinks = [
    { id: 1, icon: <FaFacebook />, href: "https://www.facebook.com/sharmin.rika.46/", alt: "Facebook", bg: "#1877F2" },
    { id: 2, icon: <FaEnvelope />, href: "mailto:rika_cse_1819@istt.edu.bd", alt: "Gmail", bg: "#D44638" },
    { id: 3, icon: <FaGithub />, href: "https://github.com/Rika4698", alt: "GitHub", bg: "black" },
    { id: 4, icon: <FaLinkedin />, href: "https://www.linkedin.com/in/sharmin-rika-2b17a42b4/", bg: "#0077B5" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-5 md:mx-10 xl:mx-auto py-6 lg:py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Profile Info */}
        <div className="flex items-center gap-4 text-center lg:text-left">
          <div>
            <h3 className="text-xl lg:text-2xl font-semibold">Sharmin Akter Reka</h3>
            <small className="block text-gray-400">A Frontend Developer</small>
          </div>
        </div>

        {/* PDF Download Button */}
        <PDFDownloadButton />

        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map(({ id, icon, href,  bg }) => (
            <motion.a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 bg-gray-800 hover:bg-opacity-90 transition-all"
              whileHover={{ scale: 1.2, backgroundColor: bg }}
              transition={{ duration: 0.3 }}
            >
              {icon}
              {/* <img className="w-8 h-8 object-cover" src={img} alt={alt} /> */}
            </motion.a>
          ))}
        </div>
      </div>

      <hr className="opacity-30" />

      {/* Footer Text */}
      <div className="text-center py-4 text-gray-400 text-sm">
        <small>
          Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
          <a href="https://my-portfolio-df10f.web.app/" className="underline font-semibold hover:text-white transition-all">
            Sharmin Akter Reka
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
