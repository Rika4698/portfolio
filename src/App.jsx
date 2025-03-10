
import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Portfolio from './components/Project/Portfolio'
import { FaAngleDoubleUp } from "react-icons/fa";
// import Projects from './components/Projects'

function App() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div id="home">
      <Navbar />
      <Banner />
      <About />
      <Experience />
      <Education/>
      <Portfolio/>
      {/* <Projects /> */}
      <Contact />
      <Footer />
      <button
      onClick={goToTop}
      title="Go To Top"
      className={`
        ${isVisible ? 'flex' : 'hidden'}
        fixed 
        z-50 
        bottom-4 
        right-4 
        md:bottom-9 
        md:right-9 
        p-2 
        md:p-3 
        border-0 
        w-10 
        h-10 
        md:w-12 
        md:h-12 
        rounded 
        shadow-lg 
        
        
         bg-white
        hover:bg-slate-200
        
       text-black
        animate-bounce
        items-center 
        justify-center 
        transition-all 
        duration-300
        hover:scale-110
      `}
    >
      <FaAngleDoubleUp size={24} />
      <span className="sr-only">Go to top</span>
    </button>
      
    </div>
  )
}

export default App
