import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router, Routes, BrowserRouter , Route} from 'react-router-dom'
import Home from './pages/home/home'
import Carrers from './pages/careers/careers'
import DatandAi from './pages/dataandai/dataandai'
import SecurityandSustainability from './pages/securityandsustainability/security'
import ItandAutomation from './pages/itandautomation/itandautomatioon'
import OpendhybridCloud from './pages/openhybridcloud/openhybridcloud'
import Aboutus from './pages/aboutus/aboutus'
import Leadership from './pages/leadership/leadership'
import Solutions from './pages/formobile/solutions'
import Contact from './pages/contactus/contact'
import Notfound from './pages/notfound/notfound'


function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Carrers />} />
        <Route path="/Data-and-Ai" element={<DatandAi />} />
        <Route path="/Security-And-Sustainability" element={<SecurityandSustainability />} />
        <Route path="/IT-And-Automation" element={<ItandAutomation />} />
        <Route path="/Open-Hybrid-Cloud" element={<OpendhybridCloud />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Leadership" element={<Leadership />} />
        <Route path="/Solutions" element={<Solutions />} />
        <Route path="/Contact-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
