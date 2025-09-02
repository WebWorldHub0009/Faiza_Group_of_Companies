import { Route, Routes  } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import ScrollToTop from "./Components/ScrollToTop"
import Footer from "./Components/Footer"
import About from "./Pages/About"
import GalleryPage from "../../../Mountain_Trips/mountain-trip/src/Pages/Gallery"
import Gallery from "./Pages/Gallery"

function App() {

  return (
    <>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/showcase" element={<Gallery/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
