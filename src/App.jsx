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


function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Carrers />} />
        <Route path="/Data-and-Ai" element={<DatandAi />} />
        <Route path="/Security-And-Sustainability" element={<SecurityandSustainability />} />
        <Route path="/IT-And-Automation" element={<ItandAutomation />} />
        <Route path="/Open-Hybrid-Cloud" element={<OpendhybridCloud />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
