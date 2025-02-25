import LengthConverter from './components/lengthConverter.jsx'
import WeightConverter from './components/WeightConverter.jsx'
import TemperatureConverter from './components/TemperatureConverter.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import './App.css'

function App() {
  

  return (
    <Router>
      <div className='h-screen flex-col justify-center items-center bg-blue-100'>
        <div className='w-1/2 m-auto py-50'>
          <Navbar />
          <Routes >
            <Route path="/length" element={<LengthConverter />} />
            <Route path="/weight" element={<WeightConverter />} />
            <Route path="/temperature" element={<TemperatureConverter />} />
            <Route path="/" element={<LengthConverter />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
