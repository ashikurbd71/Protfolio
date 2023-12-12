
import './App.css'
import About from './Component/About'
import AskQu from './Component/AskQu'
import Banner from './Component/Banner'
import Contact from './Component/Contact'
import Education from './Component/Education'
import Footer from './Component/Footer'
import Navber from './Component/Navber'
import Protfolio from './Component/Protfolio'
import Service from './Component/Service'
import Skills from './Component/Skills'

function App() {


  return (
    <>
    <Navber/>
    <Banner/>
    <About/>
    <Service/>
    <Skills/>
    <Education/>
    <Protfolio/>
    {/* <AskQu/> */}
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
