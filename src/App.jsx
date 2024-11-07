import './App.css'
import LandingPage from './pages/LandingPage'
import RegisterPage from './pages/RegisterPage'
import FooterPage from './pages/FooterPage'
import CardsPage from './pages/CardsPage'
import PricePage from './pages/PricePage'
import Popup from './components/Popup'

function App() {

  return (
    <>
      <Popup />
      <LandingPage />
      <CardsPage />
      <RegisterPage />
      {/* <GradientBackground /> */}
      <PricePage />
      <FooterPage />
    </>
  )
}

export default App
