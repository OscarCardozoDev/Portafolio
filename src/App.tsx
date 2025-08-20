import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import OscarPage from './pages/oscar/OscarPortafolio'
import ManuelPage from './pages/manuel/ManuelPortafolio'
import PabloPage from './pages/pablo/pablo'
import ElianaPage from './pages/eliana/portfolioEliana';
import './App.css'

//Fusione lo mejor de ambos cambios
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oscar" element={<OscarPage />} />
        <Route path="/pablo" element={<PabloPage />} />
        <Route path="/manuel" element={<ManuelPage />} />
        <Route path="/eliana" element={<ElianaPage />} />
      </Routes>
    </Router>
  )
}

export default App;