import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import RegisterPage from './pages/RegisterPage'
import FooterPage from './pages/FooterPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <LandingPage /> */}
    <RegisterPage />
    {/* <FooterPage /> */}
    </>
  )
}

export default App
