import './App.css';
import Home from './components/Home';
import Header from './components/common/Header';
import Main from './components/form/Main';
import Footer from './components/common/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router";
import SelectedDestination from './components/destinations/SelectedDestination';
import InfoPage from './components/destinations/InfoPage';
import DestinationReviews from './components/destinations/DestinationReviews';


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
            <Route path="/doggyDestinations/:name" element={<InfoPage />} />
            <Route path="/destinationReviews" element={<DestinationReviews />} /> 
          </Routes>
        </Router>        
      </main>
      <Footer />
    </>
  )
}

export default App
