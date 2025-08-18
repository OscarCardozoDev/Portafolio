import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import OscarPage from './pages/oscar/OscarPortafolio'
import PabloPage from './pages/pablo'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oscar" element={<OscarPage />} />
        <Route path="/pablo" element={<PabloPage />} />
      </Routes>
    </Router>
  )
}

export default App