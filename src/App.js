import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Fixtures from './components/Fixtures/Fixtures'
import Home from './components/Homepage/Home'
import Draws from './components/Draws/Draws'
import Contact from './components/Contact/Contact'
import Accomodation from './components/Accomodation/Accomodation'
import Transportation from './components/Transportation/Transportation'

function App () {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fixtures' element={<Fixtures />} />
          <Route path='/draws' element={<Draws />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/accomodation' element={<Accomodation />} />
          <Route path='/accomodation' element={<Accomodation />} />
          <Route path='/transportation' element={<Transportation />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
