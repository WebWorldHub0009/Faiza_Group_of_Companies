import { Route, Routes  } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import ScrollToTop from "./Components/ScrollToTop"
import Footer from "./Components/Footer"
import About from "./Pages/About"
import GalleryPage from "../../../Mountain_Trips/mountain-trip/src/Pages/Gallery"
import Gallery from "./Pages/Gallery"
import ServiceDetail from "./Pages/ServiceDetail"
import Contact from "./Pages/Contact"
import CertificatePage from "./Pages/CertificatePage"
import FloatingButtons from "./Components/FloatingButtons"


function App() {

  return (
    <>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/showcase" element={<Gallery/>}/>
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/certificates" element={<CertificatePage/>}/>
      </Routes>
      <Footer/>
      <FloatingButtons/>
    </>
  )
}

export default App
