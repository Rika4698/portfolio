
import './App.css'
import About from './components/About'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Portfolio from './components/Project/Portfolio'
// import Projects from './components/Projects'

function App() {
 

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
    </div>
  )
}

export default App
