
import './App.css'
import About from './components/About'
import Banner from './components/Banner/Banner'
import Experience from './components/Experience'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <div id="home">
      <Navbar />
      <Banner />
      <About />
      <Experience />
      {/* <Projects />
      <Contact />
      <Footer /> */}
    </div>
  )
}

export default App
