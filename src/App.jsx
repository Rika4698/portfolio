
import './App.css'
import About from './components/About'
import Banner from './components/Banner/Banner'
import Education from './components/Education'
import Experience from './components/Experience'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <div id="home">
      <Navbar />
      <Banner />
      <About />
      <Experience />
      <Education/>
      {/* <Projects />
      <Contact />
      <Footer /> */}
    </div>
  )
}

export default App
