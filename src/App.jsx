import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import RegisterPage from './pages/RegisterPage'
import FooterPage from './pages/FooterPage'
import CardsPage from './pages/CardsPage'
import PricePage from './pages/PricePage'
import { GradientBackground } from './components/GradientBackground'

function App() {

  return (
    <>
      <LandingPage />
      <CardsPage />
      <RegisterPage />
      <GradientBackground />
      <FooterPage />
    </>
  )
}

export default App
