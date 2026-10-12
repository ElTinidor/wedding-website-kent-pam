import NavBar from './components/NavBar'
import flowersImg from './assets/flowers.png'
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import Rsvp from './pages/Rsvp'
import Details from './pages/Details'
import Prenup from './pages/Prenup'
import Playlist from './pages/Playlist'
import './App.css'

function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="main-alt">
        <img src={flowersImg} alt="" aria-hidden="true" className="main-corner-flowers corner-left" />
        <img src={flowersImg} alt="" aria-hidden="true" className="main-corner-flowers corner-right" />
        <div id="home" className="scroll-section">
          <Home />
        </div>
        <div id="story" className="scroll-section">
          <OurStory />
        </div>
        <div id="rsvp" className="scroll-section">
          <Rsvp />
        </div>
        <div id="details" className="scroll-section">
          <Details />
        </div>
        <div id="prenup" className="scroll-section">
          <Prenup />
        </div>
        <div id="playlist" className="scroll-section">
          <Playlist />
        </div>
        <img src={flowersImg} alt="" aria-hidden="true" className="main-corner-flowers corner-bottom-left" />
        <img src={flowersImg} alt="" aria-hidden="true" className="main-corner-flowers corner-bottom-right" />
      </main>
      <footer className="site-footer">
        Floral illustration by{' '}
        <a href="https://www.vecteezy.com" target="_blank" rel="noreferrer">
          Vecteezy.com
        </a>
      </footer>
    </div>
  )
}

export default App
