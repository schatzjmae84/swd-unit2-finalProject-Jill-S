import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router"
import SelectedDestination from './components/SelectedDestination'
import InfoPage from './components/InfoPage'


function App() {
  
  return (
    <>
      <Header /><hr></hr>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pupPlaces" element={<Main />} />
            <Route path="/idealInfo" element={<SelectedDestination />} />
            <Route path="/doggyDestinations" element={<InfoPage />} />  
          </Routes>
        </Router>        
      </main>
      <Footer />
    </>
  )
}

export default App
