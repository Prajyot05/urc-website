import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import RegisterPage from './pages/RegisterPage'
import FooterPage from './pages/FooterPage'
import CardsPage from './pages/CardsPage'
import PricePage from './pages/PricePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LandingPage />
    <CardsPage />
    <RegisterPage />
    <PricePage />
    <FooterPage />
    </>
  )
}

export default App
