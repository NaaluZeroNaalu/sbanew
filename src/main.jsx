import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './pages/header/header'

createRoot(document.getElementById('root')).render(
  <>
  <Header />
  <App />
  </>
)
