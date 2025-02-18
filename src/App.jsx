import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router, Routes, BrowserRouter , Route} from 'react-router-dom'
import Home from './pages/home/home'
import Carrers from './pages/careers/careers'


function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Carrers />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
