import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import SearchPage from './pages/SearchPage'
import InfoPage from './pages/InfoPage'
import LoungePage from './pages/LoungePage'
import SupportPage from './pages/SupportPage'
import TravelersPage from './pages/TravelersPage'
import SignupPage from './pages/SignupPage'
import NotFoundPage from './pages/NotFoundPage'
import './components/components.css'

function App() {
  const location = useLocation()

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic' })
  }, [])

  useEffect(() => {
    AOS.refreshHard()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/lounge" element={<LoungePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/travelers" element={<TravelersPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
