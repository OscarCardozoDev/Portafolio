import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import OscarPage from './pages/oscar/OscarPortafolio'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OscarPage />} />
        <Route path="/oscar" element={<OscarPage />} />
      </Routes>
    </Router>
  )
}

export default App;
